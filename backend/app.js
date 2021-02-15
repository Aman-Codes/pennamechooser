
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRoute = require('./routes/index');

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true, useNewUrlParser:true}));

app.use('/api', indexRoute);

module.exports = app;