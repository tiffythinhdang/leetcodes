// const biSearch = (array, target) => {
//   let midIdx = Math.floor(array.length / 2);
//   if (array[midIdx] === target) {
//     return [true, midIdx];
//   } else if (array[midIdx] > target) {

//   } 
// }

// const searchMatrix = (matrix, target) => {
//   if (matrix.length === 0) return false;

//   let maxRow = matrix.length - 1;
//   let maxCol = matrix[0].length - 1;
//   let currRow = 0;
//   let currCol = 0;

//   while (currRow <= maxRow && currCol <= maxCol) {
//     // check row
//     // console.log(currRow, maxRow)
//     // console.log(currCol, maxCol)
//     let lo = 0;
//     let hi = maxCol;
//     while (lo <= hi) {
//       let midIdx = Math.floor( (hi + lo) / 2 );
//       console.log(midIdx)
//       console.log(matrix[currRow][midIdx])
//       console.log("------")
//       if (matrix[currRow][midIdx] === target) {
//         return true;
//       } else if (matrix[currRow][midIdx] > target) {
//         maxCol = midIdx - 1;
//         high = midIdx - 1;
//       } else {
//         lo = midIdx + 1;
//       }
//     }

//     // check col
//     lo = 0;
//     hi = maxRow;
//     console.log(lo)
//     console.log(hi)
//     while (lo <= hi) {
//       let midIdx = Math.floor((hi + lo) / 2);
//       if (matrix[currCol][midIdx] === target) {
//         return true;
//       } else if (matrix[currCol][midIdx] > target) {
//         maxRow = midIdx - 1;
//         high = midIdx - 1;
//       } else {
//         lo = midIdx + 1;
//       }
//     }

//     currRow++;
//     currCol++;
//   }

//   return false;
// };

const searchMatrix = (matrix, target) => {
  if (matrix.length === 0) return false;

  let currRow = 0;
  let currCol = matrix[0].length - 1;
  
  while (currRow < maxtrix.length && currCol >= 0) {
    let currEle = matrix[currRow][currCol];
    if (currEle > target) {
      currCol--; 
    } else if (currEle === target) {
      return true;
    } else {
      currRow++;
    }
  }

  return false;
};

let arr = [[5], [6]];
console.log(searchMatrix(arr, 6))
