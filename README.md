# Hapi-Together-Tutorial

This tutorial aims to provide an introduction to using Hapi.js plugins in a modularized, micro application manner. It also begins to touch on view and plugin versioning as well as request extension points.  

Hapi modules like Glue and Rejoice allow us to run a server completely through configuration.
This works well in the micro container world.

#### JS User Group Presentation Slides: http://bit.ly/2onH3HD

## Tutorial Objectives

- Understand how to decouple individual pieces of application logic and manage them as typical dependencies possibly with a Private or Public NPM repository. 
- Understand how to take logical groups of web application sections and handle them as plugins.
	- Example-1
- Experience working with plugins and versioning to possibly meet A/B testing requirements.
	- Example-2
- Understand how to create a routeless plugin that makes use of Hapi's request extension points.
	- Example-3

## Instructions - Ready GO!

- The home plugin is done as a reference for you. (`/src/apps/home/`)
- Leverage the home plugin as your guide for completing example-1, then compare to the solutions folder when complete.
- All exercise are to be done in the `/src` folder.

## 1. Create first plugin

* Go to the Example-1 app and follow the instructions filling in the needed areas of both the index.js and brain.js files.
	- You should be able to route to this by `/brain`.
	- index.js is the hapi plugin register file.
	- brain.js is the handler for your route.
	- Register your route with the `src/manifest.js` and declare a prefix of `/brain`.

## 2. Create a versioned plugin

* Go to the Example-2 app and find what is missing. You will need to add needed files to create a plugin that contains two different versions called v0 and v1.
	- You should be able to route to these when done as `'/pinky', '/pinky/v0' and '/pinky/v1'`.
	- Create a package.json file for this plugin. Hint: `npm init`
	- Create an index.js file from scratch that will register your plugin and create a route that will handle all neccessary versions.
		+ Hint: Hapi route parameters.
* Inside the two versions create the standard setup of...
	- client.js, index.css, index.hbs, index.js (route handler)
		+ Hint: Copy files and logic from previous steps/examples...
	- The context passed to the client should resemble the previous exercise but should also include a property for `version`.
	- Register the plugin in the manifest and declare a route prefix of `/pinky`.
    - Open a browser to localhost:3500/pinky and see the glory you created! Check both versions.

## 3. Create a routeless plugin that retrieves and caches Tweets from the Twitter API

* Go to Example-3 and determine how would I make an API available to the server and each request? 
	- Extension methods `server.ext` and the request lifecycle. :)
	- Create a `server.method` that is called `getTweets` within the glue compose callback in the top level index.js
	- Signal the method to call the twitterApi function defined at the top of the index.js file.
	- Pass a third parameter to the `server.method` to cache the response containing an object of cache setting along with a generateKey function to create a cache key based on the screen_name requested.
		+ Hint: https://hapijs.com/tutorials/server-methods?lang=en_US
	- You will have to generate twitter api credentials in order to do a successful call.  Plug those into the credentials object within the example-3 plugin.
	- Modify the current Home page plugin to request the twitter `server.method` and return the results in the context object with a property called `tweets`.
		+ Hint: `request.server.methods.getTweets(screen_name, done)`
	- Reload the home page.