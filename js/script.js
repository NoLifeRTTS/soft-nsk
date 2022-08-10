$(document).ready(function() {

    $('.header__burger').on('click', function() {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });

    $('.order__percent').text($(".order__range").val() + " %");
    $(".order__range").on("input change",function(){
        $(".order__percent").html($(this).val() + " %");
    });

    $(".order__scroll").on('click',function(e){
        e.preventDefault();
        let top = $($(this).attr("data-scroll")).offset().top - 65;
        $(".header__burger").removeClass("active");
        $(".header__menu").removeClass('active');
        $("html, body").animate({scrollTop: top}, 500);
    });
});