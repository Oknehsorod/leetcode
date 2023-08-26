import { describe, expect, test } from '@jest/globals';

import { DataSets } from './types';

import { fullJustify } from '../src/text-justification';

const dataSets: DataSets<[string[], number], string[]> = [
  {
    input: [["Listen","to","many,","speak","to","a","few."], 6],
    output: ["Listen","to    ","many, ","speak ","to   a","few.  "]
  },
  {
    input: [
      ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
      16,
    ],
    output: ['This    is    an', 'example  of text', 'justification.  '],
  },
  {
    input: [['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16],
    output: ['What   must   be', 'acknowledgment  ', 'shall be        '],
  },
  {
    input: [
      [
        'Science',
        'is',
        'what',
        'we',
        'understand',
        'well',
        'enough',
        'to',
        'explain',
        'to',
        'a',
        'computer.',
        'Art',
        'is',
        'everything',
        'else',
        'we',
        'do',
      ],
      20,
    ],
    output: [
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else  we',
      'do                  ',
    ],
  },
];

describe('text-justification tests', () => {
  test('base-tests', () => {
    dataSets.forEach(dataSet => {
      expect(fullJustify(...dataSet.input)).toEqual(dataSet.output);
    })
  });
});
