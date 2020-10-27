const { Component } = require("../../../utils/shortcodes/component")

module.exports = ({ facebook_url, twitter_url, instagram_url, ...props }) => {
  const renderIcon = (name) => {
    const component = new Component("icon", { name })
    return component.render()
  }

  const createIconLink = (name, url) => {
    return url ? { icon: renderIcon(name), url: facebook_url } : null
  }

  const social_links = {
    facebook: createIconLink("facebook", facebook_url),
    instagram: createIconLink("instagram", instagram_url),
    twitter: createIconLink("twitter", twitter_url)
  }
  return { social_links, ...props }
}
