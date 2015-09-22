var professorPortal = angular.module('professorPortal', ['ui.router']);

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

professorPortal.config(function($stateProvider, $urlRouterProvider) {
    

    $stateProvider
        .state('poaerpoint', {
            url:'/PaoerPoint',
            tamplateUrl: "ProfessorPortal/PaoerPoint.html",
            controller: 'PaoerPointController'
        })
        .state('mcdowell', {
            url:'/Mcdowell',
            templateUrl: "ProfessorPortal/PaoerPoint.html",
            controller: 'McdowellController'
        })
        .state('home',{
            url:'/',
            templateUrl:"ProfessorPortal/Index.html",
            controller: 'HomeController'
        });
        $urlRouterProvider.otherwise('/home');
        // $routeProvider.
        //     when('/PaoerPoint', {
        //         templateUrl: 'Partials/_PaoerPoint.html',
        //         controller  : 'PaoerPointController'
        //     }).
        //     when('/Test', {
        //         templateUrl: "../Views/Partials/_Temp.html"
        //     }).
        //     otherwise({
        //         redirect:'/'
        //     });
        // // use the HTML5 History API
        // //$locationProvider.html5Mode(true);
        // console.log($routeProvider);
    });

function PaoerCtrl($scope) {
    console.log("TEST");
    }

professorPortal.controller('PaoerPointController', function($scope){
    console.log("Made it!");
});

professorPortal.controller('HomeController', function($scope){
    console.log("Home");
});

professorPortal.controller('McdowellController', function($scope){
    console.log("Mcdowell");
});


