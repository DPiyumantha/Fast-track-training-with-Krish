function getThirdLargest(arr){
    return arr.filter(i=>!isNaN(i)).sort((a,b)=>b-a)[2]
}

console.log(getThirdLargest([1,2,5,3,9,7,"ss", {name:"John"},11,96,63,0.5]))