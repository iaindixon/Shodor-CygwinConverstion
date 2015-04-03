$(document).ready(
  $(".dropdown a").click(function(e) {
      e.preventDefault()
      $(this).tab('show')
  }
  $('.dropdown a[href="#a"]').tab('show') 
  $('.dropdown a[href="#b"]').tab('show') 
  $('.dropdown a[href="#c"]').tab('show') 
// Select tab by name 
);