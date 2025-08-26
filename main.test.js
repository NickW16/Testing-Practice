// those have to be objects in order to be imported
const { sum } = require('./main');
const { capitalize } = require('./main');
const { reverseString } = require('./main');
const { calculator } = require('./main');
const { caesarCipher } = require('./main');

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

test('Calculator correctly completes all four operations', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(-3, 5)).toBe(2);
  expect(calculator.subtract(320, 200)).toBe(120);
  expect(calculator.subtract(-200, 100)).toBe(-300);
  expect(calculator.multiply(3, 8)).toBe(24);
  expect(calculator.multiply(40, 2)).toBe(80);
  expect(calculator.divide(30, 2)).toBe(15);
  expect(calculator.divide(5, 4)).toBe(1.25);
});

test('Caesar Shift Cipher function works', () => {
  expect(caesarCipher('xyz', 3)).toMatch('abc');
  expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
})