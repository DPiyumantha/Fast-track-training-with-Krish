const express = require('express');
const app = express();
const getThirdLargest = require('./third-largest');
const port = 3000;
app.use(express.json());

//request body should contain an object in the form {"dataset":[1,2,3,4,5]"}
app.post('/third-largest',(req, res)=>{
    try{res.send(getThirdLargest(req.body.dataset).toLocaleString())
    }catch(err){
        res.status(400).send(err)
    }
})


app.listen(port,()=>{console.log("Listening on port ", port)})
