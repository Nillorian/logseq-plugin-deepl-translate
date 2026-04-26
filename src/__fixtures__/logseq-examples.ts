import type { LogseqBlockNode } from '../types/index';

export const exampleBlockAst = [
  [
    [
      'Heading',
      {
        title: [['Plain', 'Feature: Replace with Translation']],
        tags: [],
        level: 1,
        anchor: 'Feature-3a-_Replace_with_Translation',
        meta: {
          timestamps: [],
          properties: [],
        },
        unordered: false,
        size: 2,
      },
    ],
    {
      start_pos: 0,
      end_pos: 36,
    },
  ],
] as const;

export const exampleSubBlockAst = [
  [
    [
      'Paragraph',
      [
        ['Plain', 'It preserves all '],
        ['Emphasis', [['Italic'], [['Plain', 'formatting']]]],
        ['Plain', ' and '],
        [
          'Link',
          {
            url: ['Page_ref', 'links'],
            label: [['Plain', '']],
            full_text: '[[links]]',
            metadata: '',
          },
        ],
        ['Plain', ', but may translate the '],
        [
          'Link',
          {
            url: ['Page_ref', 'text in the links'],
            label: [['Plain', '']],
            full_text: '[[text in the links]]',
            metadata: '',
          },
        ],
      ],
    ],
    {
      start_pos: 0,
      end_pos: 88,
    },
  ],
] as const;

export const exampleBlockData = {
  'block/uuid': '69edc5c5-662d-4495-bfd6-c120dd891276',
  'block/properties': {
    heading: 2,
  },
  'block/journal?': false,
  'block/left': {
    'db/id': 340,
  },
  'block/properties-order': [],
  'block/format': 'markdown',
  'block/content': '## Feature: Replace with Translation',
  'db/id': 341,
  'block/path-refs': [{ 'db/id': 332 }],
  'block/parent': { 'db/id': 332 },
  'block/page': { 'db/id': 332 },
} as const;

export const exampleSubBlockData = {
  'block/uuid': '69edc5d8-0297-4a1c-a67b-ac058defd0ed',
  'block/properties': {},
  'block/journal?': false,
  'block/left': {
    'db/id': 342,
  },
  'block/refs': [{ 'db/id': 345 }, { 'db/id': 359 }],
  'block/format': 'markdown',
  'block/content': 'It preserves all *formatting* and [[links]], but may translate the [[text in the links]]',
  'db/id': 343,
  'block/path-refs': [{ 'db/id': 332 }, { 'db/id': 345 }, { 'db/id': 359 }],
  'block/parent': { 'db/id': 341 },
  'block/page': { 'db/id': 332 },
} as const;

export const exampleBlockNode: LogseqBlockNode = {
  'block/uuid': exampleBlockData['block/uuid'],
  'db/id': exampleBlockData['db/id'],
  content: exampleBlockData['block/content'],
  children: [],
};

export const exampleSubBlockNode: LogseqBlockNode = {
  'block/uuid': exampleSubBlockData['block/uuid'],
  'db/id': exampleSubBlockData['db/id'],
  content: exampleSubBlockData['block/content'],
  children: [],
};

export const exampleHeadlineWithSubBlockNode: LogseqBlockNode = {
  'block/uuid': exampleBlockData['block/uuid'],
  'db/id': exampleBlockData['db/id'],
  content: exampleBlockData['block/content'],
  children: [exampleSubBlockNode],
};
