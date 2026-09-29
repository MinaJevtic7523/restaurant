(function () {
  "use strict";

  // Mobile menu
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  // Contact form (demo): validate and show a confirmation. Nothing is sent anywhere.
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      ["fullname", "email", "message"].forEach(function (id) {
        var f = document.getElementById(id);
        var valid = f.value.trim() !== "" && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.classList.toggle("invalid", !valid);
        f.setAttribute("aria-invalid", String(!valid));
        if (!valid) ok = false;
      });
      if (!ok) {
        status.className = "form-status error";
        status.textContent = "Please fill in your name, a valid email and a message.";
        return;
      }
      status.className = "form-status ok";
      status.textContent = "Thank you! This is a demo website, so your message was not sent.";
      form.reset();
    });
  }
})();

