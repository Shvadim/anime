const mainData = () => {
  fetch('https://anime-77815-default-rtdb.firebaseio.com/anime.json')
    .then(respons => {
      return respons.json()
    })
    .then(data => {
      console.log('data :>> ', data)
    })
}

mainData()
