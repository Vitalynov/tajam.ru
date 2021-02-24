window.addEventListener('DOMContentLoaded', () => {
    'use strict';


});



/*Header*/
// $(function () {

// });

// const content = document.querySelector('.header'),
//     contentClon = document.querySelector('.header-clon');

// //contentClon.classList.add('fadeInUpHeader');
// contentClon.classList.remove('fadeInDown', 'fadeInUpHeader');

// function scrollActiv() {
//     let contentOfsetTop = content.offsetTop;
//     if (window.scrollY >= contentOfsetTop + 150) {
//         contentClon.classList.add('fadeInDown');
//         contentClon.classList.remove('fadeInUpHeader');
//     } else {
//         contentClon.classList.remove('fadeInDown');
//         contentClon.classList.add('fadeInUpHeader');

//     }

// }
//window.addEventListener('scroll', scrollActiv);

// Медленный скроулинг
const scrolling = () => {
    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};
scrolling();

// const ShowHideHeader = ()=> {
//     const header = document.querySelector('header');
// };





//Окрашивание ссылок Link выбранного раздела
const lineActive = () => {
    let header = document.querySelector('.header-nav'),
        active = document.querySelectorAll('.header-nav__linck');

    function hideActive() {
        active.forEach(item => {
            item.classList.remove('activeNav');
        });
    }

    function showActive(i = 0) {
        active[i].classList.add('activeNav');
    }
    //headers.forEach(header => {
    header.addEventListener('click', (e) => {

        const target = e.target;

        if (target && (target.classList.contains('header-nav__linck'))) {
            console.log(target);

            active.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideActive();
                    showActive(i);
                }
            });
        }
    });
    //});
};
lineActive();


//contentClon = document.querySelector('.header-clon');

//contentClon.classList.add('fadeInUpHeader');
//contentClon.classList.remove('fadeInDown', 'fadeInUpHeader');
const content = document.querySelector('.header');
content.classList.remove('fadeInUpHeader','header-clon', 'fadeInDown');
const scrollActiv = () => {


    let contentOfsetTop = content.offsetTop;
    if (window.scrollY >= contentOfsetTop + 80) {
        content.classList.add('header-clon', 'fadeInDown');
        content.classList.remove('fadeInUpHeader');
    } else {
        content.classList.remove('header-clon', 'fadeInDown');
    }

};
window.addEventListener('scroll', scrollActiv);
/*Main block*/
function ibg() {

    let ibg = document.querySelectorAll(".ibg");

    ibg.forEach((item, i) => {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    });
}

ibg();

const showMoreWorks = (trigger, works) => {
    const carts = document.querySelectorAll(works),
        btn = document.querySelector(trigger);

    carts.forEach(cart => {
        cart.classList.add('fadeInUp')
    });

    btn.addEventListener('click', () => {
        carts.forEach(cart => {
            cart.classList.remove('works-box__none');
        });
        btn.remove();
    });

};
showMoreWorks('.js-works-btn', '.js-works');

$(document).ready(function () {
    $('.baner-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'

        // dots: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });
});
/*Footer*/
