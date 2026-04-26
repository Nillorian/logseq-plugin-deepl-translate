import { BlockIdEvent, LogseqBlockNode } from '../types/index';

export type { LogseqBlockNode } from '../types/index';

export function normalizeBlockIdFromEvent(e: BlockIdEvent | string): string | null {
  if (typeof e === 'string') return e || null;
  return e.blockId || e.uuid || e['block/uuid'] || null;
}

export function getBlockId(block: LogseqBlockNode): string | null {
  if (block.uuid) return block.uuid;
  if (block['block/uuid']) return block['block/uuid'];
  if (block.id && typeof block.id === 'string') return block.id;
  if (block['db/id'] && typeof block['db/id'] === 'number') return block['db/id'].toString();
  if (block.id && typeof block.id === 'number') return block.id.toString();
  return null;
}

export async function getSubBlocks(blockId: string): Promise<LogseqBlockNode[]> {
  try {
    const block = await logseq.Editor.getBlock(blockId, { includeChildren: true });
    if (!block) {
      console.warn('Block not found for sub-blocks:', blockId);
      return [];
    }
    return (block.children || []) as LogseqBlockNode[];
  } catch (error) {
    console.error('Failed to get sub-blocks:', { blockId, error });
    return [];
  }
}

export async function collectAllBlockIds(blockId: string): Promise<string[]> {
  const blockIds: string[] = [blockId];
  const children = await getSubBlocks(blockId);

  for (const child of children) {
    const childId = getBlockId(child);
    if (childId) {
      const subBlockIds = await collectAllBlockIds(childId);
      blockIds.push(...subBlockIds);
    } else {
      console.warn('Child has no valid ID:', { blockId, child });
    }
  }

  return blockIds;
}
