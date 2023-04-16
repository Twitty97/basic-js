const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

function getEmailDomain(email) {
  chunk = email.split("@");
  let lastItem = chunk.pop();
  return lastItem;
}

module.exports = {
  getEmailDomain
};
