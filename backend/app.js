
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
// const codechefRoutes = require('./routes/codechef');
// const hackerrankRoutes = require('./routes/hackerrank');
// const leetcodeRoutes = require('./routes/leetcode');
// const testRoutes = require('./routes/test');

const app = express();
app.use(compression());
app.use(bodyParser.urlencoded({extended: true, useNewUrlParser:true}));

// app.use(codechefRoutes);
// app.use(hackerrankRoutes);
// app.use(leetcodeRoutes);
// app.use(testRoutes);

module.exports = app;