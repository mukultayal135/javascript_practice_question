const { default: expect } = require('expect');
const {get_longest_string,get_longest_string_arrow}=require('../q4');
test('test to find longest string',()=>
{
  expect(get_longest_string(['we','are','doing','code','academy'])).toBe('academy');
});
test('test to find longest string',()=>
{
  expect(get_longest_string_arrow(['we','are','doing','code','academy'])).toBe('academy');
});