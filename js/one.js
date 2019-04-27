
$(document).ready(function(){

    var btn = $('#button');
    var btn2 = $('#about');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    btn2.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

    $('body').scrollspy({target: ".navbar", offset: 50});


    // Add smooth scrolling on all links inside the navbar
$("#nav a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
  
        window.location.hash = hash;
      });
  
    } // End if
  
  });

  
    $(window).scroll(function(){
      if($ (this).scrollTop() < 100 ){
        //hide navigationbar
        $('nav').removeClass('white-nav-top');
       
      } else {
        //show navigation bar
        $('nav').addClass('white-nav-top');
  
      }
    });

    //smooth scrolling
    // $(function(){
    //   $('a.smooth-scroll').click(function(event){
    //     event.preventDefault();
    //     var section_id = $(this).attr("href");

    //     $("html, body").animate({
    //       scrollTop: $(section_id).offset().top -64
    //     }, 1250, "easeInBack");

    //   });
    // } );

    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } // End if
    });

    $(window).on('load', function(){
      $('#arrow-down i').addClass("animated fadeInDown infinite");
    } )
 

});






