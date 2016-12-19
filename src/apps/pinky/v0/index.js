'use strict';

module.exports = (request, reply) => {

	let context = {
		appName: 'Pinky',
		version: 'V0',
		pageTitle: 'Pinky',
		slogan: 'Nrrrrrffffff!'
	};
	
	reply.view('apps/pinky/v0/index', context);
};