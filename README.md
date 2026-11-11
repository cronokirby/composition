# Composition

A TypeScript canvas library with static Vite demo pages.

```sh
direnv allow
npm ci
npm run dev
```

Without direnv, enter the development shell with `nix develop` first.

The homepage links to coral and blue demos. Each demo displays a centered square
canvas painted by `fillCanvas(canvas, color)` from `src/index.ts`.

`npm run check` checks TypeScript. `npm run build` builds the library (ES modules
and TypeScript declarations) into `dist/lib/` and the static site into
`dist/site/`. `npm run preview` serves the built site locally.

To add a demo, create `site/demos/<name>/index.html` and a TypeScript entry point,
then add it to `vite.config.ts` and link it from `site/index.html`.
