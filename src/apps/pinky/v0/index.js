
module.exports = (request, reply) => {

	let context = {
		appName: 'Pinky',
		version: 'v0',
		pageTitle: 'Pinky Page V0',
		slogan: 'Nrrrrrffffff!'
	};
	
	reply.view('apps/pinky/v0/index', context);
};