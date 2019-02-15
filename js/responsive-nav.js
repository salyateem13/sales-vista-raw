$(document).ready(function() {              // attach a handler to an event for the elements        
   
    $("#hamburgerIcon").bind('click', function(e) {
 //dom event fired
        $("#hamburgerIcon").toggleClass('is-active');
        $('.header-responsive').slideToggle();
    });

    $("#submenuToggle").bind('click', function (e) {
       $(".open-submenu").toggleClass("open-submenu-activated");
       $(".dropdown").slideToggle();
    });
   
});
  
/*

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