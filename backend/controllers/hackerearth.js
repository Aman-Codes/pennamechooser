const axios = require('axios');
const urlList = require('../config/urlList');

const hackerearth = async username => {
	let result = {};
	if (username) {
		await axios
			.get(urlList.hackerearth + username)
			.then(response => {
				const is404PageRegex = /404 error/g;
				if (response.status === 200) {
					result = {
						error: false,
						usernameAvailable: is404PageRegex.test(response.data),
					};
				} else {
					result = {
						error: true,
						usernameAvailable: false,
						errormessage: response.statusText,
					};
				}
			})
			.catch(error => {
				if (error.message === 'Request failed with status code 404') {
					result = {
						error: false,
						usernameAvailable: true,
					};
				} else {
					result = {
						error: true,
						usernameAvailable: false,
						errormessage: error.message,
					};
				}
			});
	} else {
		result = {
			error: true,
			usernameAvailable: false,
			errormessage: 'username not provided',
		};
	}
	return result;
};

module.exports = hackerearth;
