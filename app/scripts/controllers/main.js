'use strict';

/**
 * @ngdoc function
 * @name contactApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactApp
 */
angular.module('contactApp')
  .controller('MainCtrl', function ($scope, ContactService) {
    $scope.Contacts = ContactService.getContacts();
  });
