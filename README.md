# Portfolio

A personal portfolio site built as an extension of my resume, focused on clear
presentation of my projects and experience. Recruiter-first: fast to scan, fast
to load, and designed so animation never gets in the way of reading.

**Live:** [rahul-singha-portfolio.vercel.app](https://rahul-singha-portfolio.vercel.app)

## Tech stack

| | |
| --- | --- |
| Framework | Next.js (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | lucide-react |
| Analytics | Vercel Analytics |
| Hosting | Vercel |

No animation library — every transition is CSS or a small
`IntersectionObserver`.

## Updating the content

All content lives in `/data`. Nothing in `/components` needs editing to change
what the site says.

| File | Holds |
| --- | --- |
| `data/profile.ts` | Name, title, contact details, About text, links |
| `data/skills.ts` | Technical skills by category |
| `data/projects.ts` | Project entries |
| `data/hackathons.ts` | Hackathon entries |
| `data/education.ts` | Education history |
| `data/certifications.ts` | Certifications |
| `data/types.ts` | The shape of every entry above |

To add a project, copy an existing object in `projects.ts` and change the
values. `types.ts` will flag a missing or misspelled field before it reaches
the browser.

Every section renders only if its data file has content. Empty an array and
both the section and its navigation link disappear — no placeholder, no empty
heading.

## Project structure

```
app/
  layout.tsx        fonts, metadata, JSON-LD
  page.tsx          lists the sections in order
  globals.css       design tokens: colours, fonts, motion
components/
  Nav.tsx           sticky bar with scroll-spy
  Footer.tsx
  sections/         one file per resume section
  ui/               shared pieces used by more than one section
data/               all content (see above)
public/             resume PDF and static assets
```

## Running locally

```bash
npm install
npm run dev
```

Opens on http://localhost:3000.

```bash
npm run build    # production build
```

## Notes

- **Design tokens** are defined once in the `@theme` block of
  `app/globals.css`. Changing `--color-signal` there recolours every accent on
  the site.
- **Accessibility**: semantic sections with `aria-labelledby`, a skip link,
  visible focus rings, and a global `prefers-reduced-motion` rule that disables
  all motion without hiding any content.
- **SEO**: metadata and `Person` structured data are generated from
  `data/profile.ts`, so they can never drift from what the page says.