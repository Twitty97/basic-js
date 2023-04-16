const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let counts = {};
  let arr = [];
  let newArray = [];
  domains.forEach(element => {
    chunk = element.split(".").reverse();
    arr.push(chunk);
  });

  arr = arr.reverse();
  console.log(arr);
  arr.forEach(element => {
    chunk = "." + element[0];
    newArray.push(chunk);
    console.log(chunk);
    for(let i = 1; i < element.length; i++){
      chunk = chunk + "." + element[i];
      newArray.push(chunk);
    }
  });

  newArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  return counts;
}

module.exports = {
  getDNSStats
};
