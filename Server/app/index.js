const express = require("express");
const logger = require("../log/index");
const app = express();
app.use(logger);

app.get("/", (req, res, next) => {
  console.log("hello world");
  res.send("hello world");
});

app.push("/user/:id", (req, res, next))

module.exports = app;
