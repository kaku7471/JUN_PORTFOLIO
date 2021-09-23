$(document).ready(function(){
    $('.chart').easyPieChart({
    easing: 'easeOutBounce',
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }
  });

  $('.dw_arrow').click(function(){

    var offset = $('h2.main_h2').offset();

    $('html').animate({scrollTop : 1070}, 400);

  });

  $('.mc_arrow').click(function(){

    var offset = $('h2.myc_h2').offset();

    $('html').animate({scrollTop : 2310}, 400);

  });

  $('.up').click(function(){

    var offset = $('body').offset();

    $('html').animate({scrollTop : 0}, 400);

  });

  $('.nav_About').click(function(){

    var offset = $('h2.main_h2').offset();

    $('html').animate({scrollTop : 1070}, 400);

  });

  $('.nav_Content').click(function(){

    var offset = $('h2.myc_h2').offset();

    $('html').animate({scrollTop : 2310}, 400);

  });

  $('.nav_Contact').click(function(){

    var offset = $('#footer').offset();

    $('html').animate({scrollTop : 5310}, 400);

  });

  $(".c1").click(function(){ 
    $("#popup1").fadeIn(); 
  }); 

  $(".dark").click(function(){ 
    $("#popup1").fadeOut(); 
  });

  $(".c2").click(function(){ 
    $("#popup2").fadeIn(); 
  }); 

  $(".dark").click(function(){ 
    $("#popup2").fadeOut(); 
  });



});