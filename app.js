var professorPortal = angular.module('professorPortal', ['ui.router']);
var konamiCode = "";
var User = function(){
    this.name = "";
}

var userIn = new User();

var baseUri = "http://localhost:13238/api";

professorPortal.config(function($stateProvider, $urlRouterProvider) {
    

    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:"ProfessorPortal/Home.html",
            controller: 'HomeController',
            authenticate: false
          })
        .state("login", {
            url: "/login",
            templateUrl: "ProfessorPortal/Partials/_loginModalTemplate.html",
            controller: "LoginController",
            authenticate: false
        })
        .state('mcdowell', {
            url:'/Mcdowell',
            templateUrl: "ProfessorPortal/Partials/_ProfilePage.html",
            controller: 'McdowellController',
            authenticate: false
        })
        .state('pao', {
            url:'/Pao',
            authenticate: false,
            templateUrl: "ProfessorPortal/Partials/_ProfilePage.html",
            controller: 'PaoController'
        });

        $urlRouterProvider.otherwise('/');
    });



professorPortal.run(function ($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        
    console.log($state.current.name)
    console.log(userIn.name)
    if (toState.authenticate && userIn.name == ""){
      // User isn’t authenticated
      $state.transitionTo("login");
      event.preventDefault(); 
    }
  });

});


$(document).keydown(function(e){
 konamiCode = konamiCode.concat(e.keyCode);
 if(konamiCode.indexOf("38384040373937396566") > -1){
    console.log("GOOD");
    konamiCode = "";
 }
 else if(konamiCode.length > 500){
    konamiCode = "";
 }
});

var explosion = false;
$(document).click( function(e) {
    if(!explosion){
        explosion = true;
        $('#explosionImg').css('visibility', 'visible')
        var theImage = new Image();
        var newImg = $('#explosionImg');
        newImg.attr("src", "ProfessorPortal/Content/Images/explosion.gif");
        theImage.src = newImg.attr("src");
        var imgWidth = theImage.width;
        var imgHeight = theImage.height;
        console.log(imgWidth);
        console.log(imgHeight);
        $('#explosionImg').css({position: "absolute",
                                marginLeft:0, marginTop:0,
                                top:(e.pageY-(imgHeight/2)), left:(e.pageX-(imgWidth/2))});
        $('#explosionImg').css( 'pointer-events', 'none' );
        var audio = new Audio('ProfessorPortal/Content/Music/explosion.mp3');
        audio.play();
        setTimeout(function(){$('#explosionImg').removeAttr("src");$('#explosionImg').css('visibility', 'hidden');explosion=false;}, 2550);
    }
    });


function PaoerCtrl($scope) {
    console.log("TEST");
    }

professorPortal.controller('PaoController', function($scope, $state){
    //$scope.isAdmin = $state == userIn.name;
    console.log("Made it!");
    var myclass = getClasses('Pao')
    $scope.classes = [];
    for(var i = 0; i < myclass.length; i++){
        $scope.classes.push(myclass[i])
        //console.log(myclass[i])
    }

    $scope.checkAdmin = function(){
        return $state.isAdmin = $state.current.name.toLowerCase() === userIn.name.toLowerCase();
    }

});

professorPortal.controller('HomeController', function($scope, $state){
    //$scope.isAdmin = $state == userIn.name;
    console.log("Home");
//     $.ajax({
//         url: "test.html",
//         context: document.body
//     }).done(function(result) {
//         console.log(result);
// });
    $scope.message = 'Something Musical';
});

professorPortal.controller('McdowellController', function($scope, $state){
    //$scope.isAdmin = $state == userIn.name;
    console.log("Mcdowell");
    var myclass = getClasses('mcdowell')
    $scope.classes = [];
    for(var i = 0; i < myclass.length; i++){
        $scope.classes.push(myclass[i])
        //console.log(myclass[i])
    }
    $scope.checkAdmin = function(){
        return $state.isAdmin = $state.current.name.toLowerCase() === userIn.name.toLowerCase();
    }
});

professorPortal.controller('FinanceController', function($scope, $state){
  //$scope.isAdmin = $state == userIn.name;
  console.log("got to finance");
  
  $scope.response = {text: ['hello', 'world']};

});


professorPortal.controller('LoginController', function($scope, $state){
  //$scope.isAdmin = $state == userIn.name;
  console.log("got to Login");
});

function checkLogin(user){
    console.log(user)
    userIn.name = user.UserName;
    console.log("logged in")
    console.log(userIn)
}


function getClasses(profName){
    var ret;
    request = $.ajax({
                url: "ProfessorPortal/PHP/getClasses.php",
                type: "get",
                data: {'name':profName},
                async:false
            });
            request.done(function (response, textStatus, jqXHR){
                ret = $.parseJSON(response)
                //console.log(response)
            });
            
            request.fail(function (jqXHR, textStatus, errorThrown){
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown, jqXHR
                );
            });
    return ret;
}