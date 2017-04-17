'use strict';

const Twitter = require('twitter');
const tweetToHTML = require('tweet-to-html');
const credentials = {

	/* Put twitter API credentials here */

	/* Example properties */
	// "consumer_key": "js3wu1ugD7YcqKdkeHa555TPD",
	// "consumer_secret": "biB6HvFT6DoF5xVWmthjPvZpNwst64li3zSeU0Xsc85wTyUuIC",
	// "access_token_key": "334411907-ttJuLg5qd3H784TPTmUHEA9CijqhsSWZPvconNnZ",
	// "access_token_secret": "tCZbJdvB8LxbkMPEfHpo4h6kBqJdk47nP9Jx7vT7kl4nJ"
};

const twitterApi = (screen_name, done) => {

	const api = new Twitter(credentials);
	const params = {screen_name: screen_name};

	api.get('statuses/user_timeline', params, (e, tweets, resp) => {
		if (e) return done(e, null);

		formatImageURLs(tweets).then(results => {
			return done(null, tweetToHTML.parse(results));
		}).catch(e => {
			return done(e, null);
		});
	});
}

const formatImageURLs = tweets => {
	// tweet-to-html converts photo links to img tags... don't really want that in the UI. Lets stop that and make links.
	return Promise.all(tweets.map(tweet => {
		if (tweet.extended_entities && tweet.extended_entities.media) {
			for (let i = 0; i < tweet.extended_entities.media.length; i++) {
				let url = tweet.extended_entities.media[i].url;
				tweet.text = tweet.text.replace(url, '<a href="' + url + '">' + url + '</a> ');
			}
			tweet.extended_entities.media = [];
		}
		return tweet;
	}));
}


exports.register = (server, options, next) => {
	
	server.method('getTweets', twitterApi, {
		cache: {
			expiresIn: 86399999,
			staleIn: 21599999,
			staleTimeout: 100,
			generateTimeout: 120000
		},
		generateKey: (screen_name) => {
			return screen_name;
		}
	});

	next();
};
 
exports.register.attributes = {
	pkg: require('./package.json')
};