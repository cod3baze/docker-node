const express = require("express");

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(PORT, HOST);
