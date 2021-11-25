console.log("I'm connected! c:");
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  center: true,
  autoplay: true,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  fluidSpeed: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
