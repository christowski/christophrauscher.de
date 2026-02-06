// Packages and plugins
const fg = require("fast-glob");
const path = require("path");
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const Image = require("@11ty/eleventy-img");

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

  // Responsive image shortcode
  // Usage: {% image "media/projectimg/example.jpg", "Alt text", "(min-width: 768px) 50vw, 100vw" %}
  eleventyConfig.addAsyncShortcode("projectimage", async function(src, alt, sizes = "100vw") {
    if (!alt) {
      throw new Error(`Missing \`alt\` on image from: ${src}`);
    }

    // Handle both absolute paths starting with / and relative paths
    let imagePath;
    if (src.startsWith("/media/")) {
      imagePath = path.join("./src", src);
    } else if (src.startsWith("media/")) {
      imagePath = path.join("./src", src);
    } else {
      imagePath = src;
    }

    let metadata = await Image(imagePath, {
      widths: [400, 800, 1600, 2200],
      formats: ["webp", "jpeg"],
      outputDir: "./public/media/projectimg/",
      urlPath: "/media/projectimg/",
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      }
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

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