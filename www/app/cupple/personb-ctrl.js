(function () {
    'use strict';

    angular.module('cupplesApp').controller('PersonBCtrl', ['$state', PersonBCtrl]);

    function PersonBCtrl($state) {
        var vm = this;
        vm.person ={
            name:"Ashley"
        };
        vm.jams = [
            { title: 'wayward', id: 1 },
            { title: 'umis', id: 2 },
            { title: 'sams sushi', id: 3 },
            { title: 'moshi moshi', id: 4 },
            { title: 'whole foods', id: 5 },
            { title: 'thai thani', id: 6 }
          ];
        vm.selectJam = function(){

        };
    };
})();