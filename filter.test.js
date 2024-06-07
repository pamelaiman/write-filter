import { test } from '@jest/globals';
import { ourFilter } from './filter.js';

test("element is bigger than 5", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const predicateFn = element => element > 5;
    expect(ourFilter(array, predicateFn)).toEqual([6, 7, 8, 9, 10])
})