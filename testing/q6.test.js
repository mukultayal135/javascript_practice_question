const {end_with,end_with_arrow}=require('../q6.js');
test('test if string endds with "Script"',()=>
{
    expect(end_with("JavaScript")).toBe(true);
})
test('test if string endds with "Script"',()=>
{
    expect(end_with_arrow("JavaScript")).toBe(true);
})