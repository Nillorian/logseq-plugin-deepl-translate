import '@logseq/libs';
import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';
import { logseq as PL } from '../package.json';
import { DeepLClient } from './api/deepl';
import { TranslationDialog } from './ui/dialog';
import { PluginSettings, TranslationRequest, BlockIdEvent, LogseqCurrentBlockRef, LogseqBlockNode } from './types/index';
import { normalizeBlockIdFromEvent, collectAllBlockIds } from './utils/blocks';

const pluginId = PL.id;

const settingsSchema: SettingSchemaDesc[] = [
  {
    key: 'apiKey',
    type: 'string',
    default: '',
    title: 'DeepL API Key',
    description: 'Your DeepL API key from https://www.deepl.com/docs-api',
  },
  {
    key: 'defaultTargetLang',
    type: 'string',
    default: 'EN',
    title: 'Default Target Language',
    description: 'Default target language for translations (e.g., EN, DE, FR, ZH)',
  },
  {
    key: 'isPro',
    type: 'boolean',
    default: false,
    title: 'Use Pro API',
    description: 'Enable if you have a DeepL Pro account',
  },
];

const pluginState = {
  deepLClient: null as DeepLClient | null,
  translationDialog: null as TranslationDialog | null,
  menuRegistered: false,
};

function getSettings(): Partial<PluginSettings> {
  return (logseq.settings as Partial<PluginSettings>) || {};
}

function getShortcutDisplay(shortcut?: string): string {
  return (shortcut || '').trim();
}

function withShortcutLabel(label: string, shortcut?: string): string {
  const display = getShortcutDisplay(shortcut);
  return display ? `${label} --- (${display})` : label;
}

async function getCurrentBlockId(): Promise<string | null> {
  try {
    const currentBlock = await logseq.Editor.getCurrentBlock();
    if (!currentBlock) {
      return null;
    }
    const blockRef = currentBlock as LogseqCurrentBlockRef;
    return blockRef.uuid || blockRef['block/uuid'] || null;
  } catch (error) {
    console.error('Failed to get current block:', error);
    return null;
  }
}

function registerShortcutAction(
  shortcut: string | undefined,
  actionName: string,
  handler: () => Promise<void>
): void {
  const binding = (shortcut || '').trim();
  if (!binding) {
    return;
  }

  try {
    logseq.App.registerCommandShortcut({
      binding,
    }, () => {
      void handler();
    });
  } catch (error) {
    console.warn(`Failed to register shortcut for ${actionName}:`, { binding, error });
    logseq.UI.showMsg(`⚠️ Invalid shortcut for ${actionName}: ${binding}`, 'warning');
  }
}

async function runOnCurrentBlock(actionName: string, action: (blockId: string) => Promise<void>): Promise<void> {
  const blockId = await getCurrentBlockId();
  if (!blockId) {
    logseq.UI.showMsg(`⚠️ No active block found for ${actionName}`, 'warning');
    return;
  }

  await action(blockId);
}

/**
 * Initialize DeepL client from settings
 */
