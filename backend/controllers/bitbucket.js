const axios = require('axios');
const urlList = require('../config/urlList');

const bitbucket = async username => {
	let result = {};
	if (username) {
		await axios
			.head(urlList.bitbucket + username, {
				headers: {
					Accept: '*/*',
				},
			})
			.then(response => {
				if (response.status === 200) {
					result = {
						error: false,
						usernameAvailable: false,
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

module.exports = bitbucket;
