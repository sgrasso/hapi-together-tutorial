#Hapi.js Workshop 1
##@dealertire

The home plugin is done as a reference for you. (src/apps/home/)
All exercise are to be done in the ```/src``` folder.

##1. Create first plugin

* Go to the Brain app and follow the instructions filling in the needed areas of both the index.js and brain.js files.
	- You should be able to route to this by ```/brain```.
	- index.js is the hapi plugin register file.
	- brain.js is the handler for your route.
	- Register your route with the manifest and declare a prefix of ```/brain```.

##2. Create a versioned plugin

* Go to the Pinky app and find what is missing. You will need to add needed files to create a plugin that contains two different versions called v0 and v1.
	- You should be able to route to these when done as ```'/pinky', '/pinky/v0' and '/pinky/v1'```.
	- Create a package.json file for this plugin. Hint: ```npm init```
	- Create an index.js file from scratch that will register your plugin and create a route that will handle all neccessary versions.
		+ Hint: Understand hapi route parameters.
* Inside the two versions create the standard setup of...
	- client.js, index.css, index.hbs, index.js (handler)
		+ Hint: Copy files and logic from previous steps/examples...
	- Please copy the index.hbs files from the folder ```COPY_ME_HBS```... Your front-end developer completed them already. :)
	- The context passed to the client should resemble the previous exercise but should also include a property for ```version```.
	- Register the plugin in the manifest and declare a route prefix of ```/pinky```.

##3. Homework

* How would I check to limit access to a specific route or version? This must be done prior to route handling.
	- Given: User is logged in and application has a JSON configuration object containing that information on request.
	- Hint: Extension methods ```server.ext``` and the request lifecycle...