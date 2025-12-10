/**
 * Plugin Settings Interface
 */
export interface PluginSettings {
  apiKey: string;
  defaultTargetLang: string;
  defaultSourceLang: 'AUTO' | string;
}

/**
 * DeepL Translation Request
 */
export interface TranslationRequest {
  text: string;
  targetLang: string;
  sourceLang?: string;
}

/**
 * DeepL Translation Response
 */
export interface TranslationResponse {
  translations: Array<{
    text: string;
    detected_source_language?: string;
  }>;
}

/**
 * Translation Result for UI
 */
export interface TranslationResult {
  original: string;
  translated: string;
  sourceLang?: string;
  targetLang: string;
}

/**
 * Block Context Menu Event
 */
export interface BlockContextMenuEvent {
  blockId: string;
  blockContent: string;
}
