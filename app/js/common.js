/** Menu **/
 $(function() {
      var pull    = $('#pull');
      menu        = $('nav ul');
      menuHeight  = menu.height();
    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
    $(window).resize(function(){
          var w = $(window).width();
          if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
          }
      });
  });

/** Menu icon rotate **/
$('document').ready(function() {
  $('#pull').click(function() {
    if ($(this).hasClass('click1')) {
      $('#pull img').css("transform", "rotate(180deg)");
      $('#pull img').css("transition", "1s all");
    } else {
      $('#pull img').css("transform", "rotate(360deg)");
      $('#pull img').css("transition", "1s all");
    }
    
    $(this).toggleClass('click1');
    return false;
  });
})

/** About icon rotate **/
$('document').ready(function() {
  $('.about-img').mouseover(function() {
      $(this).css("transform", "rotate(41deg)");
      $(this).css("transition", "1s all");
  });
  $('#about img').mouseout(function() {
      $(this).css("transform", "rotate(0deg)");
      $(this).css("transition", "1s all");
  });
})

/** Pop Up **/
$(document).ready(function() {
  $('.click-cart').click(function() {
    $(".thank-you").css("display", "block"); 
    $(".thank-you").css("transition", "1s all");
      $(".thank-you_bg").css("display", "block");  
  });
});


$(document).ready(function() {
  $('.close').click(function() {
    $(".thank-you").hide(); 
      $(".thank-you_bg").hide();  
  });
});

$(document).ready(function() {
  $('.thank-you_bg').click(function() {
    $(".thank-you").hide(); 
      $(".thank-you_bg").hide();  
  });
});

/** Scrool **/
$(document).ready(function() {
  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 1000, 'swing', function () {
 window.location.hash = target;
 });
 });
});




