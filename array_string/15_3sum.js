// const subSets = (nums) => {
//   if (nums.length <= 0) return [[]];

//   let currNum = nums[0];
//   let notChooseCurrNum = subSets( nums.slice(1) );
//   let chooseCurrNum = notChooseCurrNum.map( set => set.concat(currNum) )

//   return notChooseCurrNum.concat(chooseCurrNum);
// }

// const threeSum = (nums) => {
//   let sets = subSets(nums);
//   sets = sets.filter(set =>
//     set.length === 3 && 
//     set.reduce( (a, b) => a + b ) === 0
//   )
//   let res = [];
//   let seen = {};
//   sets.forEach(set => {
//     let key = set.sort().join();
//     if ( !seen[key] ) {
//       seen[key] = true;
//       res.push(set);
//     }
//   })

//   return res;
// }

// const threeSum = (nums) => {
//   let res = [];
//   let complements = {};
//   let seen = {};

//   nums.forEach( (num, idx) => {
//     let complement = 0 - num;
//     complements[complement] = idx;
//   });

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let num1 = nums[i];
//       let num2 = nums[j];
//       let num3 = 0 - num1 - num2;
//       let idx = complements[num1 + num2];
//       if (i === idx || j === idx || idx === undefined) continue;

//       let attempt = [num1, num2, num3].sort();
//       let key = attempt.join();

//       if ( !seen[key] ) {
//         res.push(attempt);
//         seen[key] = true;
//       }
//     }
//   }
//   return res;
// }

const threeSum = (nums) => {
  let res = [];
  let seen = new Set();

  const sortedNums = nums.sort( (a, b) => a -b );
  console.log(sortedNums)

  for (let idx = 1; idx < sortedNums.length - 1; idx++) {
    let leftIdx = idx - 1;
    let rightIdx = idx + 1;
    let currNum = sortedNums[idx];
    let leftNum;
    let rightNum;

    while (leftIdx >= 0 && rightIdx < sortedNums.length) {
      leftNum = sortedNums[leftIdx];
      rightNum = sortedNums[rightIdx];
      console.log(`${leftIdx}: ${leftNum},  ${idx}: ${currNum}, ${rightIdx}: ${rightNum}`)

      let sum = leftNum + rightNum + currNum;

      console.log(`sum: ${sum}`)

      if ( sum === 0 ) {
        let key = String(leftNum) + String(currNum) + String(rightNum);
        console.log(`key: ${key}`)
        console.log(seen)
        if ( !seen.has(key) ) {
          res.push( [leftNum, currNum, rightNum] );
          seen.add(key);
        }
        leftIdx --;
        rightIdx++;

      } else if ( sum > 0 ) {
        leftIdx --;

      } else {
        rightIdx ++;
      }
    }
    console.log("----------")
  }

  return res;
}

let arr = [1, 2, 3];
let ex = [-1, 0, 1, 2, -1, -4];
console.log( threeSum(ex) );
