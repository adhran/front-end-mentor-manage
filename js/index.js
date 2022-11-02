////////////////////////////////////////////
// ----------SLIDER ----------

$(".testimonials").slick({
  prevArrow: false,
  nextArrow: false,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,

        customPaging: function (slider, i) {
          return ' <button id="testimonial-btn" class="btn testimonial-btn" data-btn="1"></button>';
        },
      },
    },
  ],
});

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

let observer2 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      setInterval(() => {
        goToSlide(curSlide++);
        getBtn(curSlide);
      }, 2000);
    }
  },
  { threshold: 0.7 }
);

////////////////////////
// --------- Mobile Menu ---------
const mobHeader = document.querySelector(".mobile-header");
const burgerMenu = document.querySelector(".burger_menu");
const overlay = document.querySelector(".overlay");
const mobHeaderMenu = document.querySelector(".mobile-header-menu");

mobHeader.addEventListener("click", function (e) {
  if (
    mobHeader.classList.contains("open") &&
    mobHeader.classList.contains("mobile-header")
  ) {
    overlay.classList.add("fade-out");
    mobHeaderMenu.classList.add("fade-out");

    overlay.addEventListener("animationend", () => {
      overlay.classList.remove("fade-out");
      mobHeaderMenu.classList.remove("fade-out");
    });
  }

  mobHeader.classList.toggle("open");
});
