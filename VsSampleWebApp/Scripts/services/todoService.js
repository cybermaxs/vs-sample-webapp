/*global angular */

/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular.module('todomvc')
	.service('todoService', function ($http, $q) {
	    'use strict';

	    var STORAGE_ID = 'todos-angularjs';


	    this.get = function () {
	        var deferred = $q.defer();

	        $http.get('/api/todotasks').
	        success(function (data, status, headers, config) {
	            deferred.resolve(data);
	        }).
            error(function (data, status) {
                deferred.reject(data);
            });

	        return deferred.promise;
	    };

	    this.put = function (todos) {
	        $http.put('/api/todotasks', todos);
	    };
	});