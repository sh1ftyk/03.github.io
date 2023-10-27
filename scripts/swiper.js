const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

if (window.innerWidth > 768) {
  swiper.disable();
}

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    swiper.enable();
  } else {
    swiper.disable();
  }
});
