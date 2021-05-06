const { DateTime } = require("luxon");

/**
 * Add a "isFuture" filter to return if a date is in the future.
 *
 * @param {object} eleventyConfig Eleventy's configuration object
 */
exports.default = (eleventyConfig) => {
  /**
   * Return whether the date is in the future.
   *
   * Usage: {{ item.date | isFuture }}
   *
   * @param {date} date The date to filter.
   *
   */
  eleventyConfig.addFilter("isFuture", (date) => {
    return new Date(date) > new Date();
  });
};
