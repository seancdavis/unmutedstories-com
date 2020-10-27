import Swiper, { Navigation } from "swiper"

// configure Swiper to use modules
Swiper.use([Navigation])

class TextTileSlider {
  constructor() {}

  static init(selector = ".swiper-container") {
    new Swiper(selector, {
      navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button"
      },
      slidesOffsetAfter: 100,
      slidesOffsetBefore: 100,
      slidesPerView: 3,
      spaceBetween: 32
    })
  }
}

export default TextTileSlider
