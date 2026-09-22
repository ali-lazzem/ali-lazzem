# ASSET GUIDE — exactly what to provide

Drop files into this folder (`/public/assets/`). Filenames must match **exactly**.
If a file is missing, the site shows a designed placeholder — **nothing breaks**.

Global rules: prefer **WebP** (photos/screenshots) or **PNG** (transparent portrait).
Compress with https://squoosh.app or `npx @squoosh/cli`. Lazy-loading + async decoding are automatic.

---

## REQUIRED (hero / identity)

### `profile.png` — REQUIRED
- Purpose: primary personal portrait, shown large in the **Hero** (`#top`) and smaller/cropped in **About** (`#about`) inside the `PortraitFrame` component (`src/components/PortraitFrame.tsx`).
- Recommended format: PNG or WebP. The code tries `/assets/profile.png` first, then falls back to `/assets/profile.webp` automatically — see `PROFILE_SOURCES` in `PortraitFrame.tsx` to change the order or filename.
- Recommended resolution: at least **1000 × 1000 px**. Size < 400KB (compress with https://squoosh.app).
- Recommended composition: head and upper body, clean background, good lighting, face clearly visible, professional or smart-casual clothing.
- Transparent PNG is optional — a normal photo background is handled beautifully (rounded frame, blue border, dark well).
- If the file is missing: a polished placeholder ("ALI LAZZEM" + technical reticle graphic) is shown instead. **No broken image, nothing else breaks.**
- Alt used: "Portrait of Ali Lazzem".

### `og-image.png`
- Purpose: link preview (WhatsApp / LinkedIn / X).
- Dimensions: **1200×630px** PNG/JPG. Must contain: "Ali Lazzem — Software × AI × Automation × Industrial Technology" on obsidian `#080B10` with Electric Blue `#3B82F6` and Cyan `#22D3EE` accents.
- Referenced in `index.html` as `/og-image.png`.

### `cv-ali-lazzem.pdf`
- Purpose: "CV.pdf" button in Hero. If absent, button still renders (link 404s — add the file before sharing).

---

## PROJECT PREVIEWS — current status

| File | Status | Appears in |
|---|---|---|
| `stenet-dashboard.png` | ✅ present | STE NET case + Selected Work |
| `winiflousik.jpg` | ✅ present | Wini Flousik |
| `medirag.png` | ✅ present | MediRAG |
| `hand-detector.png` | ✅ present | Hand scroll |
| `trading-bot.png` | ✅ present | Trading bot |
| `book-cover.png` | ✅ present | Security book |
| `instagram-account.png` | ✅ present | Beyond / 90K card |
| `apex-hackathon.jpg` | ✅ present | APEX1.0 |
| `enstab-forum.webp` | ❌ missing (placeholder shown) | ENSTAB Forum |

Filenames must match `src/data/portfolio.ts` exactly. Any format works (PNG/JPG/WebP) —
just keep the real extension. Missing files show a designed placeholder, nothing breaks.

Alt text for each is already defined in `src/data/portfolio.ts` — update the `alt` field if your image differs.

---

## HOW REPLACEMENT WORKS
`src/components/SmartImage.tsx` tries `/assets/<filename>` and renders
`<ProjectImagePlaceholder>`-style graphics on error. Just add the file — no code change needed.
Then rebuild (`npm run build`) and redeploy.
