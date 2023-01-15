const {largest_even,largest_even_arrow}= require('../q1');
test('Find largest even number',() =>
{
    expect(largest_even([2,6,8])).toBe(8)
});
test('Find largest even number',() =>
{
    expect(largest_even_arrow([2,6,8])).toBe(8);
});