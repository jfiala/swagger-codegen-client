

//export module
if ( typeof define === "function" && define.amd ) {     
	define('StateEnum', ['jquery'], function($) {
        return StateEnum;
	 });
}

var StateEnum = function StateEnum() {
	var self = this;
	

	/**
	 * @const 
	 */ 
	self.ACTIVE = "ACTIVE",
	
	/**
	 * @const 
	 */ 
	self.DISABLED = "DISABLED";

}


//export module
if ( typeof define === "function" && define.amd ) {     
	define('User', ['jquery', 'Location'], 
		function($, Location) {
        return User;
	 });
}

/**
 * User object
 **/
var User = function User(id, lastname, firstname) { 
  	var self = this;
  	
  	/**
	  * First name of the user
	  * datatype: String
	  * required
	  **/
	  self.firstname = firstname;
	 
  	/**
	  * ID of the user
	  * datatype: Long
	  * required
	  **/
	  self.id = id;
	 
  	/**
	  * Surname of the user
	  * datatype: String
	  * required
	  **/
	  self.lastname = lastname;
	 
  	/**
	  * location of the user
	  * datatype: Location
	  **/
	  self.location = new Location();
	 
  	/**
	  * datatype: String
	  **/
	  self.nickname = null;
	 
  	/**
	  * Current state
	  * datatype: StateEnum
	  **/
	  self.state = null;
	 
  
  	self.constructFromObject = function(data) {
	  	
	  	self.firstname = data.firstname;
	  	
	  	self.id = data.id;
	  	
	  	self.lastname = data.lastname;
	  	
	  	self.location.constructFromObject(data.location);
	  	
	  	self.nickname = data.nickname;
	  	
	  	self.state = data.state;
	  	
	}
  
  
  /**
   * get First name of the user
   * @return {String}
   **/
  self.getFirstname = function() {
    return self.firstname;
  }
  
  /**
   * set First name of the user
   * @param {String} firstname
   **/
  self.setFirstname = function (firstname) {
    self.firstname = firstname;
  }
  
  /**
   * get ID of the user
   * @return {Long}
   **/
  self.getId = function() {
    return self.id;
  }
  
  /**
   * set ID of the user
   * @param {Long} id
   **/
  self.setId = function (id) {
    self.id = id;
  }
  
  /**
   * get Surname of the user
   * @return {String}
   **/
  self.getLastname = function() {
    return self.lastname;
  }
  
  /**
   * set Surname of the user
   * @param {String} lastname
   **/
  self.setLastname = function (lastname) {
    self.lastname = lastname;
  }
  
  /**
   * get location of the user
   * @return {Location}
   **/
  self.getLocation = function() {
    return self.location;
  }
  
  /**
   * set location of the user
   * @param {Location} location
   **/
  self.setLocation = function (location) {
    self.location = location;
  }
  
  /**
   * @return {String}
   **/
  self.getNickname = function() {
    return self.nickname;
  }
  
  /**
   * @param {String} nickname
   **/
  self.setNickname = function (nickname) {
    self.nickname = nickname;
  }
  
  /**
   * get Current state
   * @return {StateEnum}
   **/
  self.getState = function() {
    return self.state;
  }
  
  /**
   * set Current state
   * @param {StateEnum} state
   **/
  self.setState = function (state) {
    self.state = state;
  }
  

  self.toJson = function () {
  	return JSON.stringify(self);
  }
}


