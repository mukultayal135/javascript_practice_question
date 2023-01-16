function change_capitalisation(st)
{
  let ans='';
  for(let i=0; i<st.length; i++)
  {
    if(st[i] != st[i].toUpperCase())
    {
      ans+=st[i].toUpperCase();
    }
    else{
      ans+=st[i].toLowerCase();  
    }
  }
  return ans;
}
const change_capitalisation_arrow = st =>
{
  let ans='';
  for(let i=0; i<st.length; i++)
  {
    if(st[i] != st[i].toUpperCase())
    {
      ans+=st[i].toUpperCase();
    }
    else{
      ans+=st[i].toLowerCase();
            
    }
       
  }
  return ans;
};
module.exports={change_capitalisation,change_capitalisation_arrow};
console.log(change_capitalisation('Mukul Tayal'));
console.log(change_capitalisation_arrow('Mukul Tayal'));