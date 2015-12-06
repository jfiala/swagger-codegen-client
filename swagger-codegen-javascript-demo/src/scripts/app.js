

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
	
 baseUrl: 'scripts',
 paths: {
     app: 'app',
     jquery: 'lib/jQuery-1.10.2',
     UsercrudApi: 'rest/api/UsercrudApi',
     User: 'rest/model/User',
     Location: 'rest/model/Location',
     
     
     
 }

 
});

//log.info('*** requirejs-config is inited');

//Start loading the main app file. Put all of
//your application logic in there.
requirejs(['app/main']);

