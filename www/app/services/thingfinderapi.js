(function() {
    'use strict';

    angular.module('cupplesApp').factory('thingFinderApi', ['$http', '$q', '$ionicLoading', 'CacheFactory', thingFinderApi]);

    function thingFinderApi($http, $q, $ionicLoading, CacheFactory) {


        self.craigsDataCache = CacheFactory.get("finderCache");

        function setCraigsListId(craigsListId){
            self.staticCache.put("currentCraigsListId", craigsListId);
        }

        function getCraigsListId(){
            var id = self.staticCache.get("currentCraigsListId");
            console.log("in get craigslistid", id);
            return id;
        }

        function getCraigsList() {
            var deferred = $q.defer(),
                cacheKey = "craigslist",
                craigsListData = self.craigsDataCache.get(cacheKey);

            if (craigsListData) {
                console.log("Found data inside cache", craigsListData);
                deferred.resolve(craigsListData);
            } else {
                $http.get('http://craigslist.org/search/see/hhh?format=rss&query=(ballard | fremont | wallingford |phinney |greenwood| nw | 98107 | 98117 | 98103 |98113|98109 ) -"capitol hill" -"central district" -"no pets" - "no cats" -"no dogs"&max_price=1700&excats=2-16-1-20-1-1-17-41-2&sort=date&minSqft=600')
                    .success(function(data) {
                        console.log("Received data via HTTP");
                        self.craigsListData.put(cacheKey, data);
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                    });
            }
            return deferred.promise;
        }
        
    };
})();