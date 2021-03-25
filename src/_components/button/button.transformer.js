const defaults = {
  theme: "blue"
}

module.exports = ({ __keywords, className, label, theme, url, ...props }) => {
  const attrs = Object.entries(props)
    .map(([k, v]) => `${k}=${v}`)
    .join(" ")

  return {
    attrs: attrs,
    className: className,
    label: label,
    theme: theme || defaults.theme,
    url: url
  }
}
