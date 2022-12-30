const express = require("express");
const app = express();
const postContr = require("../controllers/post");

app.post("/", postContr.post);

module.exports = app;
