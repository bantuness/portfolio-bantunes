const btnLeftp = window.document.querySelector('.button-arrow-projeto.-left');
const btnRightp = window.document.querySelector('.button-arrow-projeto.-right');
const elementsp = window.document.querySelector('.elementsp-projeto');

let pixelsp = 0;

btnLeftp.addEventListener('click', function() {
    pixelsp = pixelsp - 50;
   elementsp.style = `transform: translateX(${pixelsp}px)`;
});

btnRightp.addEventListener('click', function() {
    pixelsp = pixelsp + 50;
   elementsp.style = `transform: translateX(${pixelsp}px)`;
});
