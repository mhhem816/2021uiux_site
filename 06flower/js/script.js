$(document).ready(function(){
  $(".banner").bxSlider({
    pager:false,
    auto:true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay:true,
  mousewheel: true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
});


});