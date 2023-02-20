const img = document.querySelectorAll('.hero__slider .hero__slider-line .hero__slider-img');
const heroSliderLine = document.querySelector('.hero__slider-line');
let heroCount = 0;
let heroWidth;

function init() {
    console.log('resize');
    heroWidth = document.querySelector('.hero__slider').offsetWidth;
    heroSliderLine.style.width = heroWidth * img.length + 'px';
    img.forEach(item => {
        item.style.width = heroWidth + 'px';
        item.style.height = 'auto';
    });

    heroSliderLine.style.transform = 'translate(-' + heroCount * heroWidth + 'px)';
}

window.addEventListener('resize', init);
init();

document.querySelector('.hero__btn-prev').addEventListener('click', function () {
    heroCount--;
    if (heroCount < 0) {
       heroCount = img.length -1;
    }
    heroSliderLine.style.transform = 'translate(-' + heroCount * heroWidth + 'px)';
});

document.querySelector('.hero__btn-next').addEventListener('click', function () {
    heroCount++;
    console.log(heroCount);
    if (heroCount >= img.length) {
        heroCount = 0;
    }
    heroSliderLine.style.transform = 'translate(-' + heroCount * heroWidth + 'px)';
});

