

function binarySearch(arr, term) {
  if (arr.length === 1) {
    if (arr[0] === term) {
      return arr[0];
    } else {
      return term + " Not found";
    }
  }
  var mid = Math.floor(arr.length / 2);
  if (term < arr[mid]) {
    return binarySearch(arr.slice(0, mid), term);
  } else {
    return binarySearch(arr.slice(mid, arr.length), term);
  }
}
console.log(binarySearch([1, 2, 3, 4], 10));
console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4], 4));

