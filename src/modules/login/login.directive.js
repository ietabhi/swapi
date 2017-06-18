(function () {

    'use strict';

    angular.module('app.login')
        .directive('tmplLogin', LoginDirective)
        .controller('LoginController', LoginController);


    // ----- directiveFunction -----
    LoginDirective.$inject = [];

    /* @ngInject */
    function LoginDirective() {

        var directive = {
            restrict: 'E',
            templateUrl: 'modules/login/login.html',
            scope: {
            },
            controller: 'LoginController',
            controllerAs: 'vm'
        };

        return directive;
    }

    /* @ngInject */
    LoginController.$inject = ['$scope', '$location', 'logger', 'LoginService'];

    // ----- ControllerFunction -----
    function LoginController($scope, $location, logger, LoginService) {

        activate();       
        
        function activate() {
            logger.log('Activated Login View');

            // reset login status
            LoginService.ClearCredentials();

            $scope.login = function () {
                $scope.dataLoading = true;
                LoginService.getPeopleList($scope.username).then(function(data){
                    console.log(data.results);
                    angular.forEach(data.results, function(value, key) {
                        console.log('key', key, 'value', value);
                        if (value.name === $scope.username && value.birth_year === $scope.password) {
                            $scope.dataLoading = false;
                            LoginService.SetCredentials($scope.username, $scope.password);
                            $location.path('/home');
                        }
                    });
                });        
            }
        }
    }
})();
