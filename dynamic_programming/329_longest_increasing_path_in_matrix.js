const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

const longestIncreasingPath = (matrix) => {
  if (matrix.length < 1) return 0;
  let maxLength = 1;

  const boundX = matrix.length;
  const boundY = matrix[0].length;

  for (let i = 0; i < boundX; i++) {
    for (let j = 0; j < boundY; j++) {
      let attempt = expandPath(i, j, boundX, boundY, matrix);
      if (attempt > maxLength) maxLength = attempt;
    }
  }

  return maxLength;
};


const expandPath = (posX, posY, boundX, boundY, matrix, seen = new Set()) => {
  if (!inBound(posX, posY, boundX, boundY)) return 0;

  let key = posX + "-" + posY;
  if (seen.has(key)) return 0;
  seen.add(key);

  const currNum = matrix[posX][posY];
  const pathLengths = [];

  for (let i = 0; i < DIRS.length; i++) {
    const [x, y] = DIRS[i];
    const newPosX = posX + x;
    const newPosY = posY + y;
    // console.log(DIRS[i])
    // console.log(`${posX}, ${newPosX}`)
    // console.log(`${posY}, ${newPosY}`)
    if (!inBound(newPosX, newPosY, boundX, boundY)) {
      pathLengths.push(1);
      continue;
    }
    
    const nextNum = matrix[newPosX][newPosY];
    // console.log(`newNum: ${nextNum}`)
    // console.log(seen)
    if (nextNum > currNum) {
      let res = 1 + expandPath(newPosX, newPosY, boundX, boundY, matrix, seen);
      pathLengths.push(res);
    } else {
      pathLengths.push(1);
    }
    // console.log(pathLengths)
    // console.log("-----------")
  }

  seen.delete(key);
  return Math.max(...pathLengths);
}

const inBound = (posX, posY, boundX, boundY) => {
  return posX >= 0 && posX < boundX && posY >= 0 && posY < boundY;
}

let arr = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1]
] 
let nums =
  [
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1]
  ] 

console.log(longestIncreasingPath(arr));
console.log(longestIncreasingPath(nums));
// console.log(expandPath(1, 0, 3, 3, arr));


// All intergers - data type?
// Empty array?

// case 1: all same number => return 1
// case 2: empty arr => return 0
// case 3: 