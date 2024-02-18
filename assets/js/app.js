$(document).ready(function () {
  var $cursor = $(".cs");
  $(window).on("mousemove", function (e) {
    $cursor.css({
      left: e.clientX - $cursor.width() / 2,
      top: e.clientY - $cursor.height() / 2,
    });
  });
  $("a, .page-header__logo, .right-side")
    .on("mouseenter", function () {
      $cursor.css("transform", "rotateZ(35deg)");
      $(".cs :nth-child(2)").css("opacity", "1");
    })
    .on("mouseleave", function () {
      $(".cs :nth-child(2)").css("opacity", "0");
      $cursor.css("transform", "rotateZ(0deg)");
    });


  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });
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
