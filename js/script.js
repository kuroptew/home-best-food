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
      autoplay: false
    },
    
    992: {
      autoplay: {
        delay: 7000,
      },
    }
  }
});

new WOW().init();
