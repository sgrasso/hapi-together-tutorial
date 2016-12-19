'use strict';

const boom = require('boom');
const path = require('path');

exports.register = (server, options, next) => {
 	server.route({
		method: 'GET',
		path: '/{assets*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	});
	
	server.route({
		path: '/{path*}',
		method: 'GET',
		handler: (request, reply) => {
			console.log(request.path)
			try {
				return require(path.resolve(request.path))(request, reply, true);
			}
			catch (e) {
				console.log(e)
				return boom.notFound();
			}
		}
	});

	next();
};
 
exports.register.attributes = {
	pkg: require('./package.json')
};