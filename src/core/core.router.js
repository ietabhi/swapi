(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider, $urlRouterProvider) {

       $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/login');

        $stateProvider            
            .state('login', {
                url: '/login',
                template: '<tmpl-login></tmpl-login>'
            })
            .state('home', {
                url: '/home',
                template: '<tmpl-home></tmpl-home>'
            }); 
    }
})();
