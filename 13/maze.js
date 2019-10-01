'use strict';

let mySmallMaze = [[' ', ' ', ' '], [' ', '*', ' '], [' ', ' ', 'e']];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//s ask e => base R => 0, 0+1, D => 0+1, 0

function solveMaze(maze, row, column) {
  if (maze[row][column] === 'e') {
    return '';
  }
  //test if go right
  if (maze[row][column + 1] === ' ') {
    return 'R' + solveMaze(maze, row, column + 1);
  }
  //test if go down
  if (maze[row + 1][column] === ' ') {
    return 'D' + solveMaze(maze, row + 1, column);
  }
  if (maze[row][column + 1] === 'e') {
    return 'R';
  }
  //test if go down
  if (maze[row + 1][column] === 'e') {
    return 'D';
  }
}

console.log(solveMaze(mySmallMaze, 0, 0));

console.log(solveMaze(maze, 0, 0));

// O(2^maze) Exponential
