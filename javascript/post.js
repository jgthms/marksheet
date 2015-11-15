jQuery(document).ready(function ($) {

  var $breadcrumb = $('#breadcrumb');
  var $toc = $('#menu');
  var $list = $toc.children('ul');
  var $headings = $('.content h3');

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

});
