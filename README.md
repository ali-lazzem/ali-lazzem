# ALI LAZZEM — Engineering Lab Portfolio

Personal portfolio of **Ali Lazzem**, Advanced Technology Engineering student (Software • AI • Automation • Industrial Tech).
React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide icons. Dark-first, fast, accessible.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview  # serve dist locally
```

## Edit content

Everything lives in **`src/data/portfolio.ts`** — personal info, nav, projects, experience,
education, journey, skills, stats, beyond, social links. No UI edits needed for content updates.

## Add a project

1. Append an entry to `projects` in `src/data/portfolio.ts` (copy an existing one).
2. Set `categories` from: `AI | Software | FinTech | Automation | Cybersecurity | Industrial`.
3. Set `image: 'my-shot.webp'`, drop the file in `public/assets/` (see `ASSET_GUIDE.md`).
4. Add `featured: true` to surface it in Selected Work. Missing image → auto placeholder.

## Replace images

See **`public/assets/ASSET_GUIDE.md`** for exact filenames, dimensions and formats.
Just drop files in — `SmartImage` swaps placeholders automatically.

## Contact

Direct channels only (email copy button, `mailto:` link, GitHub, Instagram) — no form, no backend needed.

## Deploy (Cloudflare Pages)

1. Push to GitHub. 2. Cloudflare Dashboard → Pages → Connect repo.
3. Build command `npm run build`, output `dist`.
4. Update `canonical` / `og:url` in `index.html` to your domain. Same steps work for Netlify/Vercel.

## Shortcuts & extras

- `Ctrl/⌘ + K` command palette (sections, projects, links). Type `sudo hire ali` 🐀.
- Sections: `#about #work #experience #stack #journey #projects #beyond #contact`.
- `#project-<id>` deep-links open the case-study modal.
