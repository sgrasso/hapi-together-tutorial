'use strict';

module.exports = (request, reply) => {

	let context = {
		appName: 'The Brain',
		pageTitle: 'Hapi-Together - Brain Page',
		slogan: 'Same thing we do every night Pinky... Try and take over the world!'
	};

	reply.view('apps/example-1/index', context);
};