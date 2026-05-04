# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build → dist/
npm run lint      # ESLint
npm run preview   # preview the production build locally
```

There are no tests.

## Architecture

Static React + Vite portfolio site for artist Elena Bandinelli, deployed to GitHub Pages via GitHub Actions on every push to `main`.

**Data flow — no backend, no API keys:**

1. `src/utils/sheet.js` — fetches artwork data from a publicly published Google Sheet as CSV using `papaparse`. The sheet URL is hardcoded.
2. `src/hooks/useArtworks.js` — fetches rows, builds `imageUrl` as `/artworks/{immagine}`, and casts `inEvidenza` to boolean.
3. `src/App.jsx` — consumes `useArtworks` and renders the portfolio sections.

**Images** are stored in `public/artworks/`. The sheet holds just the filename (e.g. `painting.jpg`). To add a new artwork: upload the file to `public/artworks/` via GitHub, then add a row to the sheet with that filename in column G.

**Sheet schema** (columns A–H, order matters):

| Column | Field | Description |
|--------|-------|-------------|
| A | `titolo` | Artwork title |
| B | `anno` | Year |
| C | `tecnica` | Technique (e.g. "Olio su tela") |
| D | `descrizione` | Optional description |
| E | `categoria` | Category |
| F | `immagine` | Filename in `public/artworks/` (e.g. `painting.jpg`) |
| G | `inEvidenza` | Write `true` to feature it |

**Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. No manual deploy step needed — push to `main` triggers it.
