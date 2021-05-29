const {linearSearch} = require('./linearSearch')
const numArr=[4,8,5,9,7,1,6,2,3]
const searchTerm=2;
console.log("Array : ",numArr)
console.log("Search term : ",searchTerm)
console.log(linearSearch(numArr,searchTerm))