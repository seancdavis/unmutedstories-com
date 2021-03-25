const ImgixClient = require("imgix-core-js")

const client = new ImgixClient({
  domain: process.env.IMGIX_DOMAIN,
  secureURLToken: process.env.IMGIX_TOKEN
})

module.exports = {
  mobile: client.buildURL("/website/uploads/bg-jumbotron-mobile.jpg", {
    auto: "compress,format",
    w: "800px"
  }),
  desktop: client.buildURL("/website/uploads/bg-jumbotron-desktop.jpg", {
    auto: "compress,format",
    w: "1600px"
  })
}
