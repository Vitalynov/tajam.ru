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