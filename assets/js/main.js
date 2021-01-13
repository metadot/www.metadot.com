(function ($) {
  "use strict";

  /**
   * Smooth scrolling to page anchor on click
   **/
  $("a[href*='#']:not([href='#'])").click(function () {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });

  //we select the dropdown button of about-us section labelled with "clickable"
  var dropdown = $(".clickable");
  //Hide the matched elements with a sliding motion.
  $(".content").slideUp("normal");
  //We store the previous clickable ID for inverse the rotation of the cross on the right
  var previous = "";

  //when we click on a dropdown button
  dropdown.on("click",function (event) {
    //if we clicked previously on a button
    if (!previous == "") {
      //we select the cross that have been rotated during the dropdown
      var previous_round = $("#dropdown-round-" + previous);
      previous_round.css("transition", "transform 0.2s");
      var angle = 45;
      //and we put it in the initial position
      previous_round.css({ transform: `rotate(${angle}deg)` });
    }
    //we select the current ID of button we clicked on
    var ID = event.target.closest("div.dropdown-button").id;
    //if we click on another one than the previous button
    if (previous != ID) {
      var round = $("#dropdown-round-" + ID);
      round.css("transition", "all 0.2s");
      var angle = 0;
      //we rotate it to the angle 0(css rotated it initially at 45)
      round.css({ transform: `rotate(${angle}deg)` });
      previous = ID;
    }
    //if we clicked on the same than previous (every cross is at the initial position)
    else previous = "";
    //Hide the matched elements with a sliding motion.
    $(".content").slideUp("normal");
    if ($(this).next().is(":hidden") == true) {
      //we roll out the follow text
      $(this).next().slideDown("normal");

    }
  });

  // Accordions for head page
  $(".collapse")
    .on("shown.bs.collapse", function () {
      $(this)
        .parent()
        .find(".ti-angle-right")
        .removeClass("ti-angle-right")
        .addClass("ti-angle-down");
    })
    .on("hidden.bs.collapse", function () {
      $(this)
        .parent()
        .find(".ti-angle-down")
        .removeClass("ti-angle-down")
        .addClass("ti-angle-right");
    });

  //slider for contact us page
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
  });
})(jQuery);
