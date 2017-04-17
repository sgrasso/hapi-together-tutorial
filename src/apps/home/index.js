'use strict';

exports.register = (server, options, next) => {
 
	server.route({
		path: '/',
		method: 'GET',
		handler: (request, reply) => {

			let context = {
				appName: 'Hapi-Together @Dealertire',
				pageTitle: 'Hapi-Together - Home Page',
				slogan: server.settings.app.slogan
				/* Example-3 - Put Code Here */
			};
			
			/* 

			Example-3 - Put Code Here 

			*/

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