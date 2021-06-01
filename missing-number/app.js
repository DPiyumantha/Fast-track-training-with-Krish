const express = require('express');
const app = express();
const {printMissingNumber,printMultipleMissingNumbers} = require('./missing-number');
const port = 3000;
app.use(express.json());

//request body should contain an object {"dataset":[1,2,3,4,6]}

app.post('/missing-number', (req, res)=>{
    res.send(printMissingNumber(req.body.dataset));
})

app.post('/multiple-missing-number', (req, res)=>{
    res.send(printMissingNumber(req.body.dataset));
})

app.listen(port,()=>{console.log("Listening on port ", port);
console.log("Sample request body : ",'{"dataset":[1,2,3,4,6]}')})

//Examples

console.log("==================================Example 1\n")
console.log("Missing multiple numbers")
console.log("Given sequence ",[2,3,4,7,11])
console.log(printMultipleMissingNumbers([2,3,4,7,11]))
console.log("==================================Example 2\n")
console.log("Missing multiple numbers")
console.log("Given sequence ",[1,2,3,4,5])
console.log(printMultipleMissingNumbers([1,2,3,4,5]))
console.log("==================================Example 3\n")
console.log("Missing one number")
console.log("Given sequence ",[1,2,3,5,6,7])
console.log(printMissingNumber([1,2,3,5,6,7]))
console.log("==================================Example 4\n")
console.log("Missing one number")
console.log("Given sequence ",[2,3,5,6,7,4])
console.log(printMissingNumber([2,3,5,6,7,4]))
console.log("===========================================")