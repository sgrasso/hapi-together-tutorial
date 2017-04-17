'use strict';

module.exports = (request, reply) => {

	let context = {
		appName: 'The Pinky',
		version: 'V1',
		pageTitle: 'Hapi-Together - Pinky Page',
		slogan: 'What are we going to do tonight Brain?!'
	};
	
	reply.view('apps/example-2/v1/index', context);
};