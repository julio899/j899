const inNumeration = require("../lib/inNumeration");

test('1 result 1,00', () => {
  expect(inNumeration('LA', 1)).toBe('1,00');
});

test('1.2 result 1,20', () => {
  expect(inNumeration('LA', 1.2)).toBe('1,20');
});

test('0 result 0,00', () => {
  expect(inNumeration('LA', 0)).toBe('0,00');
});

test('12.34 result 12,34', () => {
  expect(inNumeration('LA', 1.34)).toBe('1,34');
});

test('12,3456 result 12,34', () => {
  expect(inNumeration('LA', 12.3456)).toBe('12,34');
});