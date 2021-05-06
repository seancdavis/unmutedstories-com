/**
 * Collects and returns all events in chronological order.
 */
const getAllEvents = (collectionApi) => {
  return collectionApi
    .getAll()
    .filter((item) => item.data.layout === "event")
    .sort((a, b) => b.date - a.date);
};

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
    return getAllEvents(collectionApi);
  });
  /**
   * Creates the "upcoming_events" collection by pulling all events and
   * filtering out those from the past.
   */
  eleventyConfig.addCollection("upcoming_events", (collectionApi) => {
    return getAllEvents(collectionApi)
      .filter((event) => event.date >= Date.now())
      .reverse();
  });
  /**
   * Events that have already occurred who have videos.
   */
  eleventyConfig.addCollection("shareable_past_events", (collectionApi) => {
    return getAllEvents(collectionApi).filter(
      (event) => event.date < Date.now() && event.data.youtube_id
    );
  });
};
