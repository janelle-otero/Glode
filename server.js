const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/", function(req, res) {
  res.send("Hello World");
});


app.post("/api/string", function(req, res) {
  console.log(req.body);
  res.send("sups");
});

var server = app.listen(5000, function() {
  console.log("Server running on port 5000");
});
