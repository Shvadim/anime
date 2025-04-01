const modal = () => {
  const modal = document.querySelector('.search-model')
  const iconSearch = document.querySelector('.icon_search')
  const searchCloseSwitch = modal.querySelector('.search-close-switch')

  iconSearch.addEventListener('click', e => {
    modal.style.display = 'block'
  })

  searchCloseSwitch.addEventListener('click', e => {
    modal.style.display = 'none'
  })

  // получение компонента строки ввода поиска
  const searchInput = document.getElementById('search-input')
  // обработчик нажатий на клавишу
  searchInput.addEventListener('keyup', e => {
    console.log('key :>> ', e.key)
    console.log('searchInput :>> ', searchInput.value)
  })
}
modal()
