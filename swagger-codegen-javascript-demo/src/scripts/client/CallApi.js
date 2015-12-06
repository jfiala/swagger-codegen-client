
var myGlobalUser1 = {};

/**
 * basic example to create and read a User
 */
function callApi() {
	
	var backend_url = 'http://localhost:8080/user';
	var data = {id: 1, firstname: 'my first name', lastname: 'surname', state: 'ACTIVE', location: { city: 'Vienna' }};
	var json_data = JSON.stringify(data);
	console.log('request: ' + json_data);
	
	var options = {type: "post", async: true, contentType: "application/json", dataType: "json", data: json_data};
	var request = $.ajax(backend_url, options, data);
	
	request.done(function(response){
		
    	console.log('firstname: ' + response.firstname);
    	console.log('location.city: ' + response.location.city);
    	console.log('response: ' + JSON.stringify(response));    	
    	
    	var queryString = '?id=' + response.id;
    	var url = backend_url + queryString;
    	
    	var options = {type: "get", async: true, contentType: "application/json", dataType: "json"};
    	var request = $.ajax(url, options, data);
    	request.done(function(response){
    		
        	console.log('location.city: ' + response.location.city);
    			
    		myGlobalUser1.firstname = response.firstname + " in " + response.location.city;
    	});
    	
	});
	
}
















