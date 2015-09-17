(function () {
    'use strict';

    angular.module('cupplesApp').controller('HomeCtrl', ['$state', 'thingfinderapi', HomeCtrl]);

    function HomeCtrl($state) {
        var vm = this;
        thingfinderapi.getCraigsList().then(function(data){
            vm.craigslist = data;
        });
    };
})();