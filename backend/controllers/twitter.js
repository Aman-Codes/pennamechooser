const axios = require('axios');
const urlList = require('../config/urlList');

const twitter = async username => {
	let result = {};
	if (username) {
				const body = await axios.get(`https://twitter.com/i/api/i/users/username_available.json?username=${username}`, {
			headers: {
				"authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
				"x-guest-token": "1541486022587998209",
			}
		});

		if (body.data && body.data.valid) {
			
			result = {
				error: false,
				usernameAvailable: true
			}
			
		} else {
			
			result = {
				error: false, 
				usernameAvailable: false 
			}
			
		}


	return result;
}}

module.exports = twitter;
