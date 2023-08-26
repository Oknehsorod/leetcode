import { describe, expect, test } from '@jest/globals';

import { DataSets } from './types';

import { isInterleave } from '../src/interleaving-string';

const dataSets: DataSets<[string, string, string], boolean> = [
  {
    input: ['aabcc', 'dbbca', 'aadbbcbcac'],
    output: true,
  },
  {
    input: ['aabcc', 'dbbca', 'aadbbbaccc'],
    output: false,
  },
  {
    input: ['', '', ''],
    output: true,
  },
  {
    input: ['a', 'b', 'ab'],
    output: true,
  },
  {
    input: ['aa', 'ab', 'aaba'],
    output: true,
  },
  {
    input: ['aabc', 'abad', 'aabcabad'],
    output: true,
  },
  {
    input: [
      'accbaabaaabbcbaacbababacaababbcbabaababcaabbbbbcacbaa',
      'cabaabcbabcbaaaacababccbbccaaabaacbbaaabccacabaaccbbcbcb',
      'accbcaaabbaabaaabbcbcbabacbacbababaacaaaaacbabaabbcbccbbabbccaaaaabaabcabbcaabaaabbcbcbbbcacabaaacccbbcbbaacb',
    ],
    output: true,
  },
  {
    input: [
      'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    ],
    output: false,
  },
  {
    input: [
      'bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa',
      'babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab',
      'babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab',
    ],
    output: false,
  },
  {
    input: [
      'abababababababababababababababababababababababababababababababababababababababababababababababababbb',
      'babababababababababababababababababababababababababababababababababababababababababababababababaaaba',
      'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb',
    ],
    output: false,
  },
  {
    input: [
      'babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab',
      'babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab',
      'babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab',
    ],
    output: false,
  },
];

describe('text-justification tests', () => {
  test('base-tests', () => {
    dataSets.forEach((dataSet) => {
      expect(isInterleave(...dataSet.input)).toEqual(dataSet.output);
    });
  });
});
