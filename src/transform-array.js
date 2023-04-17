const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr)){
  let newArray = [];
  let result = [];
  let empty = [];
  let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            flag = true;
            if(i < (arr.length - 1)){
            result = arr.slice(0, i) + "," + arr.slice(i + 2);
            str = result.split(",");
            const arrOfNum = str.map(s => {return parseInt(s, 10);});
            newArray.push(arrOfNum);
            newArray = newArray.flat(1);
            }
            else {
              result = arr.slice(0, arr.length-1);
              newArray = result;
            }
        } if (arr[i] === '--discard-prev') {
            flag = true;
            if(i>0){
            result = arr.slice(0, i - 1) + "," + arr.slice(i + 1);
            str = result.split(",");
            const arrOfNum = str.map(s => {return parseInt(s, 10);});
            newArray.push(arrOfNum);
            newArray = newArray.flat(1);
            }
            else{
              result = arr.slice(1);
              newArray = result;
            }
        } if (arr[i] === '--double-next') {
            flag = true;
            if(i < arr.length - 1){
            result = arr.slice(0, i) + "," + arr[i + 1] + "," + arr.slice(i + 1);
            str = result.split(",");
            const arrOfNum = str.map(s => {return parseInt(s, 10);});
            newArray.push(arrOfNum);
            newArray = newArray.flat(1);
            }
            else {
              result = arr.slice(0, arr.length-1);
              newArray = result;
            }
        } if (arr[i] === '--double-prev') {
            flag = true;
            if(i>0){
            result = arr.slice(0, i) + "," + arr[i - 1] + "," + arr.slice(i + 1);
            str = result.split(",");
            const arrOfNum = str.map(s => {return parseInt(s, 10);});
            newArray.push(arrOfNum);
            newArray = newArray.flat(1);
            }
            else {
              result = arr.slice(1);
              newArray = result;
            }
        }
    }
    if(flag != true){
      return arr;
    }
    else{
      empty = newArray;
      newArray = [];
      return empty;
    }
  }
  else{
    throw Error ("\'arr\' parameter must be an instance of the Array!");
  }
};

module.exports = {
  transform
};
