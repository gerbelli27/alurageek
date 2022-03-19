const searchIcon = document.querySelector('.search')
const searchBar = document.querySelector('.search-bar')
const btnLogin = document.getElementById('btn')
const closeSearch = document.querySelector('main')

searchIcon.addEventListener('click', () => {
  searchBar.classList.toggle('search-active')
  btnLogin.classList.toggle('btn-active')
})

closeSearch.addEventListener('click', () => {
  searchBar.classList.remove('search-active')
  btnLogin.classList.remove('btn-active')
})