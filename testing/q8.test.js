const {count_vowel,coount_vowel_arrow}=require('../q8.js');
test('test to count the number of vowels in string',()=>
{
    expect(count_vowel("codeacademy")).toBe(5);
})
test('test to count the number of vowels in string',()=>
{
    expect(count_vowel_arrow("codeacademy")).toBe(5);
})

