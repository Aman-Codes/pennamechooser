const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRoute = require('./routes/index');

const app = express();
const BUILD_PATH = path.join(__dirname, 'build');

function setNoCache(res) {
	const date = new Date();
	date.setFullYear(date.getFullYear() - 1);
	res.setHeader('Expires', date.toUTCString());
	res.setHeader('Pragma', 'no-cache');
	res.setHeader('Cache-Control', 'public, no-cache');
}

function setLongTermCache(res) {
	const date = new Date();
	date.setFullYear(date.getFullYear() + 1);
	res.setHeader('Expires', date.toUTCString());
	res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
}

app.use(compression());
app.use(cors());
app.use(
	express.static(BUILD_PATH, {
		extensions: ['html'],
		// eslint-disable-next-line no-shadow
		setHeaders(res, path) {
			if (path.match(/(\.html|\/sw\.js)$/)) {
				setNoCache(res);
				return;
			}

			if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|json)$/)) {
				setLongTermCache(res);
			}
		},
	})
);
app.use(bodyParser.urlencoded({ extended: true, useNewUrlParser: true }));

app.use('/api', indexRoute);

app.get('/', (req, res) => {
	setNoCache(res);
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
