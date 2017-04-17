'use strict';

const path = require('path');
const glue = require('glue');
const handlebars = require('handlebars');
const manifest = require('./manifest.js');
const options = {
	relativeTo: __dirname
};

glue.compose(manifest, options, (e, server) => {
	if (e) throw e;

	server.views({
		engines: {
			hbs: handlebars
		},
		path: __dirname,
		layoutPath: path.join(__dirname, 'templates/layouts'),
		partialsPath: path.join(__dirname, 'templates/partials'),
		layout: 'main'
	});

	server.route({
		method: 'GET',
		path: '/{assets*}',
		handler: {
			directory: {
				path: path.join(__dirname, '../public')
			}
		}
	});

	server.start(err => {
		if (err) throw err;
		console.log('Server running at: %s', server.info.uri);
	});
});