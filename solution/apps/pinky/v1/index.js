'use strict';

module.exports = (request, reply) => {

	let context = {
		appName: 'Pinky',
		version: 'V1',
		pageTitle: 'Pinky',
		slogan: 'What are we going to do tonight Brain?!'
	};
	
	reply.view('apps/pinky/v1/index', context);
};