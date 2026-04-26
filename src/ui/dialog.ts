import { TranslationResult } from '../types/index';

interface LogseqUIConfig {
  key: string;
  close: 'outside' | 'inside';
  template: string;
  style: Record<string, string>;
  attrs?: Record<string, string>;
  reset?: boolean;
}

/**
 * UI Dialog Component for translation display
 */
export class TranslationDialog {
  // Use a per-instance key to avoid stale DOM collisions during plugin reload/dispose.
  private readonly dialogKey = `deepl-translation-dialog-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  /**
   * Show translation result in a dialog
   * @param result - Translation result to display
   * @param position - Optional position {x, y} for the dialog
   */
  showTranslationDialog(
    result: TranslationResult,
    position?: { x: number; y: number }
  ): void {
    const template = this.buildTemplate(result);

    const dialogConfig: LogseqUIConfig = {
      key: this.dialogKey,
      close: 'outside',
      reset: true,
      template,
      style: {
        backgroundColor: 'var(--ls-primary-background-color)',
        color: 'var(--ls-primary-text-color)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        maxWidth: '600px',
        width: '90vw',
      },
      attrs: {
        title: '🌐 DeepL Translator',
      },
    };

    if (position) {
      dialogConfig.style.left = `${position.x}px`;
      dialogConfig.style.top = `${position.y}px`;
    }

    logseq.provideUI(dialogConfig);
  }

  /**
   * Show loading state dialog
   * @param position - Optional position {x, y} for the dialog
   */
  showLoadingDialog(position?: { x: number; y: number }): void {
    const template = `
      <div style="padding: 20px; text-align: center;">
        <div style="display: inline-block; animation: spin 1s linear infinite; font-size: 24px;">⏳</div>
        <p style="margin-top: 10px; color: var(--ls-secondary-text-color);">Translating...</p>
      </div>
    `;

    const dialogConfig: LogseqUIConfig = {
      key: this.dialogKey,
      close: 'outside',
      reset: true,
      template,
      style: {
        backgroundColor: 'var(--ls-primary-background-color)',
        color: 'var(--ls-primary-text-color)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        minWidth: '250px',
      },
      attrs: {
        title: '🌐 DeepL Translator',
      },
    };

    if (position) {
      dialogConfig.style.left = `${position.x}px`;
      dialogConfig.style.top = `${position.y}px`;
    }

    logseq.provideUI(dialogConfig);
  }

  /**
   * Show error dialog
   * @param errorMessage - Error message to display
   * @param position - Optional position {x, y} for the dialog
   */
  showErrorDialog(errorMessage: string, position?: { x: number; y: number }): void {
    const template = `
      <div style="padding: 20px;">
        <div style="font-size: 24px; margin-bottom: 10px;">⚠️</div>
        <h3 style="margin: 0 0 10px 0; color: var(--ls-primary-text-color);">Translation Error</h3>
        <p style="margin: 0; color: var(--ls-secondary-text-color); font-size: 14px;">
          ${this.escapeHtml(errorMessage)}
        </p>
      </div>
    `;

    const dialogConfig: LogseqUIConfig = {
      key: this.dialogKey,
      close: 'outside',
      reset: true,
      template,
      style: {
        backgroundColor: 'var(--ls-primary-background-color)',
        color: 'var(--ls-primary-text-color)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        minWidth: '300px',
      },
      attrs: {
        title: '🌐 DeepL Translator',
      },
    };

    if (position) {
      dialogConfig.style.left = `${position.x}px`;
      dialogConfig.style.top = `${position.y}px`;
    }

    logseq.provideUI(dialogConfig);
  }

  /**
   * Close the translation dialog
   */
  closeDialog(): void {
    logseq.hideMainUI();
  }

  /**
   * Build HTML template for translation result
   */
  private buildTemplate(result: TranslationResult): string {
    return `
      <div style="padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="margin-bottom: 15px;">
          <div style="font-size: 12px; color: var(--ls-secondary-text-color); margin-bottom: 5px; text-transform: uppercase; font-weight: 600;">
            Source Text
            ${result.sourceLang ? `<span style="margin-left: 10px;">(${result.sourceLang})</span>` : ''}
          </div>
          <div style="
            background: var(--ls-secondary-background-color);
            padding: 12px;
            border-radius: 4px;
            line-height: 1.6;
            word-wrap: break-word;
            max-height: 150px;
            overflow-y: auto;
          ">
            ${this.escapeHtml(result.original)}
          </div>
        </div>

        <div style="
          text-align: center;
          margin: 12px 0;
          padding: 8px 0;
          border-top: 1px solid var(--ls-border-color);
          border-bottom: 1px solid var(--ls-border-color);
        ">
          ⬇️
        </div>

        <div style="margin-bottom: 15px;">
          <div style="font-size: 12px; color: var(--ls-secondary-text-color); margin-bottom: 5px; text-transform: uppercase; font-weight: 600;">
            Translated Text (${result.targetLang})
          </div>
          <div style="
            background: var(--ls-secondary-background-color);
            padding: 12px;
            border-radius: 4px;
            line-height: 1.6;
            word-wrap: break-word;
            max-height: 150px;
            overflow-y: auto;
          ">
            ${this.escapeHtml(result.translated)}
          </div>
        </div>

        <div style="
          text-align: right;
          font-size: 11px;
          color: var(--ls-secondary-text-color);
          margin-top: 10px;
        ">
          Powered by DeepL
        </div>
      </div>
    `;
  }

  /**
   * Escape HTML special characters to prevent XSS
   */
  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

export function createTranslationDialog(): TranslationDialog {
  return new TranslationDialog();
}
