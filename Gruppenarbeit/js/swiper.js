/**
 * SLIDER WITH SWIPERJS
 * 1. Read the get started guide at https://swiperjs.com/get-started/
 * 2. Initialize the swiper element with the class ".swiper-container" with pagination as type fraction
 * 
 * https://swiperjs.com/api/
 * https://swiperjs.com/demos/
 * 
 */


document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready');
  //DOM yüklendikten sonra slider'i baslat

  const swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 0,
  })
});