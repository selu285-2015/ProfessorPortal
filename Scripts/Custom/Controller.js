var mainApp = angular.module("mainApp", []);


mainApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: "/Views/Index.html",
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            
            templateUrl: "/Views/Partials/_PaoerPoint.html",
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});



// create the controller and inject Angular's $scope
mainApp.controller('mainController', function ($scope) {
    console.log("home")
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

mainApp.controller('aboutController', function ($scope) {
    console.log("paoerpoint")
})