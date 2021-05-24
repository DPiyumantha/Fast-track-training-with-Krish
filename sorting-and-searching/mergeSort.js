function mergeSort(arr){
    if(arr.length==1){
        return arr;
    }
    var mid = arr.length/2
    merge(mergeSort(arr.slice(0,mid), arr(mid, arr.length)))
}

function merge(){
    
}