document.addEventListener('DOMContentLoaded', () => {

  const loader = document.querySelector('.loader')
  setTimeout(() => loader.classList.add('loaderHidden'), 300)

  AOS.init({
    once: true,
  });

})