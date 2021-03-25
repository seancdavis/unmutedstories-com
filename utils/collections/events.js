/**
 * Provides a method for adding NJK components.
 *
 * @param {object} eleventyConfig Eleventy's configuration object
 */
exports.default = (eleventyConfig) => {
  /**
   * Creates the "events" collection from the "event" layout.
   */
  eleventyConfig.addCollection("events", (collectionApi) => {
    const events = collectionApi
      .getAll()
      .filter((item) => item.data.layout === "event")
      .sort((a, b) => b.date - a.date);

    return events;
  });
};
