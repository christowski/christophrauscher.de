// Packages and plugins
const fg = require("fast-glob");
const rssPlugin = require('@11ty/eleventy-plugin-rss');

// Date filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/sass");

  // Come throuuuuugh (to the public folder!)
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  
  // Plugins
  eleventyConfig.addPlugin(rssPlugin);

  // Limit filter
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

  // Date filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  // Example for filter to disply a random post:
  eleventyConfig.addFilter("randomPost", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

  // Posts collection is all written stuff like blog posts, newsletters, essay, etc.
  // Posts collection in reverse date order
  eleventyConfig.addCollection('posts', collection => {
    return collection
      .getFilteredByGlob('./src/writing/*/*.md')
      .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
  });

  // Projects collection, sorted by display order
  eleventyConfig.addCollection('projects', collection => {
    return collection
      .getFilteredByGlob('./src/projects/*.md')
      .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
  });

  // featured projects items collection, sorted by display order
  eleventyConfig.addCollection('featuredProjects', collection => {
    return collection
      .getFilteredByGlob('./src/projects/*.md').filter(
        x => x.data.featured)
      .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
  });

  // writing collection, sorted by display order
  // The Writing collection is mainly for bigger topics like workshops, columns, books etc.
  eleventyConfig.addCollection('writing', collection => {
    return collection
      .getFilteredByGlob('./src/writing/*.md')
      .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
  });

  // For the footer: Add the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      output: 'public'
    },
  };
};