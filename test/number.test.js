/* eslint-disable no-undef */
// number

const isNumber = num => typeof num === 'number';

test('Is -1 Number?', () => {
  expect(isNumber(-1)).toBe(true);
});
