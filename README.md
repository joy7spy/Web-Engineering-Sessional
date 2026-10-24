# PlayHub: Free Online Gaming Portal (Lab 1)

A lightweight gaming portal with a homepage, featured banner, category filter, Popular and New sections, ad spaces, a premium placeholder, a top-scores board, game pages and footer pages. It uses plain HTML, CSS and JavaScript, so there is nothing to install.

## Run on your laptop
Open a terminal in this folder and run one of these, then visit http://localhost:8000
- Python: `python -m http.server 8000`
- Node: `npx serve .`
- VS Code: install the Live Server extension and click "Go Live"

Use a local server rather than double-clicking `index.html`, so the saved scores work between pages.

## Add, remove or organise games (no developer needed)
Edit `games.js`. Each game is one line with `id`, `title`, `cat` (one of the six categories), `src`, `color`, `date` and `plays`.
- To add a game, put its HTML5 file in `games/` (or use a legal embed URL as `src`) and add a line.
- To remove a game, delete its line.
- Only embed games whose licence allows it.

## Monetisation
- Ad spaces are the grey boxes (sidebar 300x250, game page 728x90). Replace them with your ad network code once the site is approved.
- The Premium box is a placeholder for a future ad-free membership.

## Before going live
Replace the text in `site.js` (About, Contact, Privacy Policy, Terms), set a real domain and HTTPS, and keep the page titles and descriptions in each HTML file up to date for SEO.

## Push to GitHub
```bash
git init
git add .
git commit -m "Add PlayHub gaming portal"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
