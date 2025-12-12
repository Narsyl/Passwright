document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("mobile-open");
      navLinks.style.display = isOpen ? "grid" : "";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        body.classList.remove("mobile-open");
        navLinks.style.display = "";
      });
    });
  }

  const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      if (success) {
        success.textContent = "Thanks! A Coffey’s instructor will ring you back shortly.";
        success.style.display = "block";
      }

      form.reset();
    });
  }
});

