const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counts = {};
  chunk = str.split("");
  chunk.forEach(function(x){counts[x] = (counts[x] || 0) + 1});
  var result = Object.keys(counts).map((key) => [key, counts[key]]);
  result.forEach(element => {
    element = element.reverse();
  })
  result = result.flat(1).join("");
  return result;
}

module.exports = {
  encodeLine
};
