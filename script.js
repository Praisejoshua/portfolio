// script.js

$(document).ready(function () {
  // Initialize Slick Carousel only for the slider in the skill section
  $("#skill .slider").slick({
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds (adjust as needed)
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  });
});
