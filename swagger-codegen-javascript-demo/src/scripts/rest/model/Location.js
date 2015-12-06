


//export module
if ( typeof define === "function" && define.amd ) {     
	define('Location', ['jquery'], 
		function($) {
        return Location;
	 });
}


var Location = function Location() { 
  	var self = this;
  	
  	/**
	  * datatype: String
	  **/
	  self.city = null;
	 
  	/**
	  * datatype: String
	  **/
	  self.country = null;
	 
  	/**
	  * demo for java.math.BigDecimal
	  * datatype: Double
	  **/
	  self.latitude = null;
	 
  	/**
	  * demo for java.lang.Double
	  * datatype: Double
	  **/
	  self.longitude = null;
	 
  	/**
	  * datatype: String
	  **/
	  self.street = null;
	 
  	/**
	  * datatype: String
	  **/
	  self.zip = null;
	 
  
  	self.constructFromObject = function(data) {
	  	
	  	self.city = data.city;
	  	
	  	self.country = data.country;
	  	
	  	self.latitude = data.latitude;
	  	
	  	self.longitude = data.longitude;
	  	
	  	self.street = data.street;
	  	
	  	self.zip = data.zip;
	  	
	}
  
  
  /**
   * @return {String}
   **/
  self.getCity = function() {
    return self.city;
  }
  
  /**
   * @param {String} city
   **/
  self.setCity = function (city) {
    self.city = city;
  }
  
  /**
   * @return {String}
   **/
  self.getCountry = function() {
    return self.country;
  }
  
  /**
   * @param {String} country
   **/
  self.setCountry = function (country) {
    self.country = country;
  }
  
  /**
   * get demo for java.math.BigDecimal
   * @return {Double}
   **/
  self.getLatitude = function() {
    return self.latitude;
  }
  
  /**
   * set demo for java.math.BigDecimal
   * @param {Double} latitude
   **/
  self.setLatitude = function (latitude) {
    self.latitude = latitude;
  }
  
  /**
   * get demo for java.lang.Double
   * @return {Double}
   **/
  self.getLongitude = function() {
    return self.longitude;
  }
  
  /**
   * set demo for java.lang.Double
   * @param {Double} longitude
   **/
  self.setLongitude = function (longitude) {
    self.longitude = longitude;
  }
  
  /**
   * @return {String}
   **/
  self.getStreet = function() {
    return self.street;
  }
  
  /**
   * @param {String} street
   **/
  self.setStreet = function (street) {
    self.street = street;
  }
  
  /**
   * @return {String}
   **/
  self.getZip = function() {
    return self.zip;
  }
  
  /**
   * @param {String} zip
   **/
  self.setZip = function (zip) {
    self.zip = zip;
  }
  

  self.toJson = function () {
  	return JSON.stringify(self);
  }
}


