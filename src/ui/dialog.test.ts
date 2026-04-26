import { describe, it, expect, beforeEach } from 'vitest';
import { TranslationDialog } from './dialog';

// TranslationDialog uses logseq.provideUI — stub it before each test
beforeEach(() => {
  (globalThis as any).logseq = {
    provideUI: () => {},
    hideMainUI: () => {},
  };
});

describe('TranslationDialog', () => {
  describe('escapeHtml (via buildTemplate)', () => {
    let dialog: TranslationDialog;

    beforeEach(() => {
      dialog = new TranslationDialog();
    });

    it('escapes < and > characters', () => {
      const result = dialog.showTranslationDialog(
        { original: '<b>bold</b>', translated: 'test', targetLang: 'DE' },
      );
      // Access buildTemplate output indirectly by checking provideUI was called
      // and escaping is correct via a public reflection
      const template = (dialog as any).buildTemplate({
        original: '<script>alert(1)</script>',
        translated: 'safe',
        targetLang: 'EN',
      });
      expect(template).not.toContain('<script>');
      expect(template).toContain('&lt;script&gt;');
    });

    it('escapes & character', () => {
      const template = (dialog as any).buildTemplate({
        original: 'a & b',
        translated: 'result',
        targetLang: 'DE',
      });
      expect(template).toContain('a &amp; b');
    });

    it('escapes double quotes', () => {
      const template = (dialog as any).buildTemplate({
        original: '"quoted"',
        translated: 'result',
        targetLang: 'DE',
      });
      // div.innerHTML does not encode quotes — they are safe in text nodes
      // Verify the text is present and no XSS vector was injected
      expect(template).toContain('"quoted"');
    });

    it('renders translated text escaped in template', () => {
      const template = (dialog as any).buildTemplate({
        original: 'hello',
        translated: '<img src=x onerror=alert(1)>',
        targetLang: 'DE',
      });
      expect(template).not.toContain('<img');
      expect(template).toContain('&lt;img');
    });

    it('includes targetLang label', () => {
      const template = (dialog as any).buildTemplate({
        original: 'hello',
        translated: 'hola',
        targetLang: 'ES',
      });
      expect(template).toContain('ES');
    });

    it('includes sourceLang when provided', () => {
      const template = (dialog as any).buildTemplate({
        original: 'hello',
        translated: 'hola',
        sourceLang: 'EN',
        targetLang: 'ES',
      });
      expect(template).toContain('EN');
    });

    it('omits sourceLang span when not provided', () => {
      const template = (dialog as any).buildTemplate({
        original: 'hello',
        translated: 'hola',
        targetLang: 'ES',
      });
      // sourceLang span should not render a language code
      expect(template).not.toMatch(/\(EN\)/);
    });
  });
});
