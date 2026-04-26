import { vi } from 'vitest';

export const mockLogseq = {
  Editor: {
    getBlock: vi.fn(),
    getCurrentBlock: vi.fn(),
    updateBlock: vi.fn(),
  },
  UI: {
    showMsg: vi.fn(),
  },
  App: {
    registerCommandShortcut: vi.fn(),
    onBlockContextMenu: vi.fn(),
    registerCommand: vi.fn(),
  },
  provideUI: vi.fn(),
  hideMainUI: vi.fn(),
  settings: {} as Record<string, unknown>,
  ready: vi.fn(),
};

export function setupLogseqMock(): void {
  (globalThis as any).logseq = mockLogseq;
}

export function resetLogseqMock(): void {
  vi.clearAllMocks();
  mockLogseq.settings = {};
}
