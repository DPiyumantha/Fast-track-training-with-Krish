function linearSearch(arr, searchTerm){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===searchTerm){
            return i;
        }
    }
    return -1;
}

function printResult(index){
    index > -1? console.log("Item found at",index," - ",dataset[index]):console.log("Item not found");
}

module.exports={linearSearch}