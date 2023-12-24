let swiper2 = new Swiper('.swiper4', {
  slidesPerView: 1,
  
    navigation: {
              nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
            },
    autoplay: {
      delay: 5000,
    },
   });


   const swiper = new Swiper(".swiper2", {
    slidesPerView: 3,
    spaceBetween: 35,
     slidesPerGroup: 1,
     loop: true,
     fade: true,
      centerSlide: true,
      loopfillGroupwithBlank: true,
    // freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    //    autoplay: {
    //   delay: 5000,
    // },
    speed: 400,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        
      },
      // when window width is >= 640px
      968: {
        slidesPerView: 3,
      
      },
    }
  });