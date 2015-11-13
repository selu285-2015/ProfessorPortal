var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

$(window).resize(function () {
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();

});



var slide = new Slideshow;

console.log(slide);

$(document).ready(function () {
    console.log('hit');
    
});

function nextSlide() {
    console.log(slide);
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