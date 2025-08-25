// those have to be objects in order to be imported
const { sum } = require('./main');
const { capitalize } = require('./main');
const { reverseString } = require('./main');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('First character of string is capitalized', () => {
  expect(capitalize('word')).toMatch('Word');
});

test('Function correctly reverses the string provided', () => {
  expect(reverseString('word')).toMatch('drow');
  expect(reverseString('Car')).toMatch('raC');
});