'use strict';

module.exports = (request, reply) => {

	let context = {
		appName: 'The Brain',
		pageTitle: 'Brain',
		slogan: 'Same thing we do every night Pinky... Try and take over the world!'
	};

	reply.view('apps/brain/index', context);
};