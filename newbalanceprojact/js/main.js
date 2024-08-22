$(document).ready(function () {







    const mv = new Swiper(".mv", {

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: "#main_visual .swiper-pagination",
            type: "fraction", //버튼 종류 설정 'bullets'
            clickable: true, //버튼 클릭 여부
        },
        navigation:
        {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },

    });



    //depth2
    $(".depth2").hide();
    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
    });


    const best = new Swiper(".best", {

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        /* pagination: { */
        /*  el: ".swiper-pagination", */
        /* type: "fraction", */ //버튼 종류 설정 'bullets'
        /*  clickable: true, */ //버튼 클릭 여부
        /*    }, */
        navigation:
        {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },

    });



    const event_list = new Swiper(".event_list", {

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 3.5,
        pagination: {
            el: "#event .swiper-pagination",
            type: "fraction", //버튼 종류 설정 'bullets'
            clickable: true, //버튼 클릭 여부
        },
        navigation:
        {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },

    });

});
