function getThirdLargest(arr){
    if(arr.length<3) throw "Array too small"
    return arr.filter(i=>!isNaN(i)).sort((a,b)=>b-a)[2]
}
module.exports=getThirdLargest
