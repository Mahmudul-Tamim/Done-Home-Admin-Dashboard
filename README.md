# Done Admin Dashboard (interactive prototype)

Coded from the Figma page "05 -Admin Dashboard". Plain HTML, CSS and JavaScript, no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

    npx serve .

Log in with any email and the password `admin123`.

## Deploy to Vercel

Option A, from the dashboard: create a new project, drag this folder in (or import the Git repository),
keep Framework Preset on "Other", leave the build command and output directory empty, then Deploy.

Option B, from the terminal inside this folder:

    npx vercel        # preview
    npx vercel --prod # production

## Files

- `index.html`  entry page, loads fonts (Geist, Instrument Serif), styles and scripts
- `styles.css`  design tokens from the Figma variables plus all component styles
- `data.js`     sample data (customers, professionals, bookings, prices, reports, content pages)
- `app.js`      routing, pages, modals and interactions
- `assets/`     logo and admin photo exported from Figma (replace with full-resolution files if needed)

## Notes

- All data is sample data held in memory. Changes reset when the page reloads.
- Pages use hash routes (for example `#customers`, `#booking-job-24810`), so any static host works.
- To connect a backend, replace the arrays in `data.js` with API calls and persist changes in the action handlers in `app.js`.
