function count_vowel(st) {
  let count = 0;
  for (let i = 0; i < st.length; i++) {

    switch (st[i].toUpperCase()) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      count++;
      break;

    }
  }
  return count;
}
const count_vowel_arrow = (st) => {
  let count = 0;
  for (let i = 0; i < st.length; i++) {

    switch (st[i].toUpperCase()) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      count++;
      break;

    }
  }
  return count;
};
module.exports = { count_vowel, count_vowel_arrow };
console.log(count_vowel('codeacademy'));
console.log(count_vowel_arrow('codeacademy'));