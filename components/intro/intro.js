document.addEventListener('DOMContentLoaded', () => {

  const sliderPrevButton = document.querySelector('.intro__slider-controls-prev')
  const sliderNextButton = document.querySelector('.intro__slider-controls-next')

  $('.intro__slider-itemContainer').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: 4000,
    cssEase: 'linear',
    prevArrow: sliderPrevButton,
    nextArrow: sliderNextButton,
    customPaging: () => {
      const thisTrack = document.querySelector('.intro__slider-itemContainer').querySelector('.slick-track')
      if (thisTrack.clientWidth < window.innerWidth) {
        return (
          `
        <div class="intro__slider-controls-slidesContainer">
            <div class="intro__slider-controls-slidesContainer-slide"></div>
        </div>
        `
        )
      }

    },
  });

  const sliderDots = document.querySelector('.slick-dots')
  sliderPrevButton.after(sliderDots)
})