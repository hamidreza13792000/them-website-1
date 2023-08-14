
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
      delay: '5000',
    },
});
// start slider 2
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: '4',
  spaceBetween: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});


//  SEARCH-PAGE -> SLIDER CONTENT 1 
var swiper = new Swiper(".search-mySwiper-1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  loop:"true",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// SEARCH-PAGE-> SLIDER-CONTENT 2
var swiper = new Swiper(".search-mySwiper-2", {
  slidesPerView: '4',
  spaceBetween: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

