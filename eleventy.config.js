import { load as loadYaml } from "js-yaml";

export default function (eleventyConfig) {
  // Translation dictionaries live in src/_data/i18n/<lang>.yaml → available as i18n.<lang>
  eleventyConfig.addDataExtension("yaml,yml", (contents) => loadYaml(contents));

  // Static files copied to the output as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/*.{ico,png,svg,txt,webmanifest}");
  eleventyConfig.addPassthroughCopy({ CNAME: "CNAME", ".nojekyll": ".nojekyll" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
