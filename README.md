# Shah Mansoor — Portfolio

A single-page, animated React portfolio built as a code-editor–themed UI (tabs, terminal, gutters)
to match a frontend engineer's world. Built with **React + Vite + Framer Motion**.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> /dist
npm run preview    # preview the production build
```

## Project structure

```
src/
  assets/
    images/        <- put your profile photo + project screenshots here
    resume/         <- put your resume PDF here (or use /public, see below)
  components/       <- one component per section (Hero, About, Skills, ...)
  data/
    portfolioData.js  <- ALL editable content lives here (single source of truth)
  styles/           <- one CSS file per component + global index.css (design tokens)
  App.jsx
  main.jsx
```

## Where to plug in your content

Everything you need to personalize lives in **`src/data/portfolioData.js`**. Search for
`REPLACE_ME` — every placeholder is tagged so you can find them quickly:

- `personal.photo` — your profile photo (import it, then assign, see below)
- `personal.resumeUrl` — link/path to your resume PDF
- `personal.email`, `personal.phone`
- `personal.socials` — GitHub / LinkedIn / Twitter / Instagram links
- `projects[].image`, `.liveUrl`, `.codeUrl` — project screenshots and links
- `education[].institute` — your university name
- `certifications[].credentialUrl`

### Adding your photo / project images

Drop files into `src/assets/images/`, then either:

```js
// at the top of portfolioData.js
import profilePhoto from "../assets/images/profile.jpg";
// ...
personal.photo = profilePhoto;
```

or place images in `public/` and reference them by absolute path, e.g. `"/profile.jpg"`.

### Adding your resume

Place your PDF in `public/` (e.g. `public/resume.pdf`) and set:

```js
resumeUrl: "/resume.pdf",
```

## Design notes

- Theme: dark, "code editor" motif — the nav bar is styled like editor tabs (`about.tsx`,
  `skills.json`, etc.), the hero includes a typed terminal animation, and content blocks use
  line-number gutters, all tying back to the frontend-engineer subject matter.
- Fonts: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono** (code accents).
- Animations: Framer Motion `whileInView` scroll reveals on every section, hover
  micro-interactions on cards/buttons/icons, floating hero photo, animated skill bars,
  scroll-spy navigation with a sliding underline.
- All colors/fonts/spacing are defined as CSS variables in `src/styles/index.css` — change the
  palette in one place and it propagates everywhere.
- Respects `prefers-reduced-motion`.

## Sections included

Hero · About · Skills · Experience · Education · Projects · Certifications · Services ·
Achievements · Contact · Footer
