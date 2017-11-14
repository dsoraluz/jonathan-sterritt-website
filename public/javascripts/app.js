$(document).ready(()=>{

  $(".modal").modal();


  $(".button-collapse").sideNav({
      menuWidth: 1000, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    }
  );

  $(".side-nav li>a").click(()=>{
    $('.button-collapse').sideNav('hide');
  });


  $(document).on('scroll', ()=>{

    var navItems = document.querySelectorAll("a.nav-item");
    if ($(this).scrollTop()>=$('#contact').position().top) {

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[5]).addClass("selected");

      $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});
      $("#brutus-icon").attr("src", "images/barking-dog-512.png");
      $("#facebook-icon").attr("src", "images/facebook-512.png");
      $("#instagram-icon").attr("src", "images/instagram-512.png");
      $("#twitter-icon").attr("src", "images/twitter-512.png");
      $("#youtube-icon").attr("src", "images/youtube-512.png");

      $(".button-collapse>i").css("color", "#fff");


    } else if ($(this).scrollTop()>=$('#quote').position().top){

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[4]).addClass("selected");

      $(".navbar li>a").css({"color": "#737373", "border-color": "#737373"});
      $("#brutus-icon").attr("src", "images/barking-dog-512-dark.png");
      $("#facebook-icon").attr("src", "images/facebook-512-dark.png");
      $("#instagram-icon").attr("src", "images/instagram-512-dark.png");
      $("#twitter-icon").attr("src", "images/twitter-512-dark.png");
      $("#youtube-icon").attr("src", "images/youtube-512-dark.png");

      $(".button-collapse>i").css("color", "#737373");


    } else if ($(this).scrollTop()>=$('#production').position().top){

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[4]).addClass("selected");

      $(".navbar li>a").css({"color": "#737373", "border-color": "#737373"});
      $("#brutus-icon").attr("src", "images/barking-dog-512-dark.png");
      $("#facebook-icon").attr("src", "images/facebook-512-dark.png");
      $("#instagram-icon").attr("src", "images/instagram-512-dark.png");
      $("#twitter-icon").attr("src", "images/twitter-512-dark.png");
      $("#youtube-icon").attr("src", "images/youtube-512-dark.png");

      $(".button-collapse>i").css("color", "#737373");


    }else if ($(this).scrollTop()>=$('#host').position().top){

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[3]).addClass("selected");

      $(".navbar li>a").css({"color": "#737373", "border-color": "#737373"});
      $("#brutus-icon").attr("src", "images/barking-dog-512-dark.png");
      $("#facebook-icon").attr("src", "images/facebook-512-dark.png");
      $("#instagram-icon").attr("src", "images/instagram-512-dark.png");
      $("#twitter-icon").attr("src", "images/twitter-512-dark.png");
      $("#youtube-icon").attr("src", "images/youtube-512-dark.png");

      $(".button-collapse>i").css("color", "#737373");


    } else if ($(this).scrollTop()>=$('#actor').position().top){

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[2]).addClass("selected");

      $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});
      $("#brutus-icon").attr("src", "images/barking-dog-512.png");
      $("#facebook-icon").attr("src", "images/facebook-512.png");
      $("#instagram-icon").attr("src", "images/instagram-512.png");
      $("#twitter-icon").attr("src", "images/twitter-512.png");
      $("#youtube-icon").attr("src", "images/youtube-512.png");

      $(".button-collapse>i").css("color", "#fff");


    } else if ($(this).scrollTop()>=$('#social').position().top){
      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[1]).addClass("selected");

      $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});

      $("#brutus-icon").attr("src", "images/barking-dog-512.png");
      $("#facebook-icon").attr("src", "images/facebook-512.png");
      $("#instagram-icon").attr("src", "images/instagram-512.png");
      $("#twitter-icon").attr("src", "images/twitter-512.png");
      $("#youtube-icon").attr("src", "images/youtube-512.png");

      $(".button-collapse>i").css("color", "#fff");


    } else if ($(this).scrollTop()>=$('#bio').position().top){

      $(".navbar li>a").css({"color": "#737373", "border-color": "#737373"});

      $("#brutus-icon").attr("src", "images/barking-dog-512-dark.png");
      $("#facebook-icon").attr("src", "images/facebook-512-dark.png");
      $("#instagram-icon").attr("src", "images/instagram-512-dark.png");
      $("#twitter-icon").attr("src", "images/twitter-512-dark.png");
      $("#youtube-icon").attr("src", "images/youtube-512-dark.png");

      $(".button-collapse>i").css("color", "#737373");

    } else {

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[0]).addClass("selected");

      $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});
      $("#brutus-icon").attr("src", "images/barking-dog-512.png");
      $("#facebook-icon").attr("src", "images/facebook-512.png");
      $("#instagram-icon").attr("src", "images/instagram-512.png");
      $("#twitter-icon").attr("src", "images/twitter-512.png");
      $("#youtube-icon").attr("src", "images/youtube-512.png");

      $(".button-collapse>i").css("color", "#fff");

    }
  });

  $(".resume-icon").click(toggleIcon);

  function toggleIcon(){

    var collapsibleHeaders = document.querySelectorAll(".collapsible-header");

    console.log(this);
    if ($(this).hasClass("active") === false){
      $(this).children("i").text("remove");
    }else {
      $(this).children("i").text("add");
    }
    // collapsibleHeaders.forEach((header)=>{
    //   if ($(header).hasClass("active") === true){
    //     $(header).children("i").text("remove");
    //   } else{
    //     $(header).children("i").text("add");
    //   }
    // });



    return;
  }

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    });
  });

  $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });

});
