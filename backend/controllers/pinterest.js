const axios = require('axios');
const urlList = require('../config/urlList');

const pinterest = async username => {
	let result = {};
	if (username) {
		await axios
			.get(urlList.pinterest + username)
			.then(response => {
				const regexFor404 = /"httpStatus":404/g;
				if (response.status === 200) {
					result = {
						error: false,
						usernameAvailable: regexFor404.test(response.data),
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

module.exports = pinterest;
