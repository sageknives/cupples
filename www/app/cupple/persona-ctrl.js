(function () {
    'use strict';

    angular.module('cupplesApp').controller('PersonACtrl', ['$state', PersonACtrl]);

    function PersonACtrl($state) {
        var vm = this;
        vm.person ={
            name:"Sage"
        };
        vm.jams = [
		    { title: '8 oz', id: 1 },
		    { title: 'umis', id: 2 },
		    { title: 'peoples pub', id: 3 },
		    { title: 'big marios', id: 4 },
		    { title: 'kings', id: 5 },
		    { title: 'thai thani', id: 6 }
		  ];
		vm.selectJam = function(){

		};
        
    };
})();