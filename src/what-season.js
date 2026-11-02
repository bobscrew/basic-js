const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  // проверка, что это настоящий Date, а не подделка
  let isRealDate = false;
  try {
    // встроенный метод бросит TypeError, если this — не настоящий Date
    Date.prototype.getTime.call(date);
    isRealDate = true;
  } catch (e) {
    isRealDate = false;
  }
  if (!isRealDate) throw new Error('Invalid date!');
  if (Number.isNaN(date.getTime())) throw new Error('Invalid date!');

  const month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  return 'autumn';
}

module.exports = {
  getSeason
};
