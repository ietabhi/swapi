/* global _ */

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('_', _)
        .constant('serviceApi', 'https://swapi.co/api')
        .constant('theme', 'xebia');
})();
