function concat_without_first(st1,st2)
{
    return st1.slice(1).concat(st2.slice(1));
}

concat_without_first_arrow = (st1,st2) =>
{
    return st1.slice(1).concat(st2.slice(1));
}
console.log(concat_without_first("code","academy"));
console.log(concat_without_first_arrow("code","academy"));