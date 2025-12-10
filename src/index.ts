import '@logseq/libs';
import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';
import { logseq as PL } from '../package.json';
import { DeepLClient } from './api/deepl';
import { TranslationDialog } from './ui/dialog';
import { TranslationRequest } from './types/index';

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

let deepLClient: DeepLClient | null = null;
let translationDialog: TranslationDialog;
let menuRegistered = false;

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
    const isPro = (settings.isPro as boolean) || false;
    deepLClient = new DeepLClient(settings.apiKey as string, isPro);
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
    const block = await logseq.Editor.getBlock(blockId, { includeChildren: false });
    console.log('Block data:', { blockId, block, keys: Object.keys(block || {}) });
    
    if (!block) {
      console.error('Block not found:', blockId);
      return null;
    }

    // Try multiple content properties in order of likelihood
    let content = block.content as string;
    if (!content && (block as any)['string']) {
      content = (block as any)['string'];
    }
    if (!content && block.title) {
      content = block.title as string;
    }
    if (!content && (block as any).text) {
      content = (block as any).text;
    }

    console.log('Extracted content:', { blockId, content, length: content?.length });
    
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
  if (!deepLClient) {
    if (!initializeDeepLClient()) {
      return;
    }
  }

  // Show loading state
  translationDialog.showLoadingDialog();

  try {
    // Get block content
    const blockContent = await getBlockContent(blockId);
    if (!blockContent) {
      translationDialog.showErrorDialog('Could not retrieve block content');
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
    if (!deepLClient) {
      translationDialog.showErrorDialog('DeepL client not initialized');
      return;
    }

    const result = await deepLClient.translate(translationRequest);

    // Show translation result
    translationDialog.showTranslationDialog(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Translation error:', error);
    translationDialog.showErrorDialog(errorMessage);
  }
}

/**
 * Handle inline translation (replace block content with translation)
 */
async function handleInlineTranslation(blockId: string): Promise<void> {
  if (!deepLClient) {
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
    if (!deepLClient) {
      logseq.UI.showMsg('❌ DeepL client not initialized', 'error');
      return;
    }

    const result = await deepLClient.translate(translationRequest);

    // Update block content with translated text
    await logseq.Editor.updateBlock(blockId, result.translated);

    logseq.UI.showMsg('✅ Block translated successfully', 'success');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Inline translation error:', error);
    logseq.UI.showMsg(`❌ ${errorMessage}`, 'error');
  }
}

async function main() {
  console.info(`#${pluginId}: MAIN`);

  // Initialize translation dialog lazily
  if (!translationDialog) {
    translationDialog = new TranslationDialog();
  }

  // Set plugin settings schema
  logseq.useSettingsSchema(settingsSchema);

  // Register block context menu item only once
  if (!menuRegistered) {
    logseq.Editor.registerBlockContextMenuItem(
      '🌐 Translate',
      async (e: any) => {
        // Handle both formats: direct blockId string or block object with uuid
        const blockId = typeof e === 'string' 
          ? e 
          : (e.blockId || e.uuid || e['block/uuid']);
        
        console.info(`Translating block:`, { blockId, eventType: typeof e, eventKeys: Object.keys(e || {}) });
        await handleTranslation(blockId);
      }
    );

    logseq.Editor.registerBlockContextMenuItem(
      '🌐 Replace with Translation',
      async (e: any) => {
        // Handle both formats: direct blockId string or block object with uuid
        const blockId = typeof e === 'string' 
          ? e 
          : (e.blockId || e.uuid || e['block/uuid']);
        
        console.info(`Inline translating block:`, { blockId });
        await handleInlineTranslation(blockId);
      }
    );

    menuRegistered = true;
  }

  console.info(`#${pluginId}: Loaded successfully`);
}

// Bootstrap
logseq.ready(main).catch(console.error);
