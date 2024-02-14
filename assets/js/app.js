$(document).ready(function () {
  $("#page-header__hamburger").click(function () {
    $("nav").css("right", "0");
    $("#back_menu").css("display", "block");
  });

  $("#back_menu").click(function () {
    $("nav").css("right", "-60vw");
    $("#back_menu").css("display", "none");
  });

  $(".slider").click(function () {
    if ($("body").hasClass("light-mode")) {
      $("body").removeClass("light-mode");
    } else {
      $("body").addClass("light-mode");
    }
  });
});
