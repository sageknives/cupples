(function() {
    'use strict';

    angular.module('cupplesApp').factory('thingFinderApi', ['$http', '$q', '$ionicLoading', 'CacheFactory', thingFinderApi]);

    function thingFinderApi($http, $q, $ionicLoading, CacheFactory) {


        self.craigsDataCache = CacheFactory.get("finderCache");

        
    };
})();