const { DateTime } = require("luxon");

/**
 * Add a prettier "slugify" filter. The "slug" filter does not remove colons,
 * commas, apostrophes, etc. This does.
 *
 * @param {object} eleventyConfig Eleventy's configuration object
 */
exports.default = (eleventyConfig) => {
  /**
   * Formats a date from a given Luxon preset. See
   * https://moment.github.io/luxon/docs/manual/formatting.html for available
   * presets.
   *
   * Usage: {{ item.date | formatDate('TIME_SIMPLE') }}
   *
   * @param {date} date The date to filter.
   * @param {string} preset The Luxon preset used to format the date object.
   *
   */
  eleventyConfig.addFilter("formatDate", (date, preset) => {
    if (!preset) return date;
    const dt = DateTime.fromJSDate(new Date(date));
    return dt.toLocaleString(DateTime[preset]);
  });
};
