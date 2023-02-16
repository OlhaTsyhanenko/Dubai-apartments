const cards = document.querySelectorAll('.slider .slider-line .rewiews__wrapper');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * cards.length + 'px';
    // cards.forEach(item => {
    //     item.style.width = width + 'px';
    //     item.style.height = 'auto';
    // });

    cards.forEach(item => {
        if (window.innerWidth >= 768) {
            item.style.width = width / 2 - 15 + 'px';
            console.log('width', item.style.width);
            item.style.height = 'auto';
        } else
            item.style.width = width + 'px';
        console.log('width', item.style.width);
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count <0) {
        count = cards.length -1;
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    console.log(count);
    if (count >= cards.length) {
        count = 0;
    }
    if (window.innerWidth >= 768) {
        sliderLine.style.transform = 'translate(-' + (count * width + 30) + 'px)';
        console.log(sliderLine.style.transform);
    } else {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
    // rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + (count * width) + 'px)';
    console.log(sliderLine.style.transform);
}

console.log(window.innerWidth);
