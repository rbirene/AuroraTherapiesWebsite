jQuery(document).ready(function(){

  var mobNav = $("#mobNav");
  var navMenu = $("#navMenu");

  //toggles overall nav upon clicking
  $(mobNav).click(function() {
    $(navMenu).toggle();
  });

});
