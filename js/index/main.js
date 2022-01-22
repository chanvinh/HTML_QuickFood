TimeOutMenu1 = setTimeout(function() {
    $(".Menu1").removeClass("focus")
},1000)

TimeOutMenu2 = setTimeout(function() {
    $(".Menu2").removeClass("focus")
},1000)

TimeOutMenu3 = setTimeout(function() {
    $(".Menu3").removeClass("focus")
},1000)

$(".Menu1").hover(function() {
    $(".Menu1").addClass("focus")
    $(".Menu2").removeClass("focus")
    $(".Menu3").removeClass("focus")
    clearTimeout(TimeOutMenu1)
},function() {
    TimeOutMenu1 = setTimeout(function() {
        $(".Menu1").removeClass("focus")
    },1000)
})

$(".Menu2").hover(function() {
    $(".Menu2").addClass("focus")
    $(".Menu1").removeClass("focus")
    $(".Menu3").removeClass("focus")
    clearTimeout(TimeOutMenu2)
},function() {
    TimeOutMenu2 = setTimeout(function() {
        $(".Menu2").removeClass("focus")
    },1000)
})

$(".Menu3").hover(function() {
    $(".Menu3").addClass("focus")
    $(".Menu1").removeClass("focus")
    $(".Menu2").removeClass("focus")
    clearTimeout(TimeOutMenu3)
},function() {
    TimeOutMenu3 = setTimeout(function() {
        $(".Menu3").removeClass("focus")
    },1000)
})

$(window).scroll(function() {
    if($(this).scrollTop() > 0) {
        $(".headerPage").addClass("headerJS")
    }
    if($(this).scrollTop() <= 0) {
        $(".headerPage").removeClass("headerJS")
    }
    if($(this).scrollTop() > 200) {
        $(".Card1").addClass("Card1JS")
        $(".Card2").addClass("Card2JS")
        $(".Card3").addClass("Card3JS")
    }
    if($(this).scrollTop() > 1400) {
        $(".boxCard1").addClass("BoxCard1JS")
        $(".boxCard2").addClass("BoxCard2JS")
        $(".boxCard3").addClass("BoxCard3JS")
        $(".boxCard4").addClass("BoxCard4JS")
    }
})

$('.slidePage .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.slickPage .center').slick({
    centerMode: true,
    slidesToShow: 3,
});

$(".listPage ul li").click(function() {
    $(".listPage ul li").removeClass("active")
    $(this).addClass("active")
})

$(".listPage ul li:nth-child(2)").click(function() {
    $(".pizza").removeClass("active");
    $(".bugerItem").addClass("notActive")
    $(".bugerItem").removeClass("active")
    $(".toastItem").addClass("active")
})

$(".listPage ul li:nth-child(1)").click(function() {
    $(".pizza").removeClass("active");
    $(".toastItem").removeClass("active");
    $(".bugerItem").removeClass("notActive");
    $(".bugerItem").addClass("active")
})

$(".listPage ul li:nth-child(3)").click(function() {
    $(".bugerItem").addClass("notActive");
    $(".bugerItem").removeClass("active")
    $(".toastItem").removeClass("active");
    $(".pizza").addClass("active");
})


