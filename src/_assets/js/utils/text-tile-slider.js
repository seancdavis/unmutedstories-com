import Glide from "@glidejs/glide"

class TextTileSlider {
  constructor() {}

  static init(selector = ".glide") {
    new Glide(selector, {
      peek: 100,
      perView: 3,
      rewind: false
    }).mount()
  }
}

export default TextTileSlider
