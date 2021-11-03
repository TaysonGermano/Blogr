"use strict";

// Selecting elements
const menu = document.querySelectorAll(".menu");
const dropdown = document.querySelectorAll(".drop-down");
const body = document.getElementsByTagName("body");
const mobileMenu = document.querySelector(".hamburger");
const menuLinks = document.querySelectorAll(".menu-links");
const menuBtn = document.querySelector(".menu-btn");
let mobileMnStatus = false;

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    dropdown[i].classList.toggle("hide");
    for (let x = 0; x < menu.length; x++) {
      if (x == i) continue;
      dropdown[x].classList.add("hide");
    }
  });
  window.addEventListener("click", function (e) {
    if (!e.target.classList.contains("menu")) dropdown[i].classList.add("hide");
  });
}

mobileMenu.addEventListener("click", openMenu);

function openMenu(e) {
  if (e.target.classList) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].classList.toggle("hide-on-mobile");
    }
    menuBtn.classList.toggle("hide-on-mobile");
    if (mobileMnStatus) {
      e.target.src = "images/icon-hamburger.svg";
      mobileMnStatus = false;
    } else {
      e.target.src = "images/icon-close.svg";
      mobileMnStatus = true;
    }
  }
}
