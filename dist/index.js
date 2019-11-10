"use strict";

var express = require('express');

var port = process.env.PORT || 4005;
var app = express(); //Settings

app.set(port);
app.listen(port, function () {
  console.log("Server listening on port ".concat(port));
});