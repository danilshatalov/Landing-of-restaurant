const swiper = new Swiper('.offer-slider', {
    loop: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});


const swiperMenu = new Swiper('.menu-slider', {
    grid: {
        rows: 2,
    },
    slidesPerView: 2,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

let tabs = document.querySelector('.tabs');
let menuSlider = document.querySelectorAll('.menu-slider-block');

tabs.addEventListener('click', function (e) {
    if (e.target.classList.contains('.tabs-item')) {
        this.querySelectorAll('.tabs-item').forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
    }


    menuSlider.forEach(slider => slider.classList.remove('show'));
    let tabIndex = e.target.dataset.tab;
    let thisSwiper = document.querySelector(tabIndex);

    thisSwiper.classList.add('show');




});

window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs() {
    let innerTabs = document.querySelector('.tabs');
    let outerTabs = document.querySelector('.tabs-container');
    if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
        innerTabs.classList.add('overflow');
    } else {
        innerTabs.classList.remove('overflow');
    }
};






