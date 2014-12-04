'use strict';

/**
 * @ngdoc function
 * @name contactApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the contactApp
 */
angular.module('contactApp')
  .controller('ContactCtrl', function ($scope, $location, ContactService) {
  	$scope.addContact = function(newContact){
  		ContactService.addContact(newContact);
  		$location.path('/');
  	};
  });
