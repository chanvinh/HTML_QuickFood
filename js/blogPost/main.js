ipadTall = window.innerWidth >= 1024 && window.innerWidth <=1259
Mobile = window.innerWidth <= 4801
horizontalMobile = window.innerWidth > 480 && window.innerWidth <= 767
ipad = window.innerWidth >= 768 && window.innerWidth <= 1024
PC = window.innerWidth > 1260

if(PC) {
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
    })
}

if(Mobile || ipad ||  horizontalMobile || ipadTall) {
    $(".navIcon").click(function() {
        $(this).toggleClass("toggleIcon")
        $(".listMenu").toggleClass("activeNavMobile")
    })
    
    $(".listMenu ul li").click(function() {
        if($(this).parent().hasClass("activeListMenu")) {
            $($(this)).parent().removeClass("activeListMenu").find(".dropdownMenuChild").slideUp(400)
        }
        else {
            $(this).parent().addClass('activeListMenu').find('.dropdownMenuChild').slideDown(400);
            $(this).parent().siblings().removeClass('activeListMenu').find('.dropdownMenuChild').slideUp(400);
        }
    })
}

const inputText = document.querySelector(".searchItem form input");
$(".searchItem form input").focusin(function() {
    $(".searchItem form label").addClass("focusSearch")
})

$(".searchItem form input").focusout(function() {
    if(inputText.value.length > 0) {
        $(".searchItem form label").addClass("focusSearch")
        return;
    }
    $(".searchItem form label").removeClass("focusSearch")
})

$('#form_contact').HTValidate({
    rules: {
        fullname: { required: 'Thông tin bắt buộc' },
        phone: { required: 'Thông tin bắt buộc', number: 'Vui lòng nhập số' },
        email: { required: 'Thông tin bắt buộc', email: 'Email không hợp lệ' }
    },
    setTemplate: {
        notify: 'Bạn đã gửi thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất!',
        modal: 'notify_contact',
    }
});
