import Glide from "@glidejs/glide"

class TextTileSlider {
  constructor() {}

  static init(selector = ".glide") {
    new Glide(selector, {
      gap: 24,
      peek: 100,
      perView: 3,
      rewind: false
    }).mount()
  }
}

export default TextTileSlider
