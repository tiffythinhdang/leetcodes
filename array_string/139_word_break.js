const wordBreak = (s, wordDict) => {
  let table = new Array(s.length + 1).fill(false);
  table[0] = true;

  for (let start = 0; start < s.length; start++) {
    if (table[start] === false) continue;

    for (let end = start + 1; end <= s.length; end++) {
      let word = s.slice(start, end);
      if (wordDict.includes(word)) table[end] = true;
    }
  }

  return table[table.length - 1];
};