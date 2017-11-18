jQuery(document).ready(function(){

  var mobNav = $("#mobNav");
  var navMenu = $("#navMenu");

  //toggles overall nav
  $(mobNav).click(function() {
    $(navMenu).toggle();
  });
  
});
