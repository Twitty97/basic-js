const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  rows = matrix.length;
  columns = matrix[0].length;

  let array = Array(rows).fill().map(() => Array(columns).fill(0));

  for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
      if(matrix[i][j] == true) {
        array[i][j] = 1;
      }
      else {
        if(j > 0 && matrix[i][j-1] == true){
          array[i][j] = array[i][j] + 1;
        }
        if(j < (columns - 1) && matrix[i][j+1] == true){
          array[i][j] = array[i][j] + 1;
        }
        if(i > 0 && matrix[i-1][j] == true){
          array[i][j] = array[i][j] + 1;
        }
        if(i < (rows - 1) && matrix[i+1][j] == true){
          array[i][j] = array[i][j] + 1;
        }
        if(i > 0 && j > 0 && matrix[i-1][j-1]){
          if(array[i][j] != true)
          array[i][j] = array[i][j] + 1;
        }
        if(i < (rows - 1) && j < (columns - 1) && matrix[i+1][j+1]){
          if(array[i][j] != true)
          array[i][j] = array[i][j] + 1;
        }
        if(i > 0 && j < (columns - 1) && matrix[i-1][j+1]){
          if(array[i][j] != true)
          array[i][j] = array[i][j] + 1;
        }
        if(i < (rows - 1) && j > 0 && matrix[i+1][j-1]){
          if(array[i][j] != true)
          array[i][j] = array[i][j] + 1;
        }
      }
    }
  }

  return array;

}

module.exports = {
  minesweeper
};
