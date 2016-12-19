'use strict';

exports.register = (server, options, next) => {
 
	server.route({
		path: '/',
		method: 'GET',
		handler: (request, reply) => {

			let context = {
				appName: 'Hapi @Dealertire',
				pageTitle: 'Hapi.js Tutorial Workshop Home Page',
				slogan: server.settings.app.slogan
			};
			
			reply.view('apps/home/index', context);
		}
	});

	next();
};
 
exports.register.attributes = {
	pkg: {
		name: "Home Page",
		version: "1.0"
	}
};