const hamburgerBtn = document.querySelector(".hamburger");
const closeNavMenuBtn = document.querySelector(".nav-menu__close");
const navMenu = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.add("nav-menu_active");
});

closeNavMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("nav-menu_active");
});

const swiper = new Swiper(".swiper", {
  parallax: true,
  autoplay: {
    delay: 7000,
  },
  loop: true,
  autoHeight: true,
  watchSlidesProgress: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      autoplay: false,
    },

    992: {
      autoplay: {
        delay: 7000,
      },
    },
  },
});

function toSection(nameSection) {
  const section = document.querySelector(`#${nameSection}`);
  const link = document.querySelector(`[href="#${nameSection}"]`);


  link.addEventListener("click", (e) => {
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
    navMenu.classList.remove("nav-menu_active");
  });
}

toSection("our-menu");
toSection("reserve");
toSection("history");

new WOW().init();
