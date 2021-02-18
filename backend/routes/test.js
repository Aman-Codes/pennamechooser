const express = require('express');
const axios = require('axios');
const util = require('util');

const router = express.Router();

router.get('/url', async (req, res) => {
	const { url } = req.query;
	if (url) {
		axios
			.get(url)
			.then(response => {
				console.log(response.data);
				console.log(response.status);
				console.log(response.statusText);
				console.log(response.headers);
				console.log(response.config);
				console.log(response.request._redirectable._redirectCount);
				res.send({
					data: response.data,
					status: response.status,
					statusText: response.statusText,
					headers: response.headers,
					config: response.config,
					request: util.inspect(response.request),
				});
			})
			.catch(error => {
				console.log(error);
				res.send(error);
			});
	} else {
		res.send('Invalid Url');
	}
});

router.get('/urlhead', async (req, res) => {
	const { url } = req.query;
	if (url) {
		axios
			.head(url)
			.then(response => {
				console.log(response.data);
				console.log(response.status);
				console.log(response.statusText);
				console.log(response.headers);
				console.log(response.config);
				console.log(response.request._redirectable._redirectCount);
				res.send({
					data: response.data,
					status: response.status,
					statusText: response.statusText,
					headers: response.headers,
					config: response.config,
					request: util.inspect(response.request),
				});
			})
			.catch(error => {
				console.log(error);
				res.send(error);
			});
	} else {
		res.send('Invalid Url');
	}
});

module.exports = router;
