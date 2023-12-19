document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000, // Set the autoplay delay to 3000 milliseconds (3 seconds)
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
