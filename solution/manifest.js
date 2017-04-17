'use strict';

const path = require('path');

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
			"plugin": "./apps/home"
		},
		{
			"plugin": "./apps/example-1",
			"options":{
				"routes": {
					"prefix": "/brain"
				}
			}
		},
		{
			"plugin": "./apps/example-2",
			"options":{
				"routes": {
					"prefix": "/pinky"
				}
			}
		},
		{
			"plugin": "./apps/example-3"
		}
	]
};

internals.connections.push({port: process.env.PORT || 3500, labels: ["hapi tut"]});

module.exports = internals;