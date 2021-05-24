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

const dataset = [1,2,5,100,"Galle", "Colombo",{name:"Maleena"}, 0.12];
var index = linearSearch(dataset, "Colombo");
printResult(index);

index = linearSearch(dataset, 100);
printResult(index);

index = linearSearch(dataset, "Colmbo");
printResult(index);