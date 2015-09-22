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
//     }1
// );

professorPortal.config(function($stateProvider, $urlRouterProvider) {
    

    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:"ProfessorPortal/Home.html",
            controller: 'HomeController'
        })
        .state('mcdowell', {
            url:'/Mcdowell',
            templateUrl: "ProfessorPortal/Partials/_Mcdowell.html",
            controller: 'McdowellController'
        })
        .state('pao', {
            url:'/Pao',
            templateUrl: "ProfessorPortal/PaoerPoint.html",
            controller: 'PaoerPointController'
        });
<<<<<<< HEAD
        $urlRouterProvider.otherwise('/');
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
=======
        $urlRouterProvider.otherwise('/home');
>>>>>>> origin/master
    });

function PaoerCtrl($scope) {
    console.log("TEST");
    }

professorPortal.controller('PaoerPointController', function($scope){
    console.log("Made it!");
});

professorPortal.controller('HomeController', function($scope){
    console.log("Home");
    $.ajax({
        url: "test.html",
        context: document.body
    }).done(function(result) {
        console.log(result);
});
    $scope.message = 'Everyone come and see how good I look!';
});

professorPortal.controller('McdowellController', function($scope){
    console.log("Mcdowell");
    startTime();

    function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if(h > 12)
    {
        h = h-12;
    }
    if(h == 0){
        h = 12;
    }
   
    document.getElementById('clock').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}
});


