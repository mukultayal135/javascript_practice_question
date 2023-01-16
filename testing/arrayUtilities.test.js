const {doubleNumbers}=require('../arrayUtilities.js');

describe('Array Utilities',()=>
{
  describe('Double the numbers',()=>
  {
    it('Should throw an error when input is not an array',()=>
    {
      expect(() => {
        doubleNumbers('abc');
      }).toThrow('Input is not an array!');
    });
    it('Should double the numbers when input is array',()=>
    {
      expect(doubleNumbers([1,2,3])).toEqual([2,4,6]);
    });

  });
});