import { describe, expect, test } from '@jest/globals';

import { DataSets } from './types';

import { isIsomorphic } from '../src/isomorphic-strings';

const dataSets: DataSets<[string, string], boolean> = [
  {
    input: ["badc", "baba"],
    output: false
  },
];

describe('text-justification tests', () => {
  test('base-tests', () => {
    dataSets.forEach(dataSet => {
      expect(isIsomorphic(...dataSet.input)).toEqual(dataSet.output);
    })
  });
});
