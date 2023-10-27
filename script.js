const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  keyboard: {
    enabled: true,
  },
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

let expandButton = document.querySelector(".expand__button");
let expandImage = document.querySelector(".expand__image");
let expandText = document.querySelector(".expand__text");
let cardHidden = document.querySelectorAll(".card__link--hidden");
let click = true;

expandButton.onclick = function () {
  if (click) {
    expandText.textContent = "Скрыть";
    expandImage.style.transform = "rotateX(180deg)";
    for (let i = 0; i < cardHidden.length; i++) {
      cardHidden[i].classList.remove("card__link--hidden");
    }
    click = false;
  } else {
    expandText.textContent = "Показать всё";
    expandImage.style.transform = "rotateX(0deg)";
    for (let i = 0; i < cardHidden.length; i++) {
      cardHidden[i].classList.add("card__link--hidden");
    }
    click = true;
  }
};
