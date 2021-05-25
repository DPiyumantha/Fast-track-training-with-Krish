function quickSort(arr) {
    if(arr.length < 2) {
      return arr;
    }
  
    var pivot = arr[0];
    var lesserArray = [];
    var greaterArray = [];
  
    for (var i = 1; i < arr.length; i++) {
      if ( arr[i] > pivot ) {
        greaterArray.push(arr[i]);
      } else {
        lesserArray.push(arr[i]);
      }
    }
    return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
  }

  console.log(quickSort([6,5,4,2,3,1]))