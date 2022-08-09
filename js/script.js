$(document).ready(function() {

    $('.header__burger').on('click', function() {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });

    $('.order__percent').text($(".order__range").val() + " %");
    $(".order__range").on("input change",function(){
        $(".order__percent").html($(this).val() + " %");
    });
});