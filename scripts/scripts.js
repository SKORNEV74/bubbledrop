document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
        loop: true,
        autoplay: false,
        interval: 5000,
        refresh: true,
    });
});

function init() {
    let boxButtons = document.getElementById("box-buttons");
    let buttons = boxButtons.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let currentButton = document.getElementsByClassName("active");
            currentButton[0].className = currentButton[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}
function changeImage() {
    let images = document.getElementsByClassName("change");
    for (let i = 0; i < images.length; i++) {
        if (images[i].src.indexOf("very") === -1) {
            images[i].src = images[i].src.replace("/rare","/veryrare");
        } else {
            images[i].src = images[i].src.replace("very","");
        }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let bubs = document.getElementsByTagName("h4");
    let paragraphs = document.getElementsByClassName("lastParagraph");
    let photos = document.getElementsByClassName("photos");
    let leftName = document.getElementsByClassName("leftName");
    let centerName = document.getElementsByClassName("centerName");
    let rightName = document.getElementsByClassName("rightName");
    if (n > bubs.length) {slideIndex = 1}
    if (n < 1) {slideIndex = bubs.length}
    for (let i = 0; i < bubs.length; i++) {
        bubs[i].style.display = "none";
        paragraphs[i].style.display = "none";
        photos[i].style.display = "none";
        leftName[i].style.display = "none";
        centerName[i].style.display = "none";
        rightName[i].style.display = "none";
    }
    bubs[slideIndex-1].style.display = "block";
    paragraphs[slideIndex-1].style.display = "block";
    photos[slideIndex-1].style.display = "block";
    leftName[slideIndex-1].style.display = "block";
    centerName[slideIndex-1].style.display = "block";
    rightName[slideIndex-1].style.display = "block";
}

window.onload = init;