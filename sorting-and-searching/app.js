const express = require('express');
const app = express();
const searchRouter = require('./searchRouter')
const sortRouter = require('./sortRouter')
const port = 3000;
app.use(express.json());
app.use('/',searchRouter);
app.use('/',sortRouter);

//request body should contain an object in the form {"text":"this is a sentence or word"}




app.listen(port,()=>{console.log("Listening on port ", port)})