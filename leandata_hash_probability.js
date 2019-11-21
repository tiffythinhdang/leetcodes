const randomKey = (hash) => {
  const keys = Object.keys(hash);
  const values = Object.values(hash);
  const sumValues = values.reduce((a, b) => a + b);

  let randomNumber = Math.floor( Math.random() * sumValues );

  let count = 0;
  const keyMapToProbability = {};
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = hash[key];
    keyMapToProbability[key] = [count, count + value - 1];
    console.log(keyMapToProbability)
    if (randomNumber >= count && randomNumber <= (count + value - 1)) return key;
    count += value;
  }
} 

const sortKey


let hash = { "a": 1, "b": 2, "c": 5, "d": 2 }
console.log( randomKey(hash) )
console.log("---------")
console.log( randomKey(hash) )
console.log("---------")
console.log( randomKey(hash) )
console.log("---------")
console.log( randomKey(hash) )
console.log("---------")
console.log( randomKey(hash) )
