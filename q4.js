function get_longest_string(arr)
{
  let ans,mx_len=Number.MIN_SAFE_INTEGER;
  arr.forEach(myfun);
  function myfun(word)
  {
    if(word.length > mx_len)
    {
      mx_len=word.length;
      ans=word;
    }
  }
  return ans;
}
const get_longest_string_arrow=(arr)=>
{
  let ans,mx_len=Number.MIN_SAFE_INTEGER;
  arr.forEach(myfun);
  function myfun(word)
  {
    if(word.length > mx_len)
    {
      mx_len=word.length;
      ans=word;
    }
  }
  return ans;

};
module.exports={get_longest_string,get_longest_string_arrow};
console.log(get_longest_string(['we','love','code','academy']));
console.log(get_longest_string_arrow(['we','love','code','academy']));