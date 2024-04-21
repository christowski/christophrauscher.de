1.
npm init -y

2.
npm install @11ty/eleventy

3.
Update scripts in in package.json
  "scripts": {
    "watch:sass": "sass --watch src/sass:public/css",
    "build:sass": "sass src/sass:public/css",
    "watch:eleventy": "eleventy --serve",
    "build:eleventy": "eleventy",
    "start": "npm-run-all build:sass --parallel watch:*",
    "build": "npm-run-all build:*"
  },

4.
create .eleventy.js file and add eleventyConfig setup:

  module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/media");
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };

5.
run project locally via
npm start

----

## Helpful links

General 11ty tutorials:
https://egghead.io/courses/build-an-eleventy-11ty-site-from-scratch-bfd3
Course by Stephanie Eckles

https://learneleventyfromscratch.com
by Andy Bell. Outdated and too smart/complex, but very helpful for specific things


https://11ty.rocks/eleventyjs/dates/

CSS Grid:
https://www.joshwcomeau.com/css/interactive-guide-to-grid/

Add a gallery (doesnt work yet)
https://www.kodiakskorner.com/log/447

Dark Mode
https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

Spamfree email link
https://spamstop.org/spamtools/email
