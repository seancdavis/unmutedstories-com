import Swiper, { Navigation } from "swiper"

Swiper.use([Navigation])

class TextTileSlider {
  constructor() {}

  static init(selector = ".swiper-container") {
    new Swiper(selector, {
      navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button"
      },
      slidesOffsetAfter: 50,
      slidesOffsetBefore: 50,
      slidesPerView: 2,
      spaceBetween: 32,
      breakpoints: {
        768: {
          slidesOffsetAfter: 100,
          slidesOffsetBefore: 100
        },
        1024: {
          slidesPerView: 3
        }
      }
    })
  }
}

export default TextTileSlider
