function replace_with_next(st)
{
    let update_str="";
    [...st].forEach(letter =>
        {
            let temp=letter.charCodeAt()-'a'.charCodeAt();
            temp=(temp+1)%26;
            update_str+=String.fromCharCode(temp+'a'.charCodeAt());
        })
    return update_str;
}
replace_with_next_arrow = (st) =>
{
    let update_str="";
    [...st].forEach(letter =>
        {
            let temp=letter.charCodeAt()-'a'.charCodeAt();
            temp=(temp+1)%26;
            update_str+=String.fromCharCode(temp+'a'.charCodeAt());
        })
    return update_str;
}
console.log(replace_with_next("codeacademy"));
console.log(replace_with_next_arrow("lazyinterns"));