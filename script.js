var carouselElement = document.getElementById('myCalousel');
var listElement = carouselElement.querySelector('.carouselCard');
var btnPrev = carouselElement.querySelector('.left');
var btnNext = carouselElement.querySelector('.right');
var shiftIndex = 0;

btnNext.addEventListener('click', function() {
    shiftIndex--;
    listElement.style.left = shiftIndex * 25 + '%';
});