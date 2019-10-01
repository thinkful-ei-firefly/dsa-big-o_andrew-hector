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

function solveMaze(maze, row = 0, column = 0, currentPath = '') {
  //check row and column are not below zero
  if (row < 0 || column < 0) {
    return '';
  }
  if (row >= maze.length || column >= maze[0].length) {
    return '';
  }

  if (maze[row][column] === 'e') {
    console.log(currentPath);
    return '';
  }
  if (maze[row][column] === ' ') {
    maze[row][column] = 'x';
    solveMaze(maze, row, column + 1, currentPath + 'R');
    solveMaze(maze, row + 1, column, currentPath + 'D');
    solveMaze(maze, row, column - 1, currentPath + 'L');
    solveMaze(maze, row - 1, column, currentPath + 'U');
    maze[row][column] = ' ';
  }
}

solveMaze(mySmallMaze);

solveMaze(maze);

// O(2^maze) Exponential
