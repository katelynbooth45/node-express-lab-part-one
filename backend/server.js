"use strict";

const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;
const bodyParser = require('body-parser')

app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("*", routes);

// Handle incoming request
app.use("api/*", routes);
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Server is running: ${port}`);
});

app.route('/api/cart-items/:id').get((req, res) => {
    const requestedID = req.param['id']
    res.send({ id : requestedID })
})

app.route('/api/cart-items').post((req, res) => {
    res.send(201, req.body)
})

app.route('/api/cart-items/:id').put((req, res) => {
    res.send(200, req.body)
})

app.route('api/cart-items/:id').delete((req, res) => {
    res.sendStatus(204)
})
