function bubbleSort(arr){
do{
 var notSorted = false;

    for(let i=0;i<arr.length-1;i++){
        function swap(){
            notSorted=true;
                    let temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1]=temp;
        }
        
        if(isNaN(arr[i])&& isNaN(arr[i+1])){
            if(arr[i]>arr[i+1]){
            swap()
            }
        }
        else if(isNaN(arr[i])){
            swap()
        }
        else if(arr[i]>arr[i+1]){
            swap()
        }
    }
    

}while(notSorted)
    return arr;
}

console.log(bubbleSort([3,2,1,4,5,100,99]))
console.log(bubbleSort(["z","b",3,1,"aa",3,4,"a1",100,2,1]))
