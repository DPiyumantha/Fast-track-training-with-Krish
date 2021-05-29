const express = require('express');
const app = express();
const searchRouter = require('./searchRouter')
const sortRouter = require('./sortRouter')
const port = 3000;
app.use(express.json());
app.use('/',searchRouter);
app.use('/',sortRouter);

//request body should contain an object in the form {"dataset":[1,2,3,4,5],"searchTerm:4}




app.listen(port,()=>{console.log("Listening on port ", port)})