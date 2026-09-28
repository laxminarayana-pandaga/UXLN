# Portfolio images

Drop real images here, then set `src` on the matching entry in `src/app/data/`.
Until `src` is set, the site shows a labelled placeholder with the expected path.

| Path | Used for |
| --- | --- |
| `portrait.jpg` | Home & About portrait (4:5) — `portfolio.data.ts` → `PROFILE.portrait` |
| `projects/<name>-cover.jpg` | Project card & case-study hero (16:10) — `projects.data.ts` → `cover` |
| `projects/<name>-01.jpg`, `-02.jpg` | Case-study solution gallery (4:3) — `projects.data.ts` → `gallery` |

Files in `public/` are served from the site root, so `public/assets/images/portrait.jpg`
is referenced as `/assets/images/portrait.jpg`.
