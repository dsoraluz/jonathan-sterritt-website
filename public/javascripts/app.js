$(document).ready(()=>{


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

  // $(document).on('scroll', ()=>{
  //
  //   if ($(this).scrollTop()>=$('#contact').position().top) {
  //     $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});
  //     $("#social-media").css("color", "#fff");
  //   } else if ($(this).scrollTop()>=$('#actor').position().top){
  //     $(".navbar li>a").css({"color": "#737373", "border-color": "#737373"});
  //     $("#social-media").css("color", "#737373");
  //   } else {
  //     $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});
  //     $("#social-media").css("color", "#fff");
  //   }
  // });

  $(document).on('scroll', ()=>{

    var navItems = document.querySelectorAll("a.nav-item");

    if ($(this).scrollTop()>=$('#contact').position().top) {

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[5]).addClass("selected");

      $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});
      $("#social-media").css("color", "#fff");
    } else if ($(this).scrollTop()>=$('#production').position().top){

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[4]).addClass("selected");
    }else if ($(this).scrollTop()>=$('#actor').position().top){

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[3]).addClass("selected");

      $(".navbar li>a").css({"color": "#737373", "border-color": "#737373"});
      $("#social-media").css("color", "#737373");
    } else if ($(this).scrollTop()>=$('#host').position().top){

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[2]).addClass("selected");
    } else if ($(this).scrollTop()>=$('#events').position().top){

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[1]).addClass("selected");
    } else {

      navItems.forEach((item)=>{
        item.classList.remove("selected");
      });

      $(navItems[0]).addClass("selected");

      $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});
      $("#social-media").css("color", "#fff");
    }
  });

  $(".nav-item").click((e)=>{
    // var navItems = document.querySelectorAll("a.nav-item");
    // console.log(navItems);
    // navItems.forEach((item)=>{
    //   item.classList.remove("selected");
    // });
    //
    // $(e.target).addClass("selected");
  });

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
});
