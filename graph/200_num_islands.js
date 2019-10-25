// https://leetcode.com/problems/number-of-islands/

const numIslands = (grid) => {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  let count = 0;
  let visited = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let currVal = grid[i][j];
      if (currVal === "0") continue;
      count ++;
      expandIsland(i, j, grid, dirs, visited);
    }
  }

  return count;
}

const expandIsland = (i, j, grid, dirs, visited) => {
  if ( !inBound(i, j, grid) ) return;
  if ( visited[i + "-" + j] ) return;
  if ( grid[i][j] === "0" ) return;
  visited[i + "-" + j] = true;

  dirs.forEach(dir => {
    expandIsland = (i + dir[0], j + dir[1], grid, dirs, visited)
  })
}

const inBound = (i, j, grid) => {
  return i >= 0 && j >= 0 && i < grid.length && j < grid[i].length;
}
