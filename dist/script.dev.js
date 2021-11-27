"use strict";

console.log("I'm connected! c:"); // Our cleints carousel

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
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
}); // Animation
// Wrap every letter in a span

var textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
  loop: true
}).add({
  targets: ".ml7 .letter",
  translateY: ["1.1em", 0],
  translateX: ["0.55em", 0],
  translateZ: 0,
  rotateZ: [180, 0],
  duration: 750,
  easing: "easeOutExpo",
  delay: function delay(el, i) {
    return 50 * i;
  }
}).add({
  targets: ".ml7",
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});