import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  normalizeBlockIdFromEvent,
  getBlockId,
  getSubBlocks,
  collectAllBlockIds,
  LogseqBlockNode,
} from './blocks';
import { setupLogseqMock, resetLogseqMock, mockLogseq } from '../__mocks__/logseq';

beforeEach(() => setupLogseqMock());
afterEach(() => resetLogseqMock());

describe('normalizeBlockIdFromEvent', () => {
  it('returns the string directly when passed a string', () => {
    expect(normalizeBlockIdFromEvent('abc-123')).toBe('abc-123');
  });

  it('returns null for empty string', () => {
    expect(normalizeBlockIdFromEvent('')).toBeNull();
  });

  it('returns blockId from BlockContextMenuEvent', () => {
    expect(normalizeBlockIdFromEvent({ blockId: 'my-id', blockContent: '' })).toBe('my-id');
  });

  it('returns null when blockId is empty in event', () => {
    expect(normalizeBlockIdFromEvent({ blockId: '', blockContent: '' })).toBeNull();
  });
});

describe('getBlockId', () => {
  it('returns uuid when present', () => {
    expect(getBlockId({ uuid: 'uuid-1' })).toBe('uuid-1');
  });

  it('prefers uuid over block/uuid', () => {
    expect(getBlockId({ uuid: 'uuid-1', 'block/uuid': 'bq-2' })).toBe('uuid-1');
  });

  it('returns block/uuid when uuid is absent', () => {
    expect(getBlockId({ 'block/uuid': 'bq-uuid' })).toBe('bq-uuid');
  });

  it('returns string id when uuid fields absent', () => {
    expect(getBlockId({ id: 'str-id' })).toBe('str-id');
  });

  it('returns stringified db/id number', () => {
    expect(getBlockId({ 'db/id': 42 })).toBe('42');
  });

  it('returns stringified numeric id', () => {
    expect(getBlockId({ id: 99 })).toBe('99');
  });

  it('returns null when no id fields present', () => {
    expect(getBlockId({})).toBeNull();
  });
});

describe('getSubBlocks', () => {
  it('returns children array when block exists', async () => {
    const children: LogseqBlockNode[] = [{ uuid: 'child-1' }];
    mockLogseq.Editor.getBlock.mockResolvedValueOnce({ uuid: 'parent', children });

    const result = await getSubBlocks('parent');
    expect(result).toEqual(children);
  });

  it('returns empty array when block is null', async () => {
    mockLogseq.Editor.getBlock.mockResolvedValueOnce(null);
    expect(await getSubBlocks('missing')).toEqual([]);
  });

  it('returns empty array when block has no children', async () => {
    mockLogseq.Editor.getBlock.mockResolvedValueOnce({ uuid: 'parent' });
    expect(await getSubBlocks('parent')).toEqual([]);
  });

  it('returns empty array on API error', async () => {
    mockLogseq.Editor.getBlock.mockRejectedValueOnce(new Error('API error'));
    expect(await getSubBlocks('parent')).toEqual([]);
  });
});

describe('collectAllBlockIds', () => {
  it('returns only root id when no children', async () => {
    mockLogseq.Editor.getBlock.mockResolvedValueOnce({ uuid: 'root', children: [] });
    expect(await collectAllBlockIds('root')).toEqual(['root']);
  });

  it('collects root and direct child ids', async () => {
    mockLogseq.Editor.getBlock
      .mockResolvedValueOnce({ uuid: 'root', children: [{ uuid: 'child-1' }, { uuid: 'child-2' }] })
      .mockResolvedValueOnce({ uuid: 'child-1', children: [] })
      .mockResolvedValueOnce({ uuid: 'child-2', children: [] });

    expect(await collectAllBlockIds('root')).toEqual(['root', 'child-1', 'child-2']);
  });

  it('collects ids recursively across nested levels', async () => {
    mockLogseq.Editor.getBlock
      .mockResolvedValueOnce({ uuid: 'root', children: [{ uuid: 'child-1' }] })
      .mockResolvedValueOnce({ uuid: 'child-1', children: [{ uuid: 'grandchild-1' }] })
      .mockResolvedValueOnce({ uuid: 'grandchild-1', children: [] });

    expect(await collectAllBlockIds('root')).toEqual(['root', 'child-1', 'grandchild-1']);
  });

  it('skips children with no valid id', async () => {
    mockLogseq.Editor.getBlock.mockResolvedValueOnce({
      uuid: 'root',
      children: [{ content: 'no id here' }],
    });

    expect(await collectAllBlockIds('root')).toEqual(['root']);
  });
});
