"use strict";
// Declaration
const features = document.querySelector(".nav-features");
const featuresArrow = document.querySelector(".features-arrow");
const featuresDropdown = document.querySelector(".features-dropdown");
const company = document.querySelector(".nav-company");
const companyArrow = document.querySelector(".company-arrow");
const companyDropdown = document.querySelector(".company-dropdown");

// Functions
const arrow = (navButton, direction) => {
  navButton.src = `images/icon-arrow-${direction}.svg`;
};
const menu = (nav, down, up, dropdown, navBtn) => {
  nav.addEventListener("click", function () {
    if (document.querySelector(`.${down}`)) {
      dropdown.classList.toggle("hidden");
      arrow(navBtn, "up");
      navBtn.classList.replace(`${down}`, `${up}`);
    } else if (document.querySelector(`.${up}`)) {
      dropdown.classList.toggle("hidden");
      arrow(navBtn, "down");
      navBtn.classList.replace(`${up}`, `${down}`);
    }
  });
};

// Codes
menu(features, "featuresDown", "featursUp", featuresDropdown, featuresArrow);
menu(company, "companyDown", "companyUp", companyDropdown, companyArrow);
