var professorPortal = angular.module('professorPortal', ['ui.router']);
var konamiCode = "";
var User = function(){
    this.name = "";
    this.state = "";
    this.test = ["test"];
}

var userIn = new User();

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
            templateUrl: "ProfessorPortal/Partials/_Mcdowell.html",
            controller: 'McdowellController',
            authenticate: true
        })
        .state('pao', {
            url:'/Pao',
            templateUrl: "ProfessorPortal/PaoerPoint.html",
            controller: 'PaoerPointController',
            authenticate: true
        })
        .state('finance',{
            url:'/Finance',
            templateUrl: "ProfessorPortal/Partials/_Finance.html",
            controller: "FinanceController",
            authenticate: true
        });

        $urlRouterProvider.otherwise('/');
    });



professorPortal.run(function ($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    $state.isAdmin = $state != userIn.state;
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

professorPortal.controller('PaoerPointController', function($scope, $state){
    $scope.isAdmin = $state == userIn.state;
    console.log("Made it!");
    $('#imageDiv').attr("src", slide.images[slide.frame]);
});

professorPortal.controller('HomeController', function($scope, $state){
    $scope.isAdmin = $state == userIn.state;
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
    $scope.isAdmin = $state == userIn.state;
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

professorPortal.controller('FinanceController', function($scope, $state){
  $scope.isAdmin = $state == userIn.state;
  console.log("got to finance");
  
  $scope.response = {text: ['hello', 'world']};

});


professorPortal.controller('LoginController', function($scope, $state){
  $scope.isAdmin = $state == userIn.state;
  console.log("got to Login");
});
