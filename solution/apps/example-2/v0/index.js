'use strict';

module.exports = (request, reply) => {

	let context = {
		appName: 'The Pinky',
		version: 'V0',
		pageTitle: 'Hapi-Together - Pinky Page',
		slogan: 'Nrrrrrffffff!'
	};
	
	reply.view('apps/example-2/v0/index', context);
};