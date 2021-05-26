function findMissingNumber(arr){
    arr= arr.filter(el=>!isNaN(el)).sort((a,b)=>a-b);
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1]-arr[i]!=1){
            return arr[i]+1;
        }
    }
    return null;
}
console.log(
findMissingNumber([1,3,4,6,7,2,5,10,9])
)