const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  return backyard.reduce(
    (count, row) => count + row.filter((cell) => cell === '^^').length,
    0,
  );
}

module.exports = countCats;

module.exports = {
  countCats
};
