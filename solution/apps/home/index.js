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
			};

			request.server.methods.getTweets(
				'spgrasso', 
				(e, tweets) => {
					let content = [], i = 0, tLen = (tweets) ? tweets.length : 0;
					
					if (e) console.log(e);

					for (i = 0; i < tLen; i++) {
						content.push(tweets[i].html);
					}

					context.tweets = content;

					return reply.view('apps/home/index', context);
				}
			);
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