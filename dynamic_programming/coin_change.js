const coinChange = (coins, amount, memo={}) => {
  if (amount === 0) return 0;
  if (amount in memo) return memo[amount];

  let combo = [];
  coins.forEach(coin => {
    if (amount - coin >= 0) {
      let attempt = coinChange(coins, amount - coin, memo);
      if (attempt !== -1) {
        combo.push(attempt + 1);
      }
    }
  })

  let res = (combo.length === 0 ? -1 : Math.min(...combo));
  memo[amount] = res;
  // console.log(memo)
  // console.log(res);
  // console.log("------")
  return res;
};

let coins = [12,4,7];
let amount = 24
console.log(coinChange(coins, amount))