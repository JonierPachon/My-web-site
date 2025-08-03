// NAVBAR
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
   menu.classList.toggle("bx-x");
   navbar.classList.toggle("active");
};

window.onscroll = () => {
   if (navbar.classList.contains("active")) {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
   }
};

// Vanilla JavaScript.
// JavaScript and Figma.

// ABOUT SECTION

// Typing Text Code
const typed = new Typed(".multiple-text", {
   strings: [
      "HTML5 and CSS3.",
      "Vanilla JavaScript.",
      "Figma Prototyping.",
      "Responsive Design.",
      "Git and GitHub.",
   ],
   typeSpeed: 80,
   backSpeed: 80,
   backDelay: 1000,
   loop: true,
});

// PORTFOLIO SWIPER

let swiper = new Swiper(".portfolio-content", {
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   keyboard: true,
});

// mousewheel: true, delete
// keyboard: true, delete

// CONTACT SECTION

document.addEventListener("DOMContentLoaded", function () {
   document
      .querySelector(".contact-form")
      .addEventListener("submit", function (e) {
         e.preventDefault(); // Prevent the default form submission

         emailjs.sendForm("service_ummdl5h", "template_mrjirbf", this).then(
            function () {
               alert("✅ Message Sent Successfully!");
               document.querySelector(".contact-form").reset(); // Reset the form
            },
            function (error) {
               alert(
                  "❌ Failed to send message. Please try again. \nError: " +
                     error.text
               );
            }
         );
      });
});
