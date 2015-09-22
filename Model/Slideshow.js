var Slideshow = function() {
    this.frame = 0;
    this.images = new Array();
    this.images.push("/Content/Images/image00.png");
    this.images.push("/Content/Images/image01.png");
    this.images.push("/Content/Images/image02.jpg");

    this.max = this.images.length-1;
}   