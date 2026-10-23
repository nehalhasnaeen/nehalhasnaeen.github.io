# Shah Md Nehal Hasnaeen — Academic Website

Plain HTML / CSS / vanilla JavaScript. No build step, no dependencies — works on GitHub Pages as-is.

## Contents

```
index.html      the whole page (About, Research, Publications, Posters, Experience, Education, Contact)
style.css       layout, typography, dark/light themes (all colors are CSS variables at the top)
script.js       theme toggle + persistence, scroll-spy nav, footer year
assets/
  CV_Shah_Md_Nehal_Hasnaeen.pdf   linked from the "Download CV" button
  banner.jpg                      spare image, not used by the page
```

## Before you publish: add your photo

The page looks for `assets/profile.jpg`. Until that file exists, a circular "NH"
placeholder is shown. Drop any square-ish JPG or PNG named `profile.jpg` into
`assets/` and it will be used automatically (no code change needed).

## Preview locally

Just open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish on GitHub Pages

1. Create a new repository on GitHub (public).
2. Upload these files to the repository root — `index.html` must be at the root,
   not inside a subfolder.
   ```sh
   git init
   git add .
   git commit -m "Academic website"
   git branch -M main
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
3. In the repository: **Settings → Pages → Build and deployment → Source:
   Deploy from a branch → Branch: `main`, folder: `/ (root)` → Save.**
4. Your site appears at `https://<user>.github.io/<repo>/` after a minute or two.

To use a custom domain, add it under **Settings → Pages → Custom domain**, then
create a `CNAME` file (or a DNS record) pointing at the repository.

## Editing

- **Text and links** — all in `index.html`. Your name, the four profile links,
  every paragraph, publication and tag is plain markup there.
- **Colors and spacing** — the `:root` block at the top of `style.css` holds the
  palette as variables (`--bg`, `--card`, `--accent`, ...). Change a value once
  and it applies everywhere.
- **Photo size** — the `--avatar` size is set in the `.avatar` rule in
  `style.css` (and again in the mobile block near the bottom).
