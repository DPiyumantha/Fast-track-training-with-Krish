const express = require('express');
const app = express();
const {checkLetterRepetitions, checkWordRepetitions} = require('./letter-repetitions');
const port = 3000;
app.use(express.json());

//request body should contain an object in the form {"text":"this is a sentence or word"}

app.get('/word-repetions', (req, res)=>{
    res.send(JSON.stringify([...checkWordRepetitions(req.body.text)]));
})

app.get('/letter-repetions', (req, res)=>{
    res.send(JSON.stringify([...checkLetterRepetitions(req.body.text)]));
})


app.listen(port,()=>{console.log("Listening on port ", port)})
