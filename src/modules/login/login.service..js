(function () {

    'use strict';

    angular.module('app.login')
        .factory('LoginService', LoginService);


    /* @ngInject */
    LoginService.$inject = ['$q', '$http', '$rootScope', '$cookieStore', 'exception', 'toastr', 'serviceApi', 'Base64'];

    /* Service Function */
    function LoginService($q, $http, $rootScope, $cookieStore, exception, toastr, serviceApi, Base64) {
        var service = {
            getPeopleList: getPeopleList,
            SetCredentials: SetCredentials,
            ClearCredentials: ClearCredentials
        };

        return service;
        
        function getPeopleList(search){  
        // Set the Content-Type 
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        // Delete the Requested With Header
        delete $http.defaults.headers.common['X-Requested-With'];
            return $http.get(serviceApi + '/people/?search=' + search)
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
        function SetCredentials(username, password) {
            var authdata = Base64.encode(username + ':' + password);
 
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };
 
        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

    }
})();
