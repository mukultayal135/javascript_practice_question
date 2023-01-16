const {change_capitalisation,change_capitalisation_arrow}=require('../q3.js');

test('test change capitalisation',()=>
{
  expect(change_capitalisation('Mukul Tayal')).toBe('mUKUL tAYAL');

});
test('test change capitalisation arrow',()=>
{
  expect(change_capitalisation_arrow('Mukul Tayal')).toBe('mUKUL tAYAL');

});
