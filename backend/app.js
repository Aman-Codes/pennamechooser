
const express = require('express');
const path = require("path");
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRoute = require('./routes/index');

const app = express();
app.use(compression());
app.use(cors());
app.use(express.static("build"));
app.use(bodyParser.urlencoded({extended: true, useNewUrlParser:true}));

app.use('/api', indexRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;