# minatonami.github.io

Personal portfolio site for Lionel Chong — live at https://minatonami.github.io/.

A single-page Nuxt 3 site, statically generated and deployed to GitHub Pages by
`.github/workflows/nuxtjs.yml` on every push to `main`.

## Editing content

All copy lives in [`data/profile.ts`](data/profile.ts) (work, projects, experience, stack).
Layout is in `app.vue`, styles in `assets/main.css`, and the hero diagram in
`components/FleetDiagram.vue`.

## Local development

```bash
npm ci
npm run dev        # http://localhost:3000
npm run generate   # static output in .output/public
```
