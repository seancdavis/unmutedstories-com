const { Component } = require("../../../utils/shortcodes/component");
const { renderMarkdown } = require("../../../utils/shortcodes/markdown");

module.exports = ({
  facebook_url,
  twitter_url,
  instagram_url,
  image: imgSrc,
  bio,
  ...props
}) => {
  const renderIcon = (name) => {
    const component = new Component("icon", { name });
    return component.render();
  };

  const createIconLink = (name, url) => {
    return url ? { icon: renderIcon(name), url: url } : null;
  };

  const social_links = {
    facebook: createIconLink("facebook", facebook_url),
    instagram: createIconLink("instagram", instagram_url),
    twitter: createIconLink("twitter", twitter_url),
  };

  const imgComp = new Component("image", {
    path: imgSrc,
    sm: "256px",
    md: "320px",
    lg: "208px",
    xl: "272px",
  });
  const image = imgComp.render();

  return { image, social_links, body: renderMarkdown(bio), ...props };
};
