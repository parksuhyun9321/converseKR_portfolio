const txtWarpper = $("#headerSlide .txtWarp");

let currentIndex = 0;

setInterval(function(){
    txtWarpper.animate({left: "-100%"},
    function(){
        $(".txtSlide:first-child").appendTo(txtWarpper);
        txtWarpper.css("left","");
    });
}, 3000);

//  #headerSlide (오픈소스)

$(window).on("scroll",function(){
    if ($("#header").scrollTop() < $(window).scrollTop()){
        $("#header").addClass("fix");
        $("#headerSlide").hide();
    } else {
        $("#header").removeClass("fix");
        $("#headerSlide").show();
    }
});

$("#gnb .gnbList > li .depth01").on("click",function(){
    $(this).next(".depth02").stop().toggleClass("active");
    $(this).parents().siblings().find(".depth02").stop().removeClass("active");
    return false;
});

$("#gnb .btnClose").on("click",function(){
    $(".depth02").removeClass("active");
});

$("#header .gnbBtn").on("click",function(){
    $(this).toggleClass("on");
    $("#gnb").toggleClass("active");
    $(".depth02").removeClass("active");
});

$(".util .utilMenu li:last-child a").on("click",function(){
    $(".searchBox .container").toggleClass("active");
    $("body").toggleClass("searchHidden");
    return false;
});

// #header

$("#section04 .btnMore").on("click",function(){
    $(".communityList li").show();
    $("#section04 .btnMore").hide();
});

// #section04 

$(".footerList li:last-child h3").on("click",function(){
    $(this).next(".footerDepth").stop().slideToggle();
});

// #footer



let ratio = window.devicePixelRatio;
console.log(ratio);
if(ratio >= 2 && $(window).width()+17 <= 1500) {
    $("#sideBar").hide();
} else {
    $("#sideBar").show();
};

// #sideBar

$(".btnWish").on("click",function(){
    $(this).toggleClass("on");
    return false
});
// .btnWith


