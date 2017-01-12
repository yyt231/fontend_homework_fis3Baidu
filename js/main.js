/**
 * Created by Tony on 2016/11/23.
 */
$(document).ready(
    function () {
        $("#mr-container").load("recommend.html");
    }
);
$("#my-attention").click(function () {
    $("#mr-container").load("myattention.html");
});
$("#recommend").click(function () {
    $("#mr-container").load("recommend.html");
});
$("#nav").click(function () {
    $("#mr-container").load("nav.html");
});
$("#movie").click(function () {
    $("#mr-container").load("movie.html");
});
$(".more-product").mouseover(function () {
    $(".more-product-info").fadeIn();

});
$(".more-product").mouseleave(function () {
    $(".more-product-info").fadeOut();
});

$("#change-skin").click(function (event) {
    var skin = $(".skin");
    skin.animate(
        {top: '0px'},
        'slow'
    )
    event.stopPropagation();
});

$(document).click(function (event) {
    var skin = $('.skin');
    if (skin.height != 0) {
        skin.animate(
            {top: '-200px'},
            'slow'
        );

    }
    event.stopPropagation();
});
$('#packup').click(function (event) {
    var skin = $('.skin');
    if (skin.height != 0) {
        skin.animate(
            {top: '-200px'},
            'slow'
        );

    }
    event.stopPropagation();
});
//    换肤
$("#colgreen").click(function () {
    $('.container').css('backgroundColor', '#00CC66');
});
$("#colred").click(function () {
    $('.container').css('backgroundColor', '#993333');
});
$("#colyellow").click(function () {
    $('.container').css('backgroundColor', '#CC9966');
});
$("#colblue").click(function () {
    $('.container').css('backgroundColor', '#3399FF');
});
