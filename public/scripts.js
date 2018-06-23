particlesJS.load('particles-js', './particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $(document).ready(function() {
    $(".menu").css("background", "#f6ecdf");
    $("#navBar > li > a").css("color", "#5CDB95");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 40) {
        $(".menu").css("background", "#5CDB95");
        $("#navBar > li > a").css("color", "#f6ecdf");
      } else {
        $(".menu").css("background", "#f6ecdf");
        $("#navBar > li > a").css("color", "#5CDB95");
      }
    });
  });

  jQuery(document).ready(function($){
    $(window).hover(function() {
      $('#root').each(function(){
          $(this).css({
            'margin-bottom': -($('#root').outerHeight()+50) + 'px'
        });
    });
    });
});
