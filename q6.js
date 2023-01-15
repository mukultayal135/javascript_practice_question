function end_with(st)
{
    if(st.length<6)return false;
    let end_string=st.slice(-6);
    if(end_string === "Script")
        return true;
    else
        return false;
}
end_with_arrow = (st) =>
{
    if(st.length<6)return false;
    let end_string=st.slice(-6);
    if(end_string === "Script")
        return true;
    else
        return false;
}
console.log(end_with("javaScript"));
console.log(end_with_arrow("javaScript"));