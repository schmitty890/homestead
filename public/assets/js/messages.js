$(document).ready(function() {
  $("#showUrgent").on("click", function() {
    $(".issue").hide();
    $(".idea").hide();
    $(".other").hide();
    $(".urgent").show();
  })

  $("#showIssue").on("click", function() {
    $(".idea").hide();
    $(".other").hide();
    $(".urgent").hide();
    $(".issue").show();
  })

  $("#showIdea").on("click", function() {
    $(".issue").hide();
    $(".other").hide();
    $(".urgent").hide();
    $(".idea").show();
  })

  $("#showOther").on("click", function() {
    $(".idea").hide();
    $(".issue").hide();
    $(".urgent").hide();
    $(".other").show();
  })
  $("#showAll").on("click", function() {
    $(".issue").show();
    $(".idea").show();
    $(".other").show();
    $(".urgent").show();  
  })
});