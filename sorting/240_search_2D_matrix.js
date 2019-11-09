const searchMatrix = (matrix, target) => {
  if (matrix.length === 0) return false;

  let maxRow = matrix.length - 1;
  let maxCol = matrix[0].length - 1;
  let currRow = 0;
  let currCol = 0;

  
  while (currRow <= maxRow && currCol <= maxCol) {
    console.log(`currRow: ${currRow}, maxRow: ${maxRow}`);
    console.log(`currCol: ${currCol}, maxCol: ${maxCol}`);

    let row = matrix[currRow];

    for (let i = 0; i <= maxCol; i++) {
      if ( row[i] === target) return true;
      if ( row[i] > target ) {
        maxCol = i - 1;
        break;
      } 
    }

    for (let i = 0; i <= maxRow; i++) {
      if (matrix[i][currCol] === target) return true;
      if (matrix[i][currCol] > target) {
        maxRow = i - 1;
        break;
      }
    }

    currRow++;
    currCol++;
  }

  return false;
};

let arr = [[-1, 3]];
console.log(searchMatrix(arr, 3))
