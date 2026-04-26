import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { DeepLClient } from './deepl';

describe('DeepLClient', () => {
  const mockSuccessResponse = {
    translations: [{ text: 'Hallo Welt', detected_source_language: 'EN' }],
  };

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('constructor', () => {
    it('throws when apiKey is empty', () => {
      expect(() => new DeepLClient('')).toThrow('DeepL API key is required');
    });

    it('uses free endpoint by default', () => {
      const client = new DeepLClient('test-key');
      expect((client as any).apiUrl).toBe('https://api-free.deepl.com/v2/translate');
    });

    it('uses pro endpoint when isPro is true', () => {
      const client = new DeepLClient('test-key', true);
      expect((client as any).apiUrl).toBe('https://api.deepl.com/v2/translate');
    });
  });

  describe('translate', () => {
    it('returns translation result on success', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockSuccessResponse,
      } as Response);

      const client = new DeepLClient('test-key');
      const result = await client.translate({ text: 'Hello World', targetLang: 'DE' });

      expect(result.original).toBe('Hello World');
      expect(result.translated).toBe('Hallo Welt');
      expect(result.targetLang).toBe('DE');
      expect(result.sourceLang).toBe('EN');
    });

    it('sends Authorization header with correct format', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockSuccessResponse,
      } as Response);

      const client = new DeepLClient('my-api-key');
      await client.translate({ text: 'test', targetLang: 'FR' });

      const [, init] = vi.mocked(fetch).mock.calls[0];
      const headers = init?.headers as Record<string, string>;
      expect(headers['Authorization']).toBe('DeepL-Auth-Key my-api-key');
    });

    it('includes source_lang in body when sourceLang is provided', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockSuccessResponse,
      } as Response);

      const client = new DeepLClient('test-key');
      await client.translate({ text: 'test', targetLang: 'DE', sourceLang: 'EN' });

      const [, init] = vi.mocked(fetch).mock.calls[0];
      const body = JSON.parse(init?.body as string);
      expect(body.source_lang).toBe('EN');
    });

    it('omits source_lang when not provided', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockSuccessResponse,
      } as Response);

      const client = new DeepLClient('test-key');
      await client.translate({ text: 'test', targetLang: 'DE' });

      const [, init] = vi.mocked(fetch).mock.calls[0];
      const body = JSON.parse(init?.body as string);
      expect(body.source_lang).toBeUndefined();
    });

    it('throws on non-ok HTTP response', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: false,
        status: 403,
        json: async () => ({ message: 'Forbidden' }),
      } as Response);

      const client = new DeepLClient('bad-key');
      await expect(client.translate({ text: 'test', targetLang: 'DE' })).rejects.toThrow(
        'DeepL API error 403: Forbidden'
      );
    });

    it('throws when translations array is empty', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ translations: [] }),
      } as Response);

      const client = new DeepLClient('test-key');
      await expect(client.translate({ text: 'test', targetLang: 'DE' })).rejects.toThrow(
        'No translation returned from DeepL API'
      );
    });

    it('wraps network errors with Translation failed prefix', async () => {
      vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));
      const client = new DeepLClient('test-key');
      await expect(client.translate({ text: 'test', targetLang: 'DE' })).rejects.toThrow(
        'Translation failed: Network error'
      );
    });
  });

  describe('normalizeLanguageCode (via translate)', () => {
    it('normalizes lowercase lang code to uppercase', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockSuccessResponse,
      } as Response);

      const client = new DeepLClient('test-key');
      await client.translate({ text: 'test', targetLang: 'de' });

      const [, init] = vi.mocked(fetch).mock.calls[0];
      const body = JSON.parse(init?.body as string);
      expect(body.target_lang).toBe('DE');
    });
  });

  describe('getSupportedLanguages', () => {
    it('returns a non-empty array', () => {
      expect(DeepLClient.getSupportedLanguages().length).toBeGreaterThan(0);
    });

    it('includes AUTO as first entry', () => {
      const [first] = DeepLClient.getSupportedLanguages();
      expect(first.code).toBe('AUTO');
    });

    it('all entries have code and name', () => {
      for (const lang of DeepLClient.getSupportedLanguages()) {
        expect(lang.code).toBeTruthy();
        expect(lang.name).toBeTruthy();
      }
    });
  });
});
