document.addEventListener("DOMContentLoaded", () => {
   // NAVBAR
   const menuIcon = document.querySelector("#menu-icon");
   const navbar = document.querySelector(".navbar");
   const navLinks = document.querySelectorAll(".navbar a");

   const toggleMenu = () => {
      const isActive = navbar.classList.toggle("active");
      menuIcon.classList.toggle("bx-x", isActive);
      menuIcon.setAttribute("aria-expanded", isActive);
   };

   menuIcon.addEventListener("click", toggleMenu);

   window.addEventListener("scroll", () => {
      if (navbar.classList.contains("active")) {
         toggleMenu();
      }
   });

   navLinks.forEach((link) =>
      link.addEventListener("click", () => {
         if (navbar.classList.contains("active")) {
            toggleMenu();
         }
      })
   );

   // ABOUT SECTION - Typing Text Code
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
   const swiper = new Swiper(".portfolio-content", {
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
   const contactForm = document.querySelector(".contact-form");
   contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
         await emailjs.sendForm(
            "service_ummdl5h",
            "template_mrjirbf",
            contactForm
         );
         alert("✅ Message Sent Successfully!");
         contactForm.reset();
      } catch (error) {
         alert(
            `❌ Failed to send message. Please try again. \nError: ${
               error.text || error
            }`
         );
      }
   });
});
