const {same_digits,same_digits_arrow} = require('../q2');
test('If all digits are same',() => {
  expect(same_digits(223)).toBe(false);
});
test('If all digits are same',() => {
  expect(same_digits_arrow(4444)).toBe(true);
});
