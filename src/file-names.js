const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const used = {};
  return names.map((name) => {
    if (!(name in used)) {
      used[name] = 1;
      return name;
    }
    let k = used[name];
    let candidate = `${name}(${k})`;
    while (candidate in used) {
      k += 1;
      candidate = `${name}(${k})`;
    }
    used[name] = k + 1;
    used[candidate] = 1;
    return candidate;
  });
}

module.exports = {
  renameFiles
};
