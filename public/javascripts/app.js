$(document).ready(()=>{

  $(".nav-item").click((e)=>{
    var navItems = document.querySelectorAll("a.nav-item");
    console.log(navItems);
    navItems.forEach((item)=>{
      item.classList.remove("selected");
    });

    $(e.target).addClass("selected");
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

    if ($(this).scrollTop()>=$('#contact').position().top) {
      $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});
      $("#social-media").css("color", "#fff");
    } else if ($(this).scrollTop()>=$('#actor').position().top){
      $(".navbar li>a").css({"color": "#737373", "border-color": "#737373"});
      $("#social-media").css("color", "#737373");
    } else {
      $(".navbar li>a").css({"color": "#fff", "border-color": "#fff"});
      $("#social-media").css("color", "#fff");
    }
  });
});
