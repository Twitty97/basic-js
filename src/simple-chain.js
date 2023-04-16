const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: '',
  n_str: '', 
  getLength() {
    let chunk = chainMaker.str.split("~~");
    let length = chunk.length;
    return length;
  },
  addLink(value) {
      if(chainMaker.str == '')
      chainMaker.str = chainMaker.str + "( " + value + " )";
      else
      chainMaker.str = chainMaker.str + "~~" + "( " + value + " )";
    return this;
  },
  removeLink(position) {
    arr = chainMaker.str.split("~~");
    if(arr.indexOf(arr[position-1]) < 0 ){
      this.str= '';
      throw Error ("You can\'t remove incorrect link!");
    }

    else {
      arr = arr.filter(item => item !== arr[position-1]);
      chainMaker.str = arr.join("~~");
    }
    return this;
  },
  reverseChain() {
    arr = chainMaker.str.split("~~");
    arr = arr.reverse();
    chainMaker.str = arr.join("~~");
    return this;
  },
  finishChain() {
    chainMaker.n_str = chainMaker.str;
    chainMaker.str = '';
    return this.n_str;
  }
};

module.exports = {
  chainMaker
};
