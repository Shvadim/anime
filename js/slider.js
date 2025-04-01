const swiper = () => {
  const swiper = new Swiper('.swiper', {
    speed: 1000,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

swiper()
