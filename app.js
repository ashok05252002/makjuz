document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  // Contact form handling
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value,
      };
      // Show success message (in a real application, you would send this data to a server)
      formMessage.textContent =
        "Thank you for your message. We will get back to you soon!";
      formMessage.classList.remove("hidden", "text-red-600");
      formMessage.classList.add("block", "text-green-600", "mb-4");
      // Reset form
      contactForm.reset();
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.add("hidden");
      }, 5000);
    });
  }
  // Mobile menu toggle
  const menuButton = document.querySelector(".ri-menu-line");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      // Mobile menu functionality would go here
      console.log("Menu clicked");
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Custom select styling
  const selects = document.querySelectorAll("select");
  selects.forEach((select) => {
    const wrapper = document.createElement("div");
    wrapper.className = "relative";
    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(select);
    const icon = document.createElement("div");
    icon.className =
      "absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none";
    icon.innerHTML = '<i class="ri-arrow-down-s-line text-gray-500"></i>';
    wrapper.appendChild(icon);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Custom switch functionality
  const switches = document.querySelectorAll(".custom-switch input");
  switches.forEach((switchInput) => {
    switchInput.addEventListener("change", function () {
      console.log("Switch toggled:", this.checked);
    });
  });
});
