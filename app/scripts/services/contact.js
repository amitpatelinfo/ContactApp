'use strict';

/**
 * @ngdoc function
 * @name contactApp.service:ContactService
 * @description
 * # ContactService
 * Controller of the ContactService
 */
angular.module('contactApp')
  .factory('ContactService', function () {
  	var contacts = [
		{name: 'John Smith' , address: '25 First Street', city: 'Cambridge', phone : '555-122-2323' , email : 'testingapis@hubspot.com', dob : '592425000000'},
		{name: 'Dave Conner' , address: '9th Johnson Street', city: 'Austin', phone : '855-764-2765' , email : 'daveConner@hubspot.com', dob : '389212200000'},
		{name: 'Andrew Finch' , address: 'Regency Park', city: 'Austin', phone : '787-567-4343' , email : 'andrew@hubspot.com', dob : '305836200000'},
		];

	return {
      getContacts: function(){
      	return contacts;
      },
      addContact: function(newContact){
      	contacts.push(newContact);
      	console.log("Contact Added");
      }
    };
  	 
  });