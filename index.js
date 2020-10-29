const flatMap = require('lodash/flatMap');

/**
 * Converts array of objects structure to CSV-like array of data arrays
 * First element will be columns
 * Then as many rows as array length
 *
 * @param {object[]} array
 * @param {boolean} [sameStructure=false]
 * @returns {Array[]} Array of arrays
 */
function convertToDataArray(array, sameStructure = false) {
  const columns = new Set(sameStructure
      ? Object.keys(array[0])
      : flatMap(array, (d) => Object.keys(d)));

  const colsAsArray = Array.from(columns).sort(Intl.Collator().compare);

  const data = array.map((row) => colsAsArray.map((colName) => row[colName]));

  return [colsAsArray, ...data];
}

module.exports = convertToDataArray;
