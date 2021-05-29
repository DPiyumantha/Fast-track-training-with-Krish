const express = require("express");
const app = express();
const { printIsPalindrome } = require("./palindrome");
const port = 3000;
app.use(express.json());

//request body should contain an object in the form {"text":"this is a sentence or word"}

app.post("/palindrome", (req, res) => {
  req.body.text
    ? res.send(printIsPalindrome(req.body.text))
    : res.status(404).send("Input not found");
});

app.listen(port, () => {
  console.log("Listening on port ", port);
});
