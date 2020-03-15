const express = require("express");
const bodyParser = require("body-parser");
const allowCors = require("./cors");
const queryParser = require("express-query-int");
const routes = require("./routes");
const server = express();

const port = 3003;

server.use(
    bodyParser.urlencoded({
        extended: true
    })
);
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());
server.use(routes);

server.listen(port, function() {
    console.log(`BACKEND running on port ${port}.`);
});
