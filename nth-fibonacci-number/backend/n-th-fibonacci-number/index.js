import express, { json } from "express";
import getNthFibonacciNumber from "./fibonacci.js";
const app = express();
app.use(json());

const port = 3000;


app.get("/", (req, res) => res.send("POST {\"n\": a number} to /nth-fibonacci"));

app.post("/nth-fibonacci", (req, res) => {
  try {
    res.send({ result: getNthFibonacciNumber(req.body.n), error: false });
  } catch (error) {
    res.send({ error: true, errorMsg: error });
  }
});

app.listen(port, () => console.log(`Server listening on ${port}`));