function initializeDeepLClient(): boolean {
  const settings = logseq.settings as any;

  if (!settings?.apiKey) {
    logseq.UI.showMsg(
      '⚠️ Please set your DeepL API key in the plugin settings',
      'warning'
    );
    return false;
  }

  try {
    const isPro = !!settings.isPro;
    pluginState.deepLClient = new DeepLClient(settings.apiKey, isPro);
    return true;
  } catch (error) {
    logseq.UI.showMsg(
      `❌ Failed to initialize DeepL client: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'error'
    );
    return false;
  }
}

/**
 * Get block content from Logseq
 */
async function getBlockContent(blockId: string): Promise<string | null> {
  try {
    const block = (await logseq.Editor.getBlock(blockId, { includeChildren: false })) as LogseqBlockNode | null;
    
    if (!block) {
      console.error('Block not found:', blockId);
      return null;
    }

    // Try multiple content properties in order of likelihood
    const content = block.content || block.string || block.title || block.text || '';
    
    if (!content || content.trim().length === 0) {
      console.error('Block has no readable content:', { blockId, block });
      return null;
    }
    return content;
  } catch (error) {
    console.error('Failed to get block content:', { blockId, error });
    return null;
  }
}

/**
 * Handle translation request
 */
async function handleTranslation(blockId: string): Promise<void> {
  if (!pluginState.deepLClient) {
    if (!initializeDeepLClient()) {
      return;
    }
  }

  // Show loading state
  pluginState.translationDialog?.showLoadingDialog();

  try {
    // Get block content
    const blockContent = await getBlockContent(blockId);
    if (!blockContent) {
      pluginState.translationDialog?.showErrorDialog('Could not retrieve block content');
      return;
    }

    // Get target language from settings
    const settings = logseq.settings as any;
    const targetLang = (settings?.defaultTargetLang as string) || 'EN';

    // Create translation request
    const translationRequest: TranslationRequest = {
      text: blockContent,
      targetLang: targetLang,
      sourceLang: undefined, // Let DeepL auto-detect by not specifying source_lang
    };

    // Perform translation
    if (!pluginState.deepLClient) {
      pluginState.translationDialog?.showErrorDialog('DeepL client not initialized');
      return;
    }

    const result = await pluginState.deepLClient.translate(translationRequest);

    // Show translation result
    pluginState.translationDialog?.showTranslationDialog(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Translation error:', error);
    pluginState.translationDialog?.showErrorDialog(errorMessage);
  }
}

/**
 * Handle inline translation (replace block content with translation)
 */
async function handleInlineTranslation(blockId: string): Promise<void> {
  if (!pluginState.deepLClient) {
    if (!initializeDeepLClient()) {
      return;
    }
  }

  try {
    // Get block content
    const blockContent = await getBlockContent(blockId);
    if (!blockContent) {
      logseq.UI.showMsg('⚠️ Could not retrieve block content', 'warning');
      return;
    }

    // Get target language from settings
    const settings = logseq.settings as any;
    const targetLang = (settings?.defaultTargetLang as string) || 'EN';

    // Show loading state with a notification
    logseq.UI.showMsg('⏳ Translating...', 'info');

    // Create translation request
    const translationRequest: TranslationRequest = {
      text: blockContent,
      targetLang: targetLang,
      sourceLang: undefined,
    };

    // Perform translation
    if (!pluginState.deepLClient) {
      logseq.UI.showMsg('❌ DeepL client not initialized', 'error');
      return;
    }

    const result = await pluginState.deepLClient.translate(translationRequest);

    // Update block content with translated text
    await logseq.Editor.updateBlock(blockId, result.translated);

    logseq.UI.showMsg('✅ Block translated successfully', 'success');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Inline translation error:', error);
    logseq.UI.showMsg(`❌ ${errorMessage}`, 'error');
  }
}

/**
 * Handle inline translation with sub-blocks
 */
async function handleInlineTranslationWithSubBlocks(blockId: string): Promise<void> {
  if (!pluginState.deepLClient) {
    if (!initializeDeepLClient()) {
      return;
    }
  }

  try {
    // Collect all block IDs (parent + all sub-blocks)
    logseq.UI.showMsg('📦 Collecting blocks...', 'info');
    const allBlockIds = await collectAllBlockIds(blockId);

    if (allBlockIds.length === 0) {
      logseq.UI.showMsg('⚠️ No blocks found to translate', 'warning');
      return;
    }

    // Get target language from settings
    const settings = logseq.settings as any;
    const targetLang = (settings?.defaultTargetLang as string) || 'EN';

    logseq.UI.showMsg(`⏳ Translating ${allBlockIds.length} block(s)...`, 'info');

    // Translate each block
    let successCount = 0;
    let failureCount = 0;
    const failedErrors: string[] = [];

    for (const currentBlockId of allBlockIds) {
      try {
        const blockContent = await getBlockContent(currentBlockId);
        if (!blockContent) {
          failureCount++;
          failedErrors.push(`• Block ${currentBlockId}: No content found`);
          continue;
        }

        const translationRequest: TranslationRequest = {
          text: blockContent,
          targetLang: targetLang,
          sourceLang: undefined,
        };

        if (!pluginState.deepLClient) {
          failureCount++;
          failedErrors.push(`• Block ${currentBlockId}: DeepL client not initialized`);
          continue;
        }

        const result = await pluginState.deepLClient.translate(translationRequest);
        await logseq.Editor.updateBlock(currentBlockId, result.translated);
        successCount++;
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        failureCount++;
        failedErrors.push(`• Block ${currentBlockId}: ${errorMsg}`);
      }
    }

    // Show result with errors in a dialog if there are failures
    if (failureCount === 0) {
      logseq.UI.showMsg(`✅ Successfully translated all ${successCount} block(s)!`, 'success');
    } else if (successCount === 0) {
      // Show error dialog for all failures
      await pluginState.translationDialog?.showErrorDialog(
        `Failed to translate all blocks:\n\n${failedErrors.join('\n')}`
      );
    } else {
      // Show warning dialog with mixed results
      await pluginState.translationDialog?.showErrorDialog(
        `Translated ${successCount}/${allBlockIds.length} block(s)\n\nFailed blocks:\n${failedErrors.join('\n')}`
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    logseq.UI.showMsg(`❌ ${errorMessage}`, 'error');
  }
}

async function main() {
  console.info(`#${pluginId}: MAIN`);

  try {
    // Register settings schema at runtime to avoid loader issues if host lacks certain methods
    logseq.useSettingsSchema(settingsSchema);
  } catch (e) {
    console.warn('Failed to register settings schema (non-fatal):', e);
  }

  logseq.UI.showMsg(`❤️ Message from : ${pluginId}`);

  // Initialize translation dialog lazily
  if (!pluginState.translationDialog) {
    pluginState.translationDialog = new TranslationDialog();
  }

  // Register block context menu item only once
  if (!pluginState.menuRegistered) {
    const settings = getSettings();

    registerShortcutAction(
      settings.translateShortcut,
      'Translate',
      async () => runOnCurrentBlock('Translate', handleTranslation)
    );

    registerShortcutAction(
      settings.replaceShortcut,
      'Replace with Translation',
      async () => runOnCurrentBlock('Replace with Translation', handleInlineTranslation)
    );

    registerShortcutAction(
      settings.replaceSubBlocksShortcut,
      'Replace with Translation + Sub-blocks',
      async () => runOnCurrentBlock('Replace with Translation + Sub-blocks', handleInlineTranslationWithSubBlocks)
    );

    logseq.Editor.registerBlockContextMenuItem(
      withShortcutLabel('🌐 Translate', settings.translateShortcut),
      async (e: any) => {
        const blockId = normalizeBlockIdFromEvent(e);
        if (!blockId) {
          logseq.UI.showMsg('⚠️ Could not determine block for Translate', 'warning');
          return;
        }
        
        console.info(`Translating block:`, { blockId, eventType: typeof e, eventKeys: Object.keys(e || {}) });
        await handleTranslation(blockId);
      }
    );

    logseq.Editor.registerBlockContextMenuItem(
      withShortcutLabel('🌐 Replace with Translation', settings.replaceShortcut),
      async (e: any) => {
        const blockId = normalizeBlockIdFromEvent(e);
        if (!blockId) {
          logseq.UI.showMsg('⚠️ Could not determine block for Replace with Translation', 'warning');
          return;
        }
        
        console.info(`Inline translating block:`, { blockId });
        await handleInlineTranslation(blockId);
      }
    );

    logseq.Editor.registerBlockContextMenuItem(
      withShortcutLabel('🌐 Replace with Translation + Sub-blocks', settings.replaceSubBlocksShortcut),
      async (e: any) => {
        const blockId = normalizeBlockIdFromEvent(e);
        if (!blockId) {
          logseq.UI.showMsg('⚠️ Could not determine block for Replace with Translation + Sub-blocks', 'warning');
          return;
        }
        
        console.info(`Inline translating block with sub-blocks:`, { blockId });
        await handleInlineTranslationWithSubBlocks(blockId);
      }
    );

    pluginState.menuRegistered = true;
  }

  console.info(`#${pluginId}: Loaded successfully`);
}

// Bootstrap
logseq.ready(main).catch(console.error);
