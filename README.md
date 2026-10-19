# Portfolio — AI Software Engineer

<!-- A single-page portfolio built with **React + TypeScript + Vite**, hand-written CSS, and zero UI
dependencies. Every word on the page comes from one file, so the site can be updated without
touching components.

- Design: warm paper / deep sage palette, Fraunces + Inter, light + dark themes
- Motion: scroll reveals, staggered hero entrance, scroll progress, subtle hover states
- Lightweight: one CSS file per layer, no images (project art is inline SVG), ~78 kB gzipped JS

---

## Quick start

```bash
npm install      # once
npm run dev      # http://localhost:3000
```

Other scripts:

| Command             | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Dev server with hot reload (port 3000)           |
| `npm run build`     | Type-check, then build static files into `dist/` |
| `npm run preview`   | Serve the built `dist/` locally                  |
| `npm run typecheck` | Type-check only                                  |

---

## Editing the site

**Everything you see is in [`src/content/resume.ts`](src/content/resume.ts).** Open it, change a
string, save, and the page updates. No component code required.

### 1. Before you publish — four fields to change

```ts
export const profile = {
  name: "Your Name",              // ← your name (header + footer)
  monogram: "YN",                 // ← 1–2 letters in the header badge
  location: "Mumbai, India",      // ← shown in the hero, about and contact
  email: "you@example.com",       // ← used by every "email" link
  resumeFile: "",                 // ← see "Résumé PDF" below
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
  ],
};
```

Each project also carries its own link buttons (`links`), which currently point at
`https://github.com/your-username/…` placeholders — swap those for the real repositories.

### 2. What each block controls

| Export       | Renders as                                                       |
| ------------ | ---------------------------------------------------------------- |
| `profile`    | Header brand, footer copyright, contact links                    |
| `hero`       | Eyebrow, big headline, intro paragraph, buttons, fact card, stats |
| `about`      | "Evaluation-first engineering" section + three principles        |
| `skills`     | The 6-cell technical toolkit grid                                |
| `experience` | Work + volunteer timeline (add as many roles as you like)        |
| `projects`   | Project cards, alternating artwork side                          |
| `education`  | Three education cards with coursework                            |
| `navItems`   | Header navigation (order matters; ids must match section ids)    |
| `footer`     | Footer note and copyright line                                   |

### 3. Recipes

**Add a project** — copy an existing object in `projects` and edit it:

```ts
{
  id: "my-project",              // must be unique
  title: "Project name",
  subtitle: "One-line description",
  period: "Jan 2026 — Mar 2026",
  award: "Optional badge",       // remove the line to hide the badge
  highlights: [
    { lead: "Outcome", text: "What you built and the measurable result." },
    { text: "A bullet without a bold lead-in also works." },
  ],
  tech: ["Python", "FastAPI"],
  links: [{ label: "GitHub Repo", href: "https://github.com/your-username/my-project" }],
}
```

Link buttons render as outlined pills under the tech chips. A link whose label contains
`GitHub` (case-insensitive) automatically gets the GitHub mark next to it; every link gets the
outward arrow. Add as many links per project as you like — `Live demo`, `Write-up`, and so on.

- Artwork: projects are matched to illustrations by `id` in
  [`src/components/Projects.tsx`](src/components/Projects.tsx) (`ArtworkFor`). `supplier-risk` and
  `tomato-vision` have their own drawings; **anything else falls back to the document illustration**.
  Add a new SVG in [`src/components/Artwork.tsx`](src/components/Artwork.tsx) and one line in
  `ArtworkFor` if you want bespoke art.
- Bullets render best with 3–4 `highlights`.

**Re-order or hide something** — array order is display order. To hide an entry, delete it from the
array (or comment it out). To hide a whole section, remove its export usage in
[`src/App.tsx`](src/App.tsx) and its `navItems` entry.

**Rebrand the colours** — all design tokens live at the top of
[`src/styles/base.css`](src/styles/base.css). Change `--accent` (sage) for a different accent, and
`--bg` / `--ink` for the paper and text colours. Dark-theme values sit in the `[data-theme="dark"]`
block right below.

**Change fonts** — the Google Fonts link is in [`index.html`](index.html); the family variables are
`--font-display`, `--font-sans`, `--font-mono` in [`src/styles/base.css`](src/styles/base.css).

**Turn motion down / off** — reveals and the ambient background already respect
`prefers-reduced-motion`. To remove reveals entirely, delete the `.reveal` rules in `base.css`.

**Scroll-spy, theme, progress bar** — the small hooks in [`src/hooks`](src/hooks) and
[`src/components/ScrollProgress.tsx`](src/components/ScrollProgress.tsx). They need no changes.

### 4. Résumé PDF

The header "Résumé" button opens the browser print dialog, where the page renders as a clean,
compact CV (header, buttons, and artwork are hidden by the print stylesheet). To use a real PDF
instead:

1. Drop the file in `public/`, e.g. `public/resume.pdf`
2. Set `resumeFile: "/resume.pdf"` in `src/content/resume.ts`

The button will then download/open that file.

---

## Project layout

```
index.html                    theme boot script + fonts + meta
src/
  content/resume.ts           ← ALL site content lives here
  App.tsx                     section order
  components/                 Header, Hero, About, Skills, Experience,
                              Projects, Education, Contact, Footer, Artwork, …
  hooks/                      useTheme, useActiveSection
  styles/
    base.css                  design tokens, reset, typography, ambient background, motion
    portfolio.css             section + component styles, responsive, print stylesheet
```

---

## Deploying

The build output in `dist/` is fully static — any host works.

```bash
npm run build
```

- **Netlify / Vercel / Cloudflare Pages**: build `npm run build`, publish directory `dist`
- **GitHub Pages**: push `dist/` to the `gh-pages` branch. If the site lives at
  `username.github.io/repo-name/`, set `base: "/repo-name/"` in [`vite.config.ts`](vite.config.ts)
  before building. -->
