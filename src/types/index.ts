declare const __DEV__: boolean;

/**
 * Plugin Settings Interface
 */
export interface PluginSettings {
  apiKey?: string;
  defaultTargetLang?: string;
  defaultSourceLang?: 'AUTO' | string;
  isPro?: boolean;
  translateShortcut?: string;
  replaceShortcut?: string;
  replaceSubBlocksShortcut?: string;
}

/**
 * Minimal Logseq block shape used by block utilities
 */
export interface LogseqBlockNode {
  uuid?: string;
  'block/uuid'?: string;
  id?: string | number;
  'db/id'?: number;
  content?: string;
  title?: string;
  string?: string;
  text?: string;
  children?: LogseqBlockNode[];
}

/**
 * Minimal current-block shape used by main workflow
 */
export interface LogseqCurrentBlockRef {
  uuid?: string;
  'block/uuid'?: string;
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

/**
 * Event payload variants that may carry a block identifier
 */
export interface BlockIdEvent {
  blockId?: string;
  uuid?: string;
  'block/uuid'?: string;
}
