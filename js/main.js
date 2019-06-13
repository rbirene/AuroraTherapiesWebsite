jQuery(document).ready(function(){

  //mobile navicon
  var mobNav = $("#mobNav");
  //navigation menu
  var navMenu = $("#navMenu");

  //toggles navigation menu when navicon is clicked
  $(mobNav).click(function() {
    $(navMenu).toggle();
  });

});
