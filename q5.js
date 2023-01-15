function leap_year(year)
{
    return (year%100===0)?((year%400===0)?true:false):((year%4===0?true:false));
}
leap_year_arrow = (year)=>
{
    return (year%100===0)?((year%400===0)?true:false):((year%4===0?true:false));
}
console.log(leap_year(2000));
console.log(leap_year_arrow(2000));