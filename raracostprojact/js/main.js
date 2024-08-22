$(document).ready(function () {



    $(".all_wrap").hide();
    $(".btn_sitemap").click(function () {
        $(".all_wrap").fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_wrap").fadeOut();
    });






    //depth2
    $(".depth2,.depth2_bg").hide();

    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".depth2_bg").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".depth2_bg").stop().fadeOut();
    });



    const best_list = new Swiper(".best_list", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 20, //슬라이드 사이 간격
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
            draggable: true,
        },
        breakpoints: {
            500: {    //min-width 640px 이상에서 보이는 개수
                slidesPerView: 1,
                spaceBetween: 20,
            },

            769: {  //1200px 이상에서 보이는 개수
                slidesPerView: 3,
                spaceBetween: 50,
            },

            1201: {  //1200px 이상에서 보이는 개수
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },

    });



    /* 
        $(".tab_btn").click(function () {
            let idx = $(this).index(); //.tab_btn li 클릭한 요소 번호 찾기
            $(this).addClass("on").removeClass("on");
            $(".tab_img").eq(idx).fadeIn().fadeOut();
        });
     */



    //.tab_btn li 1,2,3,4를 클릭했을 때
    //.tab_img li 1,2,3,4를 보여라(형제들은 숨겨라)
    $(".tab_img_list ul:not(:first-child)").hide();
    $(".tab_list1").click(function () {

        $(".tab_img1").fadeIn();
        $(".tab_img2").hide();
        $(".tab_img3").hide();
        $(".tab_img4").hide();
        $(".tab_img5").hide();
        $(".tab_img6").hide();
    });



    $(".tab_list2").click(function () {
        $(".tab_img2").fadeIn();
        $(".tab_img1").hide();
        $(".tab_img3").hide();
        $(".tab_img4").hide();
        $(".tab_img5").hide();
        $(".tab_img6").hide();
    });

    $(".tab_list3").click(function () {
        $(".tab_img3").fadeIn();
        $(".tab_img1").hide();
        $(".tab_img2").hide();
        $(".tab_img4").hide();
        $(".tab_img5").hide();
        $(".tab_img6").hide();
    });

    $(".tab_list4").click(function () {
        $(".tab_img4").fadeIn();
        $(".tab_img1").hide();
        $(".tab_img2").hide();
        $(".tab_img3").hide();
        $(".tab_img5").hide();
        $(".tab_img6").hide();
    });

    $(".tab_list5").click(function () {
        $(".tab_img5").fadeIn();
        $(".tab_img1").hide();
        $(".tab_img2").hide();
        $(".tab_img3").hide();
        $(".tab_img4").hide();
        $(".tab_img6").hide();
    });

    $(".tab_list6").click(function () {
        $(".tab_img6").fadeIn();
        $(".tab_img1").hide();
        $(".tab_img2").hide();
        $(".tab_img3").hide();
        $(".tab_img4").hide();
        $(".tab_img5").hide();
    });








});