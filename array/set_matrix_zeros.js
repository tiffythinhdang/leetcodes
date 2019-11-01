

const setZeroes = (matrix) => {
  let row = new Set();
  let col = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.add(i);
        col.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (row.has(i)) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
      continue;
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if (col.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

const setZeroes = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if ( matrix[i][0] == 0 || matrix[0][j] == 0 ) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};