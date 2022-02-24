const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const MONGODB_URI =
"mmongodb+srv://premnath:prem@mongodb@cluster0.dy0hf.mongodb.net/hackofest?retryWrites=true&w=majority"
    "mongodb+srv://ravib_05:ravichandran@cluster0.pgad7.mongodb.net/ehoryzon";

const app = express();

const port = process.env.PORT || 3000;

mongoose
    .connect(MONGODB_URI)
    .then((result) => {
        app.listen(port);
    })
    .catch((err) => {
        console.log(err);
    });