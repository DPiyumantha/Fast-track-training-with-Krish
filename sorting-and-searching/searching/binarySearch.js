

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
module.exports={binarySearch}

