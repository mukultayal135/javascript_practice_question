const doubleNumbers = (numbers)=>
{
  if(!Array.isArray(numbers))
    throw new Error('Input is not an array!');
  const newNumbers=numbers.map(num => num * 2);
  return newNumbers;

};
module.exports={doubleNumbers};