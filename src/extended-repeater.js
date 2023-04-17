const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  str = `${str}`;
  if(str == null){
    str = str.toString();
  }

  let newStr = [];
  let addStr = [];


  // handle object coersion 

// const obj = {
//     [Symbol.toPrimitive](hint) {
//     if (hint !== 'number') {
//       return 'STRING_OR_DEFAULT';
//     }
//     return 'NUMBER';
//   }
// };

  // if(typeof(str) == 'object' && Object.keys(str).length == 0){
  //   str = obj;
  // }
  // else {
  //   str = str.toString();
  // }


  // handle default values

  Object.defineProperty(options, 'separator', {
    value: options.separator || '+', 
  })

  Object.defineProperty(options, 'additionSeparator', {
    value: options.additionSeparator || '|', 
  })

  // functional requirements 

  if(options.hasOwnProperty('addition')){
    addStr = `${options.addition}`;
    if(addStr == null){
      addStr = addStr.toString();
    }
    // if(typeof(addStr) == 'object' && Object.keys(addStr).length == 0){
    //   addStr = obj;
    // }
    // else {
    //   addStr = addStr.toString();
    // }
    if(options.hasOwnProperty('additionRepeatTimes')){
      newStr = new Array(options.additionRepeatTimes).fill(addStr).join(options.additionSeparator);
      newStr = str + newStr;
      str = newStr;
    }
    else{
      newStr = str + addStr;
      str = newStr;
    }
  }

  newStr = new Array(options.repeatTimes).fill(str).join(options.separator);

  return newStr;
}

module.exports = {
  repeater
};
