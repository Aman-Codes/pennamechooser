const express = require('express');

const router = express.Router();
const github = require('../controllers/github');
const codechef = require('../controllers/codechef');
const codeforces = require('../controllers/codeforces');
const hackerearth = require('../controllers/hackerearth');
const atcoder = require('../controllers/atcoder');
const medium = require('../controllers/medium');
const gitlab = require('../controllers/gitlab');
const leetcode = require('../controllers/leetcode');
const behance = require('../controllers/behance');
const devto = require('../controllers/devto');
const instagram = require('../controllers/instagram');
const pinterest = require('../controllers/pinterest');
const bitbucket = require('../controllers/bitbucket');
const interviewbit = require('../controllers/interviewbit');
const facebook = require('../controllers/facebook');
const codewars = require('../controllers/codewars');
const freecodecamp = require('../controllers/freecodecamp');
const twitter = require('../controllers/twitter');
const quora = require('../controllers/quora');

router.get('/github', async (req, res) => {
	const { username } = req.query;
	const result = await github(username);
	res.send(result);
});

router.get('/codechef', async (req, res) => {
	const { username } = req.query;
	const result = await codechef(username);
	res.send(result);
});

router.get('/codeforces', async (req, res) => {
	const { username } = req.query;
	const result = await codeforces(username);
	res.send(result);
});

router.get('/hackerearth', async (req, res) => {
	const { username } = req.query;
	const result = await hackerearth(username);
	res.send(result);
});

router.get('/atcoder', async (req, res) => {
	const { username } = req.query;
	const result = await atcoder(username);
	res.send(result);
});

router.get('/medium', async (req, res) => {
	const { username } = req.query;
	const result = await medium(username);
	res.send(result);
});

router.get('/gitlab', async (req, res) => {
	const { username } = req.query;
	const result = await gitlab(username);
	res.send(result);
});

router.get('/leetcode', async (req, res) => {
	const { username } = req.query;
	const result = await leetcode(username);
	res.send(result);
});

router.get('/behance', async (req, res) => {
	const { username } = req.query;
	const result = await behance(username);
	res.send(result);
});

router.get('/devto', async (req, res) => {
	const { username } = req.query;
	const result = await devto(username);
	res.send(result);
});

router.get('/instagram', async (req, res) => {
	const { username } = req.query;
	const result = await instagram(username);
	res.send(result);
});

router.get('/pinterest', async (req, res) => {
	const { username } = req.query;
	const result = await pinterest(username);
	res.send(result);
});

router.get('/bitbucket', async (req, res) => {
	const { username } = req.query;
	const result = await bitbucket(username);
	res.send(result);
});

router.get('/interviewbit', async (req, res) => {
	const { username } = req.query;
	const result = await interviewbit(username);
	res.send(result);
});

router.get('/facebook', async (req, res) => {
	const { username } = req.query;
	const result = await facebook(username);
	res.send(result);
});

router.get('/codewars', async (req, res) => {
	const { username } = req.query;
	const result = await codewars(username);
	res.send(result);
});

router.get('/freecodecamp', async (req, res) => {
	const { username } = req.query;
	const result = await freecodecamp(username);
	res.send(result);
});

router.get('/twitter', async (req, res) => {
	const { username } = req.query;
	const result = await twitter(username);
	res.send(result);
});
router.get('/quora', async (req, res) => {
	const { username } = req.query;
	const result = await quora(username);
	res.send(result);
});
module.exports = router;
