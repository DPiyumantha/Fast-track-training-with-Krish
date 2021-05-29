function quickSort(arr) {
    if(arr.length < 2) {
      return arr;
    }
    var pivot = arr[arr.length-1];
    var lesserArray = [];
    var greaterArray = [];
  
    for (var i = 0; i < arr.length-1; i++) {
      if ( arr[i] > pivot ) {
        greaterArray.push(arr[i]);
      } else {
        lesserArray.push(arr[i]);
      }
    }
    return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
  }

module.exports= {quickSort}