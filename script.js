let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
   menu.classList.toggle("bx-x");
   navbar.classList.toggle("active");
};

window.onscroll = () => {
   menu.classList.remove("bx-x");
   navbar.classList.remove("active");
};

// PORTFOLIO SWIPER

let swiper = new Swiper(".portfolio-content", {
   cssMode: true,
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   mousewheel: true,
   keyboard: true,
});

// mousewheel: true, delete
// keyboard: true, delete
