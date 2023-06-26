$(document).ready(function(){
    $("button").click(function(){
      $("body").toggleClass("darkmode");
      $("#moon").toggleClass("hidden");
      $("#sun").toggleClass("hidden");
    });
  });