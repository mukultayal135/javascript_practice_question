const {doubleNumbers,getEvenNumbers,tripleAndGetEvenNumbers}=require('./arrayUtilities.js');

describe('Array Utilities',()=>
{
  describe('Double the numbers',()=>
  {
    it('Should throw an error when input is not an array',()=>
    {
      expect(() => {
        doubleNumbers('abc');
      }).toThrow(TypeError);
    });
    
    it('Should throw an error when elements are not numbers',()=>
    {
      expect(()=>
      {
        doubleNumbers([23,'abc','1']);

      }).toThrow(TypeError);
    });

    it('Should double the elements if input is array of numbers',() =>
    {
      expect(doubleNumbers([1,2,3])).toEqual([2,4,6]);
    });
  });
});

describe('Array Utilities',()=>
{
  describe('Get even numbers',()=>
  {
    it('Should throw an error when input is not an array',()=>
    {
      expect(() => {getEvenNumbers('abc');}).toThrow(TypeError);
    });
    
    it('Should throw an error when elements are not numbers',()=>
    {
      expect(()=>{getEvenNumbers([23,'abc','1']);}).toThrow(TypeError);
    });

    it('Should return array of even numbers when input is number array',() =>
    {
      expect(getEvenNumbers([1,2,3])).toEqual([2]);
    });
  });
});
describe('Array Utilities',() =>
{
  describe('Triple the numbers and get even numbers',() =>
  {
    it('Should throw an error when input is not an array',()=>
    {
      expect(() => {tripleAndGetEvenNumbers('abc');}).toThrow(TypeError);
    });
    
    it('Should throw an error when elements are not numbers',()=>
    {
      expect(()=>tripleAndGetEvenNumbers([23,'abc','1'])).toThrow(TypeError);
    });

    it('Should triple every element and return array of even elements',() =>
    {
      expect(tripleAndGetEvenNumbers([1,2,3])).toEqual([6]);
    });
  });
});