'use strict';

module.exports = (request, reply) => {

	let context = {
		appName: 'Pinky',
		version: 'v1',
		pageTitle: 'Pinky Page V1',
		slogan: 'What are we going to do tonight Brain?! Nrrrrrfffff!'
	};
	
	reply.view('apps/pinky/v1/index', context);
};