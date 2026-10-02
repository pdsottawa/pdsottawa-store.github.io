# pdsottawa — Clothing Store PRO

A polished responsive fashion storefront for **pdsottawa**, built with HTML, CSS and vanilla JavaScript.

## What is included

- Branded **pdsottawa logo** stored locally in `assets/images/logo.png`
- 21 curated product references across Men, Women, Kids and Shoes
- Every product has a product photo URL, USD price reference and direct retailer source link
- Search and category filters
- Price and name sorting
- Product quick-view modal
- Shopping bag with quantity controls and localStorage persistence
- Responsive desktop/mobile layout
- Style advisory section
- Retail-source transparency note
- Product reference document in `PRODUCT-SOURCES.md`

## Important catalog note

This project is an independent demo storefront. Product names, trademarks and product photography remain the property of their respective brands/retailers. Price references were checked on **Oct. 1, 2026** and can change after that date. Each product card includes a direct source link so the current retailer price and availability can be verified.

## Style advisory

The included number `+1 (202) 555-0147` is a fictional demo number. Replace it with the real pdsottawa business line before launch.

## Run locally

Open `index.html` in a browser. For the most consistent behavior, serve the folder using a local web server.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy on GitHub Pages

1. Upload all files and folders to the repository root.
2. Commit the files.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select the main branch and `/ (root)`.
6. Save.

## Project structure

```text
pdsottawa-store/
├── index.html
├── README.md
├── PRODUCT-SOURCES.md
├── assets/
│   └── images/
│       └── logo.png
├── css/
│   └── style.css
└── js/
    └── app.js
```
