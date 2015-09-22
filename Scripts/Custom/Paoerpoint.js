var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

$(window).resize(function () {
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();

});


if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        'Next Slide': function () {
            nextSlide();
        },
        'Previous Slide': function () {
            prevSlide();
        },

        'hello': function () {
            console.log("Hello");
        },
        'fullscreen': function () {
            fullscreen();
        },
        'exit': function () {
            exitFullscreen();
        }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}


var slide = new Slideshow;

console.log(slide);

$(document).ready(function () {
    $('#imageDiv').attr("src", slide.images[slide.frame]);
});

function nextSlide() {
    if (slide.frame === slide.max) {
        slide.frame = 0;
    } else {
        slide.frame++;
    }
    $('#imageDiv').attr("src", slide.images[slide.frame]);
}

function prevSlide() {
    if (slide.frame === 0) {
        slide.frame = slide.max;
    } else {
        slide.frame--;
    }
    $('#imageDiv').attr("src", slide.images[slide.frame]);
}

function fullscreen() {
    $('#imageDiv').attr("width", viewportWidth);
    $('#imageDiv').attr("height", (viewportHeight / 1.15));
    //$('#imageDiv').css("margin-bottom", "15%");
}

function exitFullscreen() {
    $('#imageDiv').attr("width", 600);
    $('#imageDiv').attr("height", 300);
    //$('#imageDiv').css("margin-bottom", "15%");
}