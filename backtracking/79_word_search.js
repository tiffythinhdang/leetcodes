// https://leetcode.com/problems/word-search/

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]

const validPos = (board, posX, posY) => {
  return posX >= 0 
    && posX < board.length 
    && posY >=0 
    && posY < board[0].length;
}

const makeWord = (board, word, pos, set=new Set()) => {
  if ( word.length === 0 ) return true;

  let [x, y] = pos;
  if ( board[x][y] !== word[0] ) return false;

  let key = x + "-" + y;
  if (set.has(key)) return false;
  set.add(key);

  let neighborPos = [];
  DIRS.forEach(dir => {
    let posX = pos[0] + dir[0];
    let posY = pos[1] + dir[1];
    if ( validPos(board, posX, posY) ) neighborPos.push([posX, posY]);
  });

  for (let i = 0; i < neighborPos.length; i++) {
    let currPos = neighborPos[i];
    let res = makeWord(board, word.slice(1), currPos, set);
    if (res) return true;
  }

  set.delete(key);
  return false;
};

const exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let currChar = board[i][j];
      if (currChar !== word[0]) continue;
      let res = makeWord(board, word, [i, j]);
      if (res) return true;
    }
  }

  return false;
};


board =
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ]
;

// console.log(makeWord(board, "ABCE", [0, 0]));
// console.log(makeWord(board, "ABCF", [0, 0]));
// console.log(makeWord(board, "", [0, 0]));
// console.log(makeWord(board, "ASADFB", [0, 0]));
// console.log(makeWord(board, "ASADFBA", [0, 0]));
console.log(exist(board, "ABCE"));
console.log(exist(board, "ABCF"));
console.log(exist(board, ""));
console.log(exist(board, "ASADFB"));
console.log(exist(board, "ASADFBA"));