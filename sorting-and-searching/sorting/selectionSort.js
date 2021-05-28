function selectionSort(arr){

    for(let i=0; i<arr.length;i++){
        minIndex=i;
        for(let j=i; j<arr.length;j++){
           if(arr[minIndex]>arr[j]){
            minIndex=j;
           }
        }
        
        let temp = arr[i];
        arr[i]=arr[minIndex]
        arr[minIndex]=temp;

    }
    return arr;

}

module.exports = {selectionSort}