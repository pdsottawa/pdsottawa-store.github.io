# pdsottawa — Clothing Store Website

A polished, responsive static ecommerce demo for **pdsottawa** — *Style for Every Moment.*

## Included

- Responsive premium fashion layout
- Men, Women, Kids and Shoes filters
- 12 catalog items with retailer-linked product photography and price references
- Search and price/name sorting
- Product quick-view modal
- Working demo shopping bag with quantity controls and `localStorage`
- Style advisory call-to-action
- Retail source link on every product
- Product-price transparency notice
- Mobile-friendly design

## Style advisory number

The website currently uses **+1 (202) 555-0147**, a fictional placeholder number. Replace it in `index.html` with your real business line before publishing.

## Product data

Prices were checked against retailer/brand pages on **October 1, 2026**. Retail prices and availability can change. Product names, trademarks and images remain property of their respective owners. This demo does not claim affiliation with Nike, Levi's, H&M, Walmart, Target or other listed brands/retailers.

## Run locally

Open `index.html` directly, or serve the folder with a simple static server.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy on GitHub Pages

1. Upload the contents of this folder to your repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your main branch and `/ (root)`.
5. Save.

## Customize

- Brand colors: `css/style.css`
- Products/prices/source links: `js/app.js`
- Store text and advisory phone: `index.html`
- Logo: `assets/images/logo.png`

## Checkout note

The bag is functional for demonstration, but the checkout button intentionally does **not** process payments. Connect a real ecommerce/payment backend before using the site for real transactions.
