const scroll = () => {
  const topBtn = document.querySelector('#scrollToTopButton')

  topBtn.addEventListener('click', event => {
    event.preventDefault()
    // Бывают проблемы при перемещении этим методом
    //   window.scrollTo({
    //     top: 100,
    //     behavior: 'smooth',
    //   })

    // Для перемещения к определенному объекту используем данный компонент.
    // При его использовании нет багов
    seamless.polyfill()
    seamless.scrollIntoView(document.querySelector('.header'), {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  })
}

scroll()
