// Defaults for every page in src/sk/.
// Slovak is the default language, so its pages are served from the site root
// (src/sk/o-klube.md → /o-klube/). English pages will later go under /en/.
export default {
  lang: "sk",
  layout: "layouts/base.njk",
  permalink: (data) => {
    const stem = data.page.filePathStem.replace(/^\/sk/, "");
    return stem.endsWith("/index") ? `${stem}.html` : `${stem}/index.html`;
  },
};
