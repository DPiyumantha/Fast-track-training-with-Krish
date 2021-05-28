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

console.log(selectionSort([3,2,1,4,5,100,99]))