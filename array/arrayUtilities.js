
const doubleNumbers = (numbers)=>
{
  if(!Array.isArray(numbers))
    throw new TypeError();
  
  if(!numbers.every(element => typeof element === 'number'))
    throw new TypeError();

  const newNumbers=numbers.map(num => num * 2);
  return newNumbers;
  
};

const getEvenNumbers = (numbers) =>
{
  if(!Array.isArray(numbers))
    throw new TypeError();
  
  if(!numbers.every(element => typeof element === 'number'))
    throw new TypeError();

  const filteredNumber=numbers.filter(element => element % 2 === 0);
  return filteredNumber;
}

const tripleAndGetEvenNumbers = (numbers) =>
{
  if(!Array.isArray(numbers))
    throw new TypeError();
  
  if(!numbers.every(element => typeof element === 'number'))
    throw new TypeError();
  const tripled=numbers.map(element => element * 3);
  const tripledEven=tripled.filter(element => element % 2 === 0);
  return tripledEven;
}

module.exports={doubleNumbers,getEvenNumbers,tripleAndGetEvenNumbers};