# Mudasir Zia – Portfolio

Static site (no build step). `index.html` must stay in the repo root.

```
index.html          page markup
css/styles.css      original design
css/responsive.css  phone/tablet layer (menu, zoom viewer, touch fixes)
js/data.js          document lists, titles, CV paths  <- edit text/paths here
js/ui.js            mobile menu, pause-animations button, auto-scroll rows
js/main.js          page features (theme, filters, downloads, CV cards)
js/viewer.js        certificate spotlight, zoom viewer, counters
assets/img          portrait, logos, badges, CV previews
assets/docs         certificates, letters, achievements, degrees, resumes (PDF)
```

Replace an image with a better original by keeping the same file name.
Vercel settings: Framework "Other", no build command, output directory blank.
