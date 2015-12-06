

define( function (require) {
        
    requirejs(['jquery', 'UsercrudApi', 'User'], 
               function($, UsercrudApi, User){
    	console.log($);
    	console.log(UsercrudApi);
    	console.log(User);
    	var myGlobalUser = new User(1, 'test', 'test');
    	window.myGlobalUser = myGlobalUser;
    	
    	var myUser = new User(1, 'surname', 'my first name');
    	myUser.setState(StateEnum.ACTIVE);
    	myUser.getLocation().setCity("Vienna");
    	console.log('request: ' + myUser.toJson());
    	
    	var myUserApi = new UsercrudApi();
    	
    	myUserApi.saveUserCompleteUsingPOST1(myUser, 
    		/** @param {User} response */
    		function (response) {
    			console.log('firstname: ' + response.getFirstname());
    			console.log('location.city: ' + response.getLocation().getCity());
    			console.log('response: ' + response.toJson());
    			
    			myUserApi.getUserUsingGET1(response.getId(), 
    				/** @param {User} response */
    				function (response) {
    					console.log('location.city: ' + response.getLocation().getCity());
    					
    					myGlobalUser.setFirstname(response.getFirstname() + " in " + response.getLocation().getCity());
    				}
    			);
    		}
    	);
        
    });

	
});
