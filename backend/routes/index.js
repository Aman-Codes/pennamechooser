const express = require('express');
const router = express.Router();
const github = require('../controllers/github');
const codechef = require('../controllers/codechef');
const codeforces = require('../controllers/codeforces');
const hackerearth = require('../controllers/hackerearth');
const atcoder = require('../controllers/atcoder');
const a2oj = require('../controllers/a2oj');
const medium = require('../controllers/medium');
const gitlab = require('../controllers/gitlab');
const leetcode = require('../controllers/leetcode');

router.get('/github', async (req, res) => {
  const username = req.query.username;
  const result = await github(username);
  console.log("result to be send ", result);
  res.send(result);
});

router.get('/codechef', async (req, res) => {
  const username = req.query.username;
  const result = await codechef(username);
  console.log("result to be send ", result);
  res.send(result);
});

router.get('/codeforces', async (req, res) => {
  const username = req.query.username;
  const result = await codeforces(username);
  console.log("result to be send ", result);
  res.send(result);
});

router.get('/hackerearth', async (req, res) => {
  const username = req.query.username;
  const result = await hackerearth(username);
  console.log("result to be send ", result);
  res.send(result);
});

router.get('/atcoder', async (req, res) => {
  const username = req.query.username;
  const result = await atcoder(username);
  console.log("result to be send ", result);
  res.send(result);
});

router.get('/a2oj', async (req, res) => {
  const username = req.query.username;
  const result = await a2oj(username);
  console.log("result to be send ", result);
  res.send(result);
});

router.get('/medium', async (req, res) => {
  const username = req.query.username;
  const result = await medium(username);
  console.log("result to be send ", result);
  res.send(result);
});

router.get('/gitlab', async (req, res) => {
  const username = req.query.username;
  const result = await gitlab(username);
  console.log("result to be send ", result);
  res.send(result);
});

router.get('/leetcode', async (req, res) => {
  const username = req.query.username;
  const result = await leetcode(username);
  console.log("result to be send ", result);
  res.send(result);
});

module.exports = router;