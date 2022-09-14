function initSwiperProduct(container, slidesPerView, spaceBetween, slidesPerColumn, slidesPerColumnFill) {
    var swiper = new Swiper('#' + container + ' ' + '.swiper', {
        slidesPerView: 1,
        spaceBetween: spaceBetween,
        slidesPerColumn: slidesPerColumn,
        grabCursor: true,
        slidesPerColumnFill: slidesPerColumnFill,
        pagination: {
            el: '#' + container + ' ' + '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#' + container + ' ' + '.swiper-button-next',
            prevEl: '#' + container + ' ' + '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: slidesPerView,
            },
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

function swiperCommon() {
    $('.swiper_common').each(function () {
        var container = $(this).attr('id');
        var numberItem = parseInt($(this).attr('data-item'));
        var space = parseInt($(this).attr('data-space'));
        var column = parseInt($(this).attr('data-column'));
        var columnFill = parseInt($(this).attr('data-column-fill'));
        initSwiperProduct(container, numberItem, space, column, columnFill);
    });
}


function openNavigation() {
    //Toggle Navigation
    /*Nav icon mobile*/
    $('#navtop_icon').click(function () {
        $(this).toggleClass('open');
        $('.navtop_collapse').toggleClass('open');
        $('.overlay').toggleClass('open');
        $('html , body').toggleClass('open_menu');
    });

    /* When user clicks outside */
    $(".overlay").click(function () {
        $(this).toggleClass('open');
        $("#navtop_icon").toggleClass("open");
        $(".navtop_collapse").toggleClass("open");
        $('html , body').toggleClass('open_menu');
    });
}

function backToTop() {
    $("a.back_to_top, .back_top_bar").click(function () {
        $("html, body").animate({scrollTop: 0}, "fast");
        return false;
    });
}
//
// function preloader() {
//     var browserWindow = $(window);
//
//     // :: 1.0 Preloader Active Code
//     browserWindow.on('load', function () {
//         $('.preloader').fadeOut('slow', function () {
//             $(this).remove();
//         });
//     });
// }



$(document).ready(function () {
    AOS.init();
    openNavigation();
    swiperCommon();
    // preloader();
    backToTop();
    // $(window).scroll(function(){
    //     var sticky = $('#header'),
    //         scroll = $(window).scrollTop();
    //
    //     if (scroll >= 100) sticky.addClass('fixed');
    //     else sticky.removeClass('fixed');
    // });
})
