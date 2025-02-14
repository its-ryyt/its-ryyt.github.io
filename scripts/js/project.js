var slideIndex = 1;
var i;
let tempCounterClass = '';

//OnClick - About 1 Project Image
$(document).on("click", "#aboutProjectImage1", function () {
    tempCounterClass = "proj-counter";
    slideIndex = 1;
    projplusSlides(0, tempCounterClass);
    projShowSlides(slideIndex,tempCounterClass);
    $('#aboutProjectModal1').modal('show');
});

//OnClick - About 2 Project Image
$(document).on("click", "#aboutProjectImage2", function () {
    tempCounterClass = "proj-counter2";
    slideIndex = 1;
    projplusSlides(0, tempCounterClass);
    projShowSlides(slideIndex,tempCounterClass);
    $('#aboutProjectModal2').modal('show');
});

//OnClick - About 3 Project Image
$(document).on("click", "#aboutProjectImage3", function () {
    tempCounterClass = "proj-counter3";
    slideIndex = 1;
    projplusSlides(0, tempCounterClass);
    projShowSlides(slideIndex,tempCounterClass);
    $('#aboutProjectModal3').modal('show');
});

//OnClick - About 4 Project Image
$(document).on("click", "#aboutProjectImage4", function () {
    tempCounterClass = "proj-counter4";
    slideIndex = 1;
    projplusSlides(0, tempCounterClass);
    projShowSlides(slideIndex,tempCounterClass);
    $('#aboutProjectModal4').modal('show');
});

//OnClick - About 5 Project Image
$(document).on("click", "#aboutProjectImage5", function () {
    tempCounterClass = "proj-counter5";
    slideIndex = 1;
    projplusSlides(0, tempCounterClass);
    projShowSlides(slideIndex,tempCounterClass);
    $('#aboutProjectModal5').modal('show');
});

//OnClick - About 6 Project Image
$(document).on("click", "#aboutProjectImage6", function () {
    tempCounterClass = "proj-counter6";
    slideIndex = 1;
    projplusSlides(0, tempCounterClass);
    projShowSlides(slideIndex,tempCounterClass);
    $('#aboutProjectModal6').modal('show');
});

function projplusSlides(n, $param) {
    projShowSlides(slideIndex += n,$param);
}

function projShowSlides(n, $param) {
    var nparam = $param === '' || $param === null ? tempCounterClass : $param;

    var slides = document.getElementsByClassName(nparam);
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}