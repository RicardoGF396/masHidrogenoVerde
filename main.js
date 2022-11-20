/* ================ SWIPER ================ */

let testimonialSwiper = new Swiper(".testimonial-swiper", {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* ========== Navbar =========== */

let nav = document.querySelector('nav');
let logoNav = document.querySelector('.menu-nav-icon')
let logoText = document.querySelector('.menu-nav-text')
let mainLogo = document.querySelector('.hv-nav')

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
    nav.classList.add("scroll-nav");
    logoText.classList.add("scroll-menu-nav-text")
    logoNav.classList.add("scroll-menu-nav-icon")
    mainLogo.classList.add("scroll-menu-nav-MainIcon")
  } else {
    nav.classList.remove("scroll-nav");
    logoText.classList.remove("scroll-menu-nav-text")
    logoNav.classList.remove("scroll-menu-nav-icon")
    mainLogo.classList.remove("scroll-menu-nav-MainIcon")
  }
};


/* Toogle Nav */

let menuBtn = document.querySelector('.menu-container-logo')


