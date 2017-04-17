'use strict';

const working_dir = 'solution';

const path = require('path');
const glue = require('glue');
const handlebars = require('handlebars');
const manifest = require(path.join(working_dir, 'manifest.js'));
const options = {
	relativeTo: __dirname
};

glue.compose(manifest, options, (e, server) => {
	if (e) throw e;

	server.views({
		engines: {
			hbs: handlebars
		},
		path: './',
		layoutPath: path.join(working_dir, 'templates/layouts'),
		partialsPath: path.join(working_dir, 'templates/partials'),
		layout: 'main'
	});

	server.route({
		method: 'GET',
		path: '/{assets*}',
		handler: {
			directory: {
				path: './public'
			}
		}
	});

	server.start(err => {
		if (err) throw err;
		console.log('Server running at: %s', server.info.uri);
	});
});