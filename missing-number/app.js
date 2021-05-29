const express = require('express');
const app = express();
const {printMissingNumber} = require('./missing-number');
const port = 3000;
app.use(express.json());

//request body should contain an object {"dataset":[1,2,3,4,6]}

app.post('/missing-number', (req, res)=>{
    res.send(printMissingNumber(req.body.dataset));
})

app.listen(port,()=>{console.log("Listening on port ", port)})
