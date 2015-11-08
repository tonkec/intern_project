$(document).ready(function(){
  $(".sidebar-open").click(function(){
   openNav();
  });

  $(".close, .sidebar-item").click(function(){
   closeNav();
  })

  function openNav() {
     $(".sidebar-con").animate({
      right: 0
    }, 500, function(){
    });
  }

  function closeNav() {
     $(".sidebar-con").animate({
      right: "-999px"
    }, 500, function(){
    });
  }

  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});