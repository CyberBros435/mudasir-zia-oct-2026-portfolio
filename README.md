# Mudasir Zia | SOC Analyst Portfolio

Personal portfolio of **Mudasir Zia**, an entry-level SOC analyst based in Mansehra, Pakistan. It shows Splunk detection projects, MITRE ATT&CK coverage, cybersecurity internships, certificates, letters and downloadable CVs.

- GitHub: [CyberBros435](https://github.com/CyberBros435)
- LinkedIn: [mudasir-zia](https://www.linkedin.com/in/mudasir-zia-a535243b5/)
- Email: ziamudasir744@gmail.com

## Highlights

- 13 SOC and SIEM home-lab projects with Splunk detections and incident write-ups
- Filterable project cards with preview and downloadable briefs
- Certificates and letters gallery: auto-scrolling rows, spotlight, tap or hover to select
- Zoomable document viewer (pinch, scroll, double-tap, drag) for certificates, letters and CVs
- Two downloadable PDF résumés
- 3D hero, animated counters, skill bars, light and dark theme
- Fully responsive, with a mobile menu and a pause-animations button

## Tech

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.

## Project structure

```
index.html            page markup (must stay in the root)
css/
  styles.css          main design
  responsive.css      phone and tablet layer
js/
  data.js             document lists, titles and CV paths
  ui.js               mobile menu, pause button, auto-scroll rows
  main.js             theme, filters, downloads, CV cards
  viewer.js           spotlight, zoom viewer, counters
assets/
  img/                portrait, logos, badges, CV previews
  docs/               certificates, letters, degrees, résumés (PDF)
```

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Hosted on Vercel from this repo. Every commit to the main branch redeploys automatically.
Settings: Framework "Other", no build command, output directory left blank.

## Updating content

- Change document titles, order or file paths in `js/data.js`.
- Replace an image or PDF by keeping the same file name.

## License

All content, certificates and documents belong to Mudasir Zia. Please do not reuse them without permission.
