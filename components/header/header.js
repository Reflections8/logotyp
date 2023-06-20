document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('headerScrolled')
    } else {
      header.classList.remove('headerScrolled')
    }
  })

  /* Burger icon logic */
  const burgerIcon = document.querySelector('.header__inner-endSection-burgerBox')
  const burgerMenu = document.querySelector('.header__burgerMenu')
  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('header__inner-endSection-burgerBoxActive')
    burgerMenu.classList.toggle('header__burgerMenuHidden')
  })
})