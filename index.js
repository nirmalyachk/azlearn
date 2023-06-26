var express = require("express");

var app = express();

app.get("/", function (req, res) {

res.send("Remember.. This is from STAGING..Simple Web Application is UP and hi from "+ req.headers.host);

});

app.listen(8080, function () {

console.log("Simple Web Application running on port 8080!!!!!!!!!!!!!!!!!!!!!!!!!");

});
