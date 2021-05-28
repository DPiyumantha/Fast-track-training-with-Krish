const express = require('express');
const app = express();
const {printMissingNumber} = require('./missing-number');
const port = 3000;
app.use(express.json());

//request body should contain an array

app.get('/missing-number', (req, res)=>{
    res.send(printMissingNumber(req.body));
})

app.listen(port,()=>{console.log("Listening on port ", port)})
