(function () {

    'use strict';

    angular.module('app.home')
        .directive('tmplHome', HomeDirective)
        .controller('HomeController', HomeController);


    // ----- directiveFunction -----
    HomeDirective.$inject = [];

    /* @ngInject */
    function HomeDirective() {

        var directive = {
            restrict: 'E',
            templateUrl: 'modules/home/home.html',
            scope: {
            },
            controller: 'HomeController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    HomeController.$inject = ['$scope', 'logger', 'HomeService', '_'];

    /* @ngInject */
    function HomeController($scope, logger, HomeService, _) {

        activate();
        $scope.search = '';
        function activate() {
            logger.log('Activated Home View', $scope.search);
        }

        $scope.$watch('search', function(){
            if($scope.search){
                HomeService.getSearchData($scope.search).then(function(data){
                    $scope.planetList = data.results;
                    var max_value = _.max(data.results, _.property('population'));
                    max_value.isMaxPopulation = true;
                });
            }            
        });
    }

})();
