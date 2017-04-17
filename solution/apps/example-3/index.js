'use strict';

const Twitter = require('twitter');
const tweetToHTML = require('tweet-to-html');
const credentials = {
	"consumer_key": "ar1tj7LNE636RxuriFhW1IF0a",
	"consumer_secret": "jkKFKUo1UtE00dKl6a0rWBOAdd7QhV28huVuwuxSIT9SjvpwmI",
	"access_token_key": "334411907-3jaehwtcdMkS4WzXCdINAbVkH1vu9I29iqQOE7I7",
	"access_token_secret": "GDhWBiKYB1XnYpS53Hk6sfEp6l0kZVOruAnuBJdVmBTcK"
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