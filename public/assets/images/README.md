# Portfolio images

Every project image slot starts with `src: '/assets/images/image-placeholder.png'`.
To add a real image, drop the file here (projects go in `projects/`) and change that
`src` in `src/app/data/` to the new path. `hint` holds the suggested filename and is shown
on top of the placeholder so you can tell the slots apart.

| Path | Used for |
| --- | --- |
| `portrait.jpg` | Home & About portrait (4:5) — `portfolio.data.ts` → `PROFILE.portrait` |
| `projects/<name>-cover.jpg` | Project card & case-study hero (16:10) — `projects.data.ts` → `cover` |
| `projects/<name>-01.jpg`, `-02.jpg` | Case-study solution gallery (4:3) — `projects.data.ts` → `gallery` |

Files in `public/` are served from the site root, so `public/assets/images/portrait.jpg`
is referenced as `/assets/images/portrait.jpg`.
