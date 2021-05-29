function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  const sorted1 = mergeSort(arr.slice(0, mid));
  const sorted2 = mergeSort(arr.slice(mid, arr.length));
  return merge(sorted1, sorted2);
}

function merge(arr1, arr2) {
  const sorted = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      sorted.push(arr2[0]);
      arr2.shift();
    } else {
      sorted.push(arr1[0]);
      arr1.shift();
    }
  }
  while (arr1.length) {
    sorted.push(arr1.shift());
  }
  while (arr2.length) {
    sorted.push(arr2.shift());
  }
  return sorted;
}

module.exports = {mergeSort}
