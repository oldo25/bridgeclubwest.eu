# bridgeclubwest.eu

Static site for Bridge Club West, built with [Eleventy](https://www.11ty.dev/) and
deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Development

```sh
npm install     # once
npm start       # dev server with live reload on http://localhost:8080
npm run build   # production build into _site/
```

## Structure

- `src/_includes/layouts/base.njk` — page frame: header, left menu, content panel
- `src/_data/i18n/sk.yaml` — UI strings (site name, menu). Other languages get their own file.
- `src/sk/*.md` — Slovak pages; served from the site root (`src/sk/o-klube.md` → `/o-klube/`)
- `src/css/style.css` — HTML5 Boilerplate base styles; `src/css/site.css` — our styles
- `CNAME` — custom domain. Do not delete.
- `.github/workflows/deploy.yml` — build + deploy to Pages

## Branches and releases

`feature/*` → PR into `develop` → release PR `develop` → `main`, then tag the merge
commit with the version (`vMAJOR.MINOR.PATCH`) and bump `version` in `package.json`.
