function findMissingNumber(arr){
    arr= arr.filter(el=>!isNaN(el)).sort((a,b)=>a-b);
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1]-arr[i]!=1){
            return arr[i]+1;
        }
    }
    return [(arr[0]-1),(arr[arr.length-1]+1)];
}

function printMissingNumber(arr){
    console.log("Given sequence : ",arr)
    console.log("You're missing, ");
    Array.isArray(res=findMissingNumber(arr))?console.log(`${res[0]} or ${res[1]}`)
    :console.log(res)
}


printMissingNumber( [ 1, 3, 4, 6, 7, 2, 5, 10, 9])
printMissingNumber( [ 1, 3, 8, 4, 6, 7, 2, 5, 10, 9])

