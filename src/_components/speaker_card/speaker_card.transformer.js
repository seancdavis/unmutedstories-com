const { Component } = require("../../../utils/shortcodes/component");

module.exports = ({ social = {}, image: imgSrc, ...props }) => {
  const renderIcon = (name) => {
    const component = new Component("icon", { name });
    return component.render();
  };

  const createIconLink = (name, url) => {
    if (!url) return null;
    return { icon: renderIcon(name), url: url };
  };

  const social_links = {
    facebook: createIconLink("facebook", social.facebook),
    instagram: createIconLink("instagram", social.instagram),
    twitter: createIconLink("twitter", social.twitter),
  };

  const imgComp = new Component("image", {
    path: imgSrc,
    sm: "256px",
    md: "320px",
    lg: "208px",
    xl: "272px",
  });
  const image = imgComp.render();

  return { image, social_links, ...props };
};
