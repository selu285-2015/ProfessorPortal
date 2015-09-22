var professorPortal = angular.module('professorPortal', ['ngRoute']);

// angular.module('professorPortal', []).config(
//     function ($routeProvider, $locationProvider) {
//         $routeProvider.
//             when('/PaoerPoint', {
//                 templateUrl: '/_PaoerPoint.html',
//                 controller  : 'PaoerPointController'
//             }).
//             when('/Test', {
//                 templateUrl: "../Views/Partials/_Temp.html"
//             }).
//             otherwise({
//                 redirect:'/'
//             });
//         // use the HTML5 History API
//         //$locationProvider.html5Mode(true);
//         console.log($routeProvider);
//     }
// );

professorPortal.config(function($routeProvider) {
        $routeProvider.
            when('/PaoerPoint', {
                templateUrl: 'Partials/_PaoerPoint.html',
                controller  : 'PaoerPointController'
            }).
            when('/Test', {
                templateUrl: "../Views/Partials/_Temp.html"
            }).
            otherwise({
                redirect:'/'
            });
        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
        console.log($routeProvider);
    });

function PaoerCtrl($scope) {
    console.log("TEST");
    }

professorPortal.controller('PaoerPointController', function($scope){
    console.log("Made it!");
})

