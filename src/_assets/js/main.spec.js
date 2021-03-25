import main, { TextTileSlider } from "./main"

describe("main.js", () => {
  it("exports the slider", () => {
    expect(main).toEqual(undefined)
    expect(typeof TextTileSlider).toEqual("function")
  })
})
