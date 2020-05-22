"use strict";

const express = require("express");
const app = express();
const routes = require("./router");
const port = 3000;
const bodyParser = require('body-parser')

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", routes);

app.get("*", routes);

// Handle incoming request
app.use("api/*", routes);
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Server is running: ${port}`);
});

