'use strict';

exports.register = (server, options, next) => {
 
	server.route({
		path: '/',
		method: 'GET',
		handler: require('./brain')
	});

	next();
};
 
exports.register.attributes = {
	pkg: require('./package.json')
};