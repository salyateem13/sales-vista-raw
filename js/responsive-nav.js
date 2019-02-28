$(document).ready(function() {     
  
  // attach a handler to an event for the elements        
  if( $(".title").css('background-color') == " transparent") {
    $('#header').addClass('dark-background');
  }
    $("#hamburgerIcon").bind('click', function(e) {
 //dom event fired
        $("#hamburgerIcon").toggleClass('is-active');
        $('.header-responsive').slideToggle();
    });

    $("#submenuToggle").bind('click', function (e) {
       $(".open-submenu").toggleClass("open-submenu-activated");
       $(".dropdown").slideToggle();
    });


    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        mobileFirst: true
        
      });

      
      
   
});

$(window).scroll(function(){

  if($('div').hasClass('hero')){

  
    var sticky = $('.headermb'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 1) sticky.addClass('dark-background');
    else sticky.removeClass('dark-background');

  }


  });

  /*


var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".carousel-item");
  var dots = $(".dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
















 //initial class selector for mobile or desktop nav
    $(window).bind("load", function () {
      console.log($(this).width())
      if ($(this).width() < 800) {
          $('#header').removeClass('headerdt').addClass('headermb')
          
      } else {
          $('#header').removeClass('headermb').addClass('headerdt')
      }
    }).trigger('load');


  // class selector for mobile or desktop nav on resize
  $(window).bind("resize", function () {
    console.log($(this).width())
    if ($(this).width() < 800) {
        $('#header').removeClass('headerdt').addClass('headermb')
        
    } else {
      $('.header-responsive').css("display", "inline-block");
      $('#header').removeClass('headermb').addClass('headerdt')
    }
  }).trigger('resize');



*/