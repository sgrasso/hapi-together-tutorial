'use strict';

const path = require('path');
const glue = require('glue');
const manifest = require('./manifest.js');
const options = {
	relativeTo: __dirname
};

glue.compose(manifest, options, (e, server) => {
	if (e) throw e;

	server.views({
		engines: {
			hbs: require('handlebars')
		},
		path: './',
		layoutPath: './templates/layouts',
		partialsPath: './templates/partials',
		layout: 'main'
	});

	server.route({
		method: 'GET',
		path: '/{assets*}',
		handler: {
			directory: {
				path: '../public'
			}
		}
	});

	server.start(err => {
		if (err) throw err;
		console.log('Server running at: %s', server.info.uri);
	});
});