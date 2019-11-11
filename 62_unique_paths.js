// const uniquePaths = (m, n, memo = {}) => {
//   if (m <= 0 || n <= 0) return 0;
//   if (m === 1 && n === 1) return 1;
//   let key = m + "-" + n;
//   if (key in memo) return memo[key];

//   let attemptDown = (n >= 2 ? uniquePaths(m, n - 1) : 0)
//   let attemptUp = (m >= 2 ? uniquePaths(m - 1, n) : 0)

//   let count = attemptDown + attemptUp;
//   memo[key] = count;
//   return count;
// };

// console.log(uniquePaths(23, 12));

const uniquePaths = (m, n) => {
  let table = new Array(m).fill().map( el => new Array(n).fill(0) );
  table[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      let prevUp = table[i][j - 1] || 0;
      let prevLeft = (i > 0 ? table[i - 1][j] : 0);
      table[i][j] = prevUp +  prevLeft;
    }
  }

  return table[m - 1][n - 1];
}

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(23, 12));