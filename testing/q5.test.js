const {leap_year,leap_year_arrow}=require('../q5.js');
test('test to check if year is leap or not',()=>
{
  expect(leap_year(2000)).toBe(true);
});
test('test to check if year is leap or not',()=>
{
  expect(leap_year_arrow(2000)).toBe(true);
});