import { describe, expect, test } from '@jest/globals';

import { DataSets } from './types';

import { merge } from '../src/merge-sorted-arrays';

const dataSets: DataSets<[number[], number, number[], number], number[]> = [
  {
    input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
    output: [1, 2, 2, 3, 5, 6],
  },
  {
    input: [[0], 0, [1], 1],
    output: [1],
  },
  {
    input: [[1], 1, [0], 0],
    output: [1],
  },
  {
    input: [[-1,0,0,3,3,3,0,0,0], 6, [1, 2, 2], 3],
    output: [-1,0,0,1,2,2,3,3,3]
  }
];

describe('merge-sorted-arrays', () => {
  dataSets.forEach((dataSet) => {
    test(`Input: ${dataSet.input[0].length}; Output: ${dataSet.output};`, () => {
      merge(...dataSet.input);
      expect(dataSet.input[0]).toEqual(dataSet.output);
    });
  });
});
