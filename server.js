const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/trang-chu2", (req, res) => {
  res.send("Hello world 123");
});

app.listen(port, () => console.log(`App listen at port: ${port}`));
