document.addEventListener("DOMContentLoaded", () => {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".overlay");
  
    dropdownButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dropdown = btn.closest(".dropdown");
        dropdown.classList.toggle("open");
      });
    });
  
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.add("open");
      overlay.classList.remove("hidden");
    });
  
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      overlay.classList.add("hidden");
    });
  
    overlay.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      overlay.classList.add("hidden");
    });
  
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach((drop) => drop.classList.remove("open"));
      }
    });
  });
  