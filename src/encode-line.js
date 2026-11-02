const { NotImplementedError } = require('../lib');

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
  return str.replace(/(.)\1*/g, (match, ch) => (match.length > 1 ? match.length + ch : ch));
}

module.exports = {
  encodeLine
};
