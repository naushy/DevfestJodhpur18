$(document).ready(function() {
  $(".lines-and-block").toggleClass("active");
  setInterval(function() {
    $(".lines-and-block").toggleClass("active"); 
  }, 3000); 
});
