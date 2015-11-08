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
});