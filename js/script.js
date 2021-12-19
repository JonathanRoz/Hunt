$(document).ready(function(){
    $('.venobox').venobox(); 
});

$(".service-slider").slick({
    vertical:true,
    slidesToShow:3,
    prevArrow:'<i class="fas fa-chevron-up prev"></i>',
    nextArrow:'<i class="fas fa-chevron-down next"></i>',
    centerMode:true,
    centerPadding:'0',

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            vertical:false,
            prevArrow:'<i class="fas fa-chevron-left pr"></i>',
            nextArrow:'<i class="fas fa-chevron-right ne"></i>',
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            vertical:false,
            prevArrow:'<i class="fas fa-chevron-left pr"></i>',
            nextArrow:'<i class="fas fa-chevron-right ne"></i>',
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
            prevArrow:'<i class="fas fa-chevron-left pre"></i> ',
            nextArrow:'<i class="fas fa-chevron-right nex"></i> ',
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(".sliderre").slick({
    slidesToShow:5,
    slidesToScroll:1,
    arrows:false,
    centerMode:true,
    centerPadding:'0',
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:false,
          centerMode:false,
      
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
})

$(window).scroll(function(){
    console.log($(window).scrollTop())

    if($(window).scrollTop() > 300){
        $(".menu").addClass("nas")
    }else{
        $(".menu").removeClass("nas")
    }

    if($(window).scrollTop() > 600){
        $(".tops").fadeIn()
    }else{
        $(".tops").fadeOut()
    }
})

$(".tops").click(function(){
    $("html,body").animate({
        scrollTop: 0
    },1000)
})