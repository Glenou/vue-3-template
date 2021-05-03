/**
 * Sort an array by a given key
 *
 * @param array the array to sort
 * @param key the key to sort by
 * @param asc the direction to sort
 */
export function sortArrayByObjectKey(array: any[], key: string, asc = true): any[] {
  const sortedArray = array.sort((a, b) => {
    if (a[key] < b[key]) {
      return asc ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return asc ? 1 : -1;
    }
    return 0;
  });
  return sortedArray;
}

/**
 * Remove items that doesn't match the value given
 *
 * @param array the array to filter
 * @param key the key to check to filter
 * @param value the value to check
 */
export function filterArrayByObjectStringProperty(array: any[], key: string, value: string): any[] {
  const filteredArray = array.filter((item) => {
    if (typeof item[key] === 'string') {
      if (item[key].toLowerCase().includes(value)) {
        return true;
      }
    }
    return false;
  });
  return filteredArray;
}
