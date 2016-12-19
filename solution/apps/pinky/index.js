'use strict';

const boom = require('boom');
const path = require('path');

exports.register = (server, options, next) => {
	
	server.route({
		path: '/{version*}',
		method: 'GET',
		handler: (request, reply) => {
			let version = request.params.version || 'v0'
			try {
				return require(path.join(__dirname, version))(request, reply);
			}
			catch (e) {
				return boom.notFound();
			}
		}
	});

	next();
};
 
exports.register.attributes = {
	pkg: require('./package.json')
};