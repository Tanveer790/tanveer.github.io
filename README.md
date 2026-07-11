# Sayed Tanveer Ahmad — Portfolio

A responsive, multilingual personal portfolio built with plain HTML, CSS and JavaScript.

## Languages

- English
- Urdu
- Arabic

Urdu and Arabic automatically use right-to-left layout.

## Project structure

```text
myportfolio/
├── index.html
├── css/
│   ├── style.css
│   └── rtl.css
├── js/
│   ├── main.js
│   ├── terminal.js
│   └── language.js
├── locales/
│   ├── en.json
│   ├── ur.json
│   └── ar.json
└── assets/
    ├── images/
    │   └── photo.jpg
    └── cv/
        └── Sayed_Tanveer_Ahmad_CV.pdf
```

## Run locally

Because the language files are loaded with `fetch()`, open the project through a local web server instead of double-clicking `index.html`.

### VS Code

Install the **Live Server** extension, then right-click `index.html` and select **Open with Live Server**.

### Python

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Before publishing

1. Replace `assets/images/photo.jpg` with your own image.
2. Replace `assets/cv/Sayed_Tanveer_Ahmad_CV.pdf` with your current CV.
3. Review job dates and certification details.
4. Update LinkedIn, email and WhatsApp links if needed.

## GitHub Pages

Open the repository settings, select **Pages**, choose the main branch and root folder, then save.
