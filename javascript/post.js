jQuery(document).ready(function ($) {

  var $breadcrumb = $('#breadcrumb');
  var $toc = $('#menu');
  var $list = $toc.children('ul');
  var $headings = $('.content h3');
  var $open = $('#open');
  var $close = $('#close, #overlay');

  if ($headings.length) {
    $headings.each(function() {
      var $el = $(this);
      var id = $el.attr('id');
      if (id) {
        $list.append(
          $('<li />').append(
            $('<a />')
            .text($el.text())
            .attr('href', '#' + id)
          )
        );
        $el.prepend(
          $('<a />')
          .addClass('header-link')
          .attr('href', '#' + id)
          .html('#')
        );
        return;
      }
    });
  } else {
    $toc.hide();
  }

  $breadcrumb.affix({
    offset: {
      top: $breadcrumb.offset().top
    }
  })

  $open.click( function() {
    $('html').addClass('has-menu-open');
  });

  $close.click( function() {
    $('html').removeClass('has-menu-open');
  });

});
