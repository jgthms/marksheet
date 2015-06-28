jQuery(document).ready(function ($) {

  var $toggle = $('#toggle');
  var $down = $('#down');
  var $overlay = $('#overlay');
  var $top = $('#top');

  $toggle.click( function() {
    $('html').addClass('open-menu');
  });

  $down.click( function() {
    $('html').addClass('open-navigation');
  });

  $top.click( function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $overlay.click( function() {
    $('html').removeClass('open-menu').removeClass('open-navigation');
  });

});
