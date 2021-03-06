$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--header").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top,
      },
      1000
    );
  });
  /* btn Show me more */
  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top,
      },
      1000
    );
  });

  /* Navigation scroll */
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  /* Mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    nav.slideToggle(200);
    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
  });
});
