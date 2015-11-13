var professorPortal = angular.module('professorPortal', ['ui.router']);
var konamiCode = "";


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
        })
        .state('finance',{
            url:'/Finance',
            templateUrl: "ProfessorPortal/Partials/_Finance.html",
            controller: "FinanceController"
        });

        $urlRouterProvider.otherwise('/');
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

        var audio = new Audio('ProfessorPortal/Content/Music/explosion.mp3');
        audio.play();
        setTimeout(function(){$('#explosionImg').removeAttr("src");$('#explosionImg').css('visibility', 'hidden');explosion=false;}, 2550);
    }
    });


function PaoerCtrl($scope) {
    console.log("TEST");
    }

professorPortal.controller('PaoerPointController', function($scope){
    console.log("Made it!");
    $('#imageDiv').attr("src", slide.images[slide.frame]);
});

professorPortal.controller('HomeController', function($scope){
    console.log("Home");
//     $.ajax({
//         url: "test.html",
//         context: document.body
//     }).done(function(result) {
//         console.log(result);
// });
    $scope.message = 'Something Musical';
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

professorPortal.controller('FinanceController', function($scope){
  console.log("got to finance");
  
  $scope.response = {text: ['hello', 'world']};

})
