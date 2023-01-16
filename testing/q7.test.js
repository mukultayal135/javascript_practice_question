const {concat_without_first,concat_without_first_arrow}=require('../q7.js');
test('test concatenating without first letter',()=>
{
  expect(concat_without_first('code','academy')).toBe('odecademy');
});
test('test if string ends with "Script"',()=>
{
  expect(concat_without_first_arrow('code','academy')).toBe('odecademy');
});