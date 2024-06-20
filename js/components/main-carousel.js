
const btnLeft = window.document.querySelector('.button-arrow.-left');
const btnRight = window.document.querySelector('.button-arrow.-right');
const elements = window.document.querySelector('.elements');

let pixels = 0;

btnLeft.addEventListener('click', function() {
    pixels = pixels - 50;
   elements.style = `transform: translateX(${pixels}px)`;
});

btnRight.addEventListener('click', function() {
    pixels = pixels + 50;
   elements.style = `transform: translateX(${pixels}px)`;
});