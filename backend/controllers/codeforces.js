const axios = require('axios');
const urlList = require('../config/urlList');

const codeforces = async username => {
	let result = {};
	if (username) {
		await axios
			.head(urlList.codeforces + username)
			.then(response => {
				if (response.status === 200) {
					if (response.request._redirectable._redirectCount === 1) {
						result = {
							error: false,
							usernameAvailable: true,
						};
					} else {
						result = {
							error: false,
							usernameAvailable: false,
						};
					}
				} else {
					result = {
						error: true,
						usernameAvailable: false,
						errormessage: response.statusText,
					};
				}
			})
			.catch(error => {
				result = {
					error: true,
					usernameAvailable: false,
					errormessage: error.message,
				};
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

module.exports = codeforces;
