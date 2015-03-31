var main = function() {
    $(".col-sm-4").height($(".col-sm-8").height());   
};

$(document).ready(main);

$(body).scrollspy({target: 'navbar-example'});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});