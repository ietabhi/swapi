/* jshint -W117 */
describe('Login', function() {
    'use strict';

    var controller;

    beforeEach(function() {
        bard.appModule('app.login');
        bard.inject('$rootScope', '$controller');
    });

    beforeEach(function() {
        controller = $controller('LoginController');
        $rootScope.$apply();
    });

    describe('Login controller', function() {
        it('dummy test', function() {
        });
    });
});
