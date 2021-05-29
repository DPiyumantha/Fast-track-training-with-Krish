const {quickSort} = require('../sorting/quickSort')

function binarySearch(arr, term) {
  return search(quickSort(arr),term)
  function search(arr,term){
    if (arr.length === 1) {
      if (arr[0] === term) {
        return "Element found";
      } else {
        return "Element not found";
      }
    }
    var mid = Math.floor(arr.length / 2);
    if (term < arr[mid]) {
      return search(arr.slice(0, mid), term);
    } else {
      return search(arr.slice(mid, arr.length), term);
    }
  }
}
module.exports={binarySearch}

