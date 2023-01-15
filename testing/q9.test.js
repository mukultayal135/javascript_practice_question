const {replace_with_next,replace_with_next_arrow}=require('../q9.js');
test('test to replace every charcater with next alphabet',()=>
{
    expect(replace_with_next("lazyinterns")).toBe("mbazjoufsot");
})
test('test to replace every charcater with next alphabet',()=>
{
    expect(replace_with_next_arrow("lazyinterns")).toBe("mbazjoufsot");
})