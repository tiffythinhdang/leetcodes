// const groupAnagrams = (strs) => {
//   let anagrams = {};

//   strs.forEach(str => {
//     let key = str.split("").sort().join("");
//     if ( !anagrams[key] ) anagrams[key] = [];
//     anagrams[key].push(str);
//   })

//   return Object.values(anagrams);
// };

const groupAnagrams = (strs) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let count = {};
  let anagrams = {};

  strs.forEach(str => {
    alphabets.forEach(char => count[char] = 0)

    for (let i = 0; i < str.length; i++) {
      let currChar = str[i];
      count[currChar] ++;
    }

    let key = "";
    for (let char in count) {
      key += ( count[char] + char );
    }

    if ( !anagrams[key] ) anagrams[key] = [];
    anagrams[key].push(str);
  })

  return Object.values(anagrams);
};

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(arr))
