/**
 * Add a firstWord filter
 *
 * @param {object} eleventyConfig Eleventy's configuration object
 */
exports.default = (eleventyConfig) => {
  /**
   * Extracts the first word from a string by targeting only spaces.
   *
   * Usage: {{ item.name | firstWord }}
   *
   * @param {string} input The string from which to extract the first word.
   *
   */
  eleventyConfig.addFilter("firstWord", (input) => {
    return input.split(" ")[0];
  });
};
