
var myGlobalUser = new User();

/**
 * basic example to create and read a User
 */
function callApiSwagger() {
	
	var myUser = new User(1, 'surname', 'my first name');
	myUser.setState(StateEnum.ACTIVE);
	myUser.getLocation().setCity("Vienna");
	console.log('request: ' + myUser.toJson());
	
	var myUsercrudApi = new UsercrudApi();
	myUsercrudApi.saveUserCompleteUsingPOST1(myUser, 
		/** @param {User} response */
		function (response) {
			console.log('firstname: ' + response.getFirstname());
			console.log('location.city: ' + response.getLocation().getCity());
			console.log('response: ' + response.toJson());
			
			myUsercrudApi.getUserUsingGET1(response.getId(), 
				/** @param {User} response */
				function (response) {
					console.log('location.city: ' + response.getLocation().getCity());
					
					myGlobalUser.setFirstname(response.getFirstname() + " in " + response.getLocation().getCity());
				}
			);
		}
	);
}




