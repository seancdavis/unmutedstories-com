const { readSvg } = require("../../../utils/shortcodes/svg")

module.exports = ({ name, ...props }) => {
  const icon = readSvg(name)
  return { icon, name, ...props }
}
