console.log("I'm connected! c:");

// Our cleints carousel
$(".owl-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  slideTransition: "linear",
  autoplayTimeout: 3000,
  autoplaySpeed: 4000,

  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 4,
    },
  },
});
// // Our cleints carousel
// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   responsiveClass: true,
//   center: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   autoplayHoverPause: true,
//   fluidSpeed: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 5,
//     },
//   },
// });

$(".gallery-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  center: true,
  slideTransition: "linear",

  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});

// Animation
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 60 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letters'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letters",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
