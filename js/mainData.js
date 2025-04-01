const mainData = () => {
  // Список блоков по жанрам
  const renderAnimeList = (array, ganres) => {
    console.log('array :>> ', array)
    console.log('ganres :>> ', ganres)
  }

  // Список TOP позиций просмотров
  const renderTop = array => {
    const wrapper = document.querySelector('.filter__gallery')
    wrapper.innerHTML = '' // Очищаем текущее заполнение блока

    // Сортируем массив по убыванию Промотров и берем только 5 позиций
    const arrNew = array.sort((a, b) => b.views - a.views).slice(0, 5)
    arrNew.forEach(element => {
      // Вставляем блок HTML в найденный блок wrapper
      wrapper.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="product__sidebar__view__item set-bg mix" data-setbg="${element.image}">
            <div class="ep">${element.rating} / 10</div>
            <div class="view"><i class="fa fa-eye"></i>${element.views}</div>
            <h5><a href="/anime-details.html">${element.title}</a></h5>
        </div>
        `,
      )
    })

    // Заменяем ссылку на картинку для каждого подблока в wrapper с классом set-bg
    wrapper.querySelectorAll('.set-bg').forEach(element => {
      element.style.backgroundImage = `url(${element.dataset.setbg})`
    })
  }

  fetch('https://anime-77815-default-rtdb.firebaseio.com/anime.json')
    .then(respons => {
      return respons.json()
    })
    .then(data => {
      // Заполнение блоков списка TOP позиций
      renderTop(data)

      // Формирование списка жанров
      const ganres = new Set()
      data.forEach(item => {
        ganres.add(item.ganre)
      })
      renderAnimeList(data, ganres)
    })
}

mainData()
