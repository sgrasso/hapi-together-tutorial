#Hapi.js Workshop 1

This workshop aims to provide an introduction to using Hapi.js plugins in a modularized, micro application manner. It also begins to touch on view and plugin versioning.  

Hapi modules like Glue and Rejoice allow us to run a server completely through configuration.
This works well in the micro container world.

## Workshop Objectives

- Understand how to take logical groups of web application sections and handle them as plugins.
- Understand how to decouple individual pieces of application logic and manage them as typical dependencies with a Private or Public NPM. 
- Understand the benefits of modularizing in this way, each plugin could be per team, and in its own repository that the team owns and works on.

## Instructions - Ready GO!

- The home plugin is done as a reference for you. (`/src/apps/home/`)
- Leverage the home plugin as your guide then compare to the solutions folder when complete.
- All exercise are to be done in the `/src` folder.

##1. Create first plugin

* Go to the Brain app and follow the instructions filling in the needed areas of both the index.js and brain.js files.
	- You should be able to route to this by `/brain`.
	- index.js is the hapi plugin register file.
	- brain.js is the handler for your route.
	- Register your route with the `src/manifest.js` and declare a prefix of `/brain`.

##2. Create a versioned plugin

* Go to the Pinky app and find what is missing. You will need to add needed files to create a plugin that contains two different versions called v0 and v1.
	- You should be able to route to these when done as `'/pinky', '/pinky/v0' and '/pinky/v1'`.
	- Create a package.json file for this plugin. Hint: `npm init`
	- Create an index.js file from scratch that will register your plugin and create a route that will handle all neccessary versions.
		+ Hint: Hapi route parameters.
* Inside the two versions create the standard setup of...
	- client.js, index.css, index.hbs, index.js (handler)
		+ Hint: Copy files and logic from previous steps/examples...
	- Please copy the index.hbs files from the folder `COPY_ME_HBS`... Your front-end developer completed them already. :)
	- The context passed to the client should resemble the previous exercise but should also include a property for `version`.
	- Register the plugin in the manifest and declare a route prefix of `/pinky`.
    - Open a browser to localhost:3500/pinky and see the glory you created! Check both versions.

##3. Limit access to versioned plugin (TODO)

* How would I check to limit access to a specific route or version? This must be done prior to route handling.
	- Given: User is logged in and the hapi application contains the `request.auth.credentials` for the user.
	- Hint: Extension methods `server.ext` and the request lifecycle. 
   
   TODO...