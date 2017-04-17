'use strict';

let internals = {
	"server": {
		"app": {
			"slogan": "Web developers shall rule the world"
		},
		"connections": {
			"router": {
				"stripTrailingSlash": true
			}
		}
	},
	"connections": [],
	"registrations": [
		{
			"plugin": "vision"
		},
		{
			"plugin": "inert"
		},
		{
			"plugin": "./apps/home",
			"options":{}
		}
		/*
			Add your new plugins and route prefixes here...
		*/
	]
};

internals.connections.push({port: process.env.PORT || 3500, labels: ["hapi-together-tut"]});

module.exports = internals;