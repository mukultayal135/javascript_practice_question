function same_digits(number)
{
    let digit = number % 10;
    while(number != 0)
    {
        let temp = number % 10;
        if(temp != digit)
            return false;
        
        number= Math.floor(number/10);
    }
    return true;
     
}
const same_digits_arrow = number =>
{
    let digit= number % 10;
    while(number != 0)
    {
        let temp = number % 10;
        if(temp != digit)
            return false;
            number= Math.floor(number/10);
    }
    return true;
}

console.log(same_digits(23344));
console.log(same_digits_arrow(6666));