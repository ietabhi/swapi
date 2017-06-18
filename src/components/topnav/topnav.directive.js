(function () {
    'use strict';

    angular
        .module('app.topnav')
        .directive('tmplTopnav', directiveFunction)
        .controller('TopnavController', ControllerFunction);


    /* @ngInject */
    directiveFunction.$inject = [];

    
    // ----- directiveFunction -----
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/topnav/topnav.html',
            scope: {
            },
            controller: 'TopnavController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = [];

    /* @ngInject */
    function ControllerFunction() {
        var vm = this;
        vm.isCollapsed = true;
    }

})();
