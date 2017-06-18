(function () {

    'use strict';

    angular.module('app.home')
        .factory('HomeService', HomeService);


    /* @ngInject */
    HomeService.$inject = ['$q', '$http', 'exception', 'toastr', 'serviceApi'];

    /* Service Function */
    function HomeService($q, $http, exception, toastr, serviceApi) {
        var service = {
            getSearchData: getSearchData
        };

        return service;
        
        function getSearchData(search){

            $http.defaults.headers.common["Authorization"] = '';
             
            return $http.get(serviceApi+'/planets/?search=' + search)
                .then(onSuccess, onError);

            function onSuccess(response) {
                return response.data;
            }

            function onError(error) {
                error.message = 'XHR Failed for unable to load.';
                exception.catcher('XHR Failed for unable to load')(error);
                toastr.clear();
                //toastr.error(ERROR_LOAD_DATA, 'Error');
                throw error;
            }
        }
    }


 

})();
