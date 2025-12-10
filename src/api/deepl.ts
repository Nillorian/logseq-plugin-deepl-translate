import { TranslationRequest, TranslationResponse, TranslationResult } from '../types/index';

/**
 * DeepL API Client
 * Handles communication with DeepL API for text translation
 */
export class DeepLClient {
  private apiKey: string;
  private apiUrl: string;

  /**
   * Initialize DeepL client with API key
   * @param apiKey - DeepL API key
   * @param isPro - Whether to use Pro endpoint (default: false for free tier)
   */
  constructor(apiKey: string, isPro: boolean = false) {
    if (!apiKey) {
      throw new Error('DeepL API key is required');
    }
    this.apiKey = apiKey;
    this.apiUrl = isPro
      ? 'https://api.deepl.com/v2/translate'
      : 'https://api-free.deepl.com/v2/translate';
  }

  /**
   * Translate text using DeepL API
   * @param request - Translation request with text and target language
   * @returns Translation result with original and translated text
   */
  async translate(request: TranslationRequest): Promise<TranslationResult> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `DeepL-Auth-Key ${this.apiKey}`,
          'Content-Type': 'application/json',
          'User-Agent': 'logseq-deepl-translator/0.0.1',
        },
        body: JSON.stringify({
          text: [request.text],
          target_lang: this.normalizeLanguageCode(request.targetLang),
          ...(request.sourceLang && { source_lang: request.sourceLang }),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          `DeepL API error ${response.status}: ${error.message || 'Unknown error'}`
        );
      }

      const data: TranslationResponse = await response.json();

      if (!data.translations || data.translations.length === 0) {
        throw new Error('No translation returned from DeepL API');
      }

      return {
        original: request.text,
        translated: data.translations[0].text,
        sourceLang: data.translations[0].detected_source_language,
        targetLang: request.targetLang,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Translation failed: ${error.message}`);
      }
      throw new Error('Translation failed: Unknown error');
    }
  }

  /**
   * Get available languages from DeepL
   * Note: This is a static list. DeepL API doesn't provide a language list endpoint.
   */
  static getSupportedLanguages(): Array<{ code: string; name: string }> {
    return [
      { code: 'AUTO', name: 'Auto-detect' },
      { code: 'BG', name: 'Bulgarian' },
      { code: 'CS', name: 'Czech' },
      { code: 'DA', name: 'Danish' },
      { code: 'DE', name: 'German' },
      { code: 'EL', name: 'Greek' },
      { code: 'EN', name: 'English' },
      { code: 'ES', name: 'Spanish' },
      { code: 'ET', name: 'Estonian' },
      { code: 'FI', name: 'Finnish' },
      { code: 'FR', name: 'French' },
      { code: 'HU', name: 'Hungarian' },
      { code: 'ID', name: 'Indonesian' },
      { code: 'IT', name: 'Italian' },
      { code: 'JA', name: 'Japanese' },
      { code: 'KO', name: 'Korean' },
      { code: 'LT', name: 'Lithuanian' },
      { code: 'LV', name: 'Latvian' },
      { code: 'NB', name: 'Norwegian' },
      { code: 'NL', name: 'Dutch' },
      { code: 'PL', name: 'Polish' },
      { code: 'PT', name: 'Portuguese' },
      { code: 'RO', name: 'Romanian' },
      { code: 'RU', name: 'Russian' },
      { code: 'SK', name: 'Slovak' },
      { code: 'SL', name: 'Slovenian' },
      { code: 'SV', name: 'Swedish' },
      { code: 'TR', name: 'Turkish' },
      { code: 'UK', name: 'Ukrainian' },
      { code: 'ZH', name: 'Chinese' },
    ];
  }

  /**
   * Normalize language code for DeepL API
   * DeepL uses uppercase codes, sometimes with region (e.g., PT-BR, EN-US)
   * @param langCode - Language code to normalize
   * @returns Normalized language code
   */
  private normalizeLanguageCode(langCode: string): string {
    // Remove whitespace and convert to uppercase
    let normalized = langCode.trim().toUpperCase();

    // Handle special cases
    const specialCases: { [key: string]: string } = {
      'ENGLISH': 'EN',
      'SPANISH': 'ES',
      'FRENCH': 'FR',
      'GERMAN': 'DE',
      'PORTUGUESE': 'PT',
      'CHINESE': 'ZH',
      'JAPANESE': 'JA',
      'KOREAN': 'KO',
    };

    if (specialCases[normalized]) {
      normalized = specialCases[normalized];
    }

    return normalized;
  }
}

/**
 * Create and return a DeepL client instance
 * @param apiKey - DeepL API key
 * @param isPro - Whether to use Pro endpoint
 * @returns DeepLClient instance
 */
export function createDeepLClient(apiKey: string, isPro: boolean = false): DeepLClient {
  return new DeepLClient(apiKey, isPro);
}
