function largest_even(arr)
{
    let ans=Number.MIN_SAFE_INTEGER;
    arr.forEach(myfun);
    function myfun(value)
    {
        
        if(value%2==0)
            ans=Math.max(ans,value);
    }
    return (ans==Number.MIN_SAFE_INTEGER)?-1:ans;
}
const largest_even_arrow = arr =>
{
    let ans=Number.MIN_SAFE_INTEGER;
    arr.forEach(myfun);
    function myfun(value)
    {
        if(value%2==0)
            ans=Math.max(ans,value);
    }
    return (ans==Number.MIN_SAFE_INTEGER)?-1:ans;
    
}
console.log(largest_even([2,6,8],"\n"));
console.log(largest_even_arrow([2,6,8]));
