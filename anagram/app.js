const express= require('express')
const {printIsAnagram} =require('./anagram.js')
const app = express();
const port = 3000;
app.use(express.json());
app.get('/anagram',(req,res)=>{
    //request body should contain an array with two words
    res.send(printIsAnagram(req.body[0],req.body[1]))
})
app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})

