document.addEventListener('DOMContentLoaded', () => {
    const btnLeft = document.querySelector('.button-arrow.-left');
    const btnRight = document.querySelector('.button-arrow.-right');
    const elements = document.querySelector('.elementsp');
    const itemWidth = document.querySelector('.node-card').offsetWidth + 10; // Inclui margem
    const totalItems = document.querySelectorAll('.node-card').length;
    const visibleItems = Math.floor(document.querySelector('.itens').offsetWidth / itemWidth);
    let currentPosition = 0;

    const updatePosition = () => {
        elements.style.transform = `translateX(-${itemWidth * currentPosition}px)`;
    };

    btnLeft.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updatePosition();
        }
    });

    btnRight.addEventListener('click', () => {
        if (currentPosition < totalItems - visibleItems) {
            currentPosition++;
            updatePosition();
        }
    });

    // Adiciona um evento para atualizar o itemWidth e o número de itens visíveis ao redimensionar a tela
    window.addEventListener('resize', () => {
        const itemWidthNew = document.querySelector('.node-card').offsetWidth + 10;
        const visibleItemsNew = Math.floor(document.querySelector('.itens').offsetWidth / itemWidthNew);
        const newPosition = Math.min(currentPosition, totalItems - visibleItemsNew);

        currentPosition = newPosition;
        elements.style.transform = `translateX(-${itemWidthNew * currentPosition}px)`;
    });

    // Carrossel automático a cada 5 segundos
    setInterval(() => {
        if (currentPosition < totalItems - visibleItems) {
            currentPosition++;
        } else {
            currentPosition = 0;
        }
        updatePosition();
    }, 5000);
});