$(function () {

    //right menu on main page
    const hamburger = document.querySelector('.header__btn'),
          menu = document.querySelector('.rightside-menu'),
          closeElem = document.querySelector('.rightside-menu__close'),
          overlayClose = document.querySelector('.rightside-menu__overlay');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    overlayClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    //slider on main page
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });

    //slider on contact page
    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
    });

    //slider on blog page 
    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="/images/arrow-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="/images/arrow-slide-right.svg" alt="arrow right"></button>',
    });

    //gallery switching mixitup
    const containerEl = document.querySelector('.gallery__inner');

    if (containerEl) {
        const mixer = mixitup(containerEl, {
            load: {
                filter: '.living'
            }
        });
    }

    //ratings in inspiration block on about page
    const counters = document.querySelectorAll('.inspiration__num'),
      lines = document.querySelectorAll('.inspiration__line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    //adaptation menu
    $('.header__btn-menu').on('click', function() {
        $('.menu').toggleClass('menu--open');
    });

})