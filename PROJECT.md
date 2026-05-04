# Elena Bandinelli – Portfolio Site

## Overview

A static portfolio site for artist Elena Bandinelli, built with React + Vite and hosted on GitHub Pages. There is no backend or database. All content is managed by Elena through a public Google Sheet; images are stored in Google Drive.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React (Vite) | Component-based UI, fast dev experience |
| Hosting | GitHub Pages | Free static hosting, zero server cost |
| Data source | Google Sheets (public) | Non-technical editor workflow |
| Images | Google Drive (public links) | Free storage, easy upload for Elena |

---

## Data Flow

1. Elena adds a row to the Google Sheet for each artwork.
2. She uploads the image to a shared Google Drive folder and pastes the shareable link into the sheet.
3. On page load, the React app fetches the sheet data via the **Google Sheets JSON API** (no auth required for public sheets).
4. Each row is rendered as an artwork card with the title, description, year, and the Drive image.

### Google Sheets JSON endpoint

For a sheet published to the web:

```
https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:json&sheet={SHEET_NAME}
```

The response is JSONP-wrapped; the app strips the wrapper and parses the rows.

### Google Drive image URLs

Elena shares each image via "Anyone with the link can view". The sharable link looks like:

```
https://drive.google.com/file/d/{FILE_ID}/view?usp=sharing
```

The app converts this to a direct image URL:

```
https://drive.google.com/thumbnail?id={FILE_ID}&sz=w800
```

This works for public files without any API key.

---

## Sheet Schema

Elena fills in the following columns (order matters). Column names and descriptions are in Italian for Elena's reference:

| Colonna | Campo | Descrizione |
|---|---|---|
| A | `titolo` | Titolo dell'opera |
| B | `anno` | Anno di creazione |
| C | `tecnica` | Es. "Olio su tela" |
| D | `descrizione` | Breve descrizione (opzionale) |
| E | `categoria` | Es. "Pittura", "Disegno", "Digitale" |
| F | `immagine` | Nome del file in `public/artworks/` (es. `painting.jpg`) |
| G | `inEvidenza` | Scrivi `true` per metterla in primo piano |

---

## Project Structure

```
/
├── public/               # Static assets (favicon, etc.)
├── src/
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom hooks (e.g. useArtworks)
│   ├── utils/            # Helpers (sheet parsing, Drive URL conversion)
│   ├── App.jsx
│   └── main.jsx
├── PROJECT.md            # This file
└── vite.config.js
```

---

## GitHub Pages Deployment

The `main` branch is deployed via the `gh-pages` npm package (or GitHub Actions). Build output goes to `dist/`.

```bash
npm run build
npm run deploy   # runs: gh-pages -d dist
```

> The repo is named `HelenKyle.github.io`, so it serves at the root domain `helenkhyle.github.io` with no base path needed.

---

## Content Update Workflow (for Elena)

1. Open the Google Sheet.
2. Add a new row with the artwork details.
3. Upload the image to the shared Google Drive folder.
4. Right-click → "Get link" → set to "Anyone with the link" → copy link.
5. Paste the link in column G of the new row.
6. The site reflects changes on next page load — no code change needed.
