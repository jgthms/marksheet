jQuery(document).ready(function ($) {

  // Interactions

  var $toggle = $('#toggle');
  var $down = $('#down');
  var $overlay = $('#overlay');
  var $top = $('#top');
  var $banner = $('#banner');
  var $newsletter = $('#css-ebook');

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

  $banner.click( function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $newsletter.offset().top
    }, 500);
  });

  $overlay.click( function() {
    $('html').removeClass('open-menu').removeClass('open-navigation');
  });

  // Social

  var loadSocialScripts;

  loadSocialScripts = function() {
    var script;
    script = document.createElement('script');
    script.async = true;
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=470761896424893';
    document.body.appendChild(script);
    script = document.createElement('script');
    script.async = true;
    script.id = 'twitter-wjs';
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);
    var callback;
    callback = function() {
      return $('#hello').fadeTo(1000, 1);
    };
    return setTimeout(callback, 500);
  };

  $(window).load(function() {
    loadSocialScripts();
  });

});
