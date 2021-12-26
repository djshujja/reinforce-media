console.log("I'm connected! c:");

var $window = $(window),
  $main = $("div.main");

if ($window.width() <= 786) {
  $main.removeClass("col-10");
  $main.addClass("col-12");
}

$(window).on("resize", function () {
  if ($window.width() <= 786) {
    $main.removeClass("col-10");
    $main.addClass("col-12");
  } else {
    $main.addClass("col-10");
    $main.removeClass("col-12");
  }
});

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
    targets: "div.line",
    opacity: 0.7,
    rotate: "1turn",
    // translateY: -100,
    // justifyContent: "space-around",
    duration: 1000,
    easing: "linear",
    direction: "alternate",
    autoplay: true,
  })
  .add({
    targets: ".ml3 .letters",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    // delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// anime.timeline({});

// anime.timeline({ loop: true }).add({
//   targets: ".line-green",
//   opacity: 0,
//   translateX: 0,
//   // justifyContent: "space-around",
//   duration: 3500,
//   easing: "linear",
//   direction: "alternate",
// });

// anime.timeline({ loop: true }).add({
//   targets: ".line-red",
//   opacity: 0,
//   translateX: 0,
//   rotate: "1turn",
//   // justifyContent: "space-around",
//   duration: 3500,
//   easing: "linear",
//   direction: "alternate",
//   // transform: "skewX(-45deg)",
// });

const clients = [
  {
    name: "Mike Tyson",
    image: "mike-tyson",
  },
  {
    name: "D' Lai",
    image: "d-lai",
  },
  {
    name: "Fani Stipkovic",
    image: "fani-stipkovic",
  },
  {
    name: "Metisha Schaefer",
    image: "metisha-schaefer",
  },
  {
    name: "Brandon Hendrickson",
    image: "brandon-hendrickson",
  },
  {
    name: "Floyd Mayweather",
    image: "floyd-mayweather",
  },
  {
    name: "Jeanlyn Campos",
    image: "jeanlyn-campos",
  },
  {
    name: "Angie Arizaga",
    image: "angie-arizaga",
  },
  {
    name: "Henny Seroeyen",
    image: "henny-seroeyen",
  },
  {
    name: "Teer Wayde",
    image: "teer-wayde",
  },
  {
    name: "Jake Quickenden",
    image: "jake-quickenden",
  },
  {
    name: "Addis Pablo",
    image: "addis-pablo",
  },
  {
    name: "Basketmouth",
    image: "basketmouth",
  },
  {
    name: "Bboy Marcio",
    image: "bboy-marcio",
  },
  // {
  //   name: "Little Shao",
  //   image: "little-shao",
  // },
  {
    name: "Carly Lauren",
    image: "carly-lauren",
  },
  {
    name: "Sophia Grace",
    image: "sophia-grace",
  },
  {
    name: "Naima Kira",
    image: "naima-kira",
  },
  {
    name: "Vicki Li",
    image: "vicki-li",
  },
  {
    name: "Irina Voronina",
    image: "irina-voronina",
  },
  {
    name: "Raquel Pomplun",
    image: "raquel-pomplun",
  },
  {
    name: "King Vader",
    image: "king-vader",
  },
  {
    name: "Beth Hagendorf",
    image: "beth-hagendorf",
  },
  {
    name: "Vicky-lee Valentino",
    image: "vicky-lee-valentino",
  },
  {
    name: "Shelby Chesnes",
    image: "shelby-chesnes",
  },
];

const partnersGrid = document.getElementById("partners-grid");

clients.forEach((client) => {
  const defaultImage =
    "https://i.pinimg.com/474x/1a/d5/65/1ad56502f8d3fadb2f24350700f0dcab.jpg";
  content = `
  <div class="partner">
                  <img
                    src="./assets/clients/${client.image}.jpg"
                    alt="${client.image}"
                    class="d-block m-auto client-image"
                  />
                  <h4>${client.name}</h4>
                </div>
                `;
  partnersGrid.innerHTML += content;
});
