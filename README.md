# Designer Tools Hub

Static Astro + TypeScript + Tailwind CSS website with seven browser-based tools.

## Requirements

Node.js 20.19+ or 22.12+ and npm.

## Local development

```bash
npm install
npm run dev
npm test
npm run check
SITE_URL=https://your-real-domain.example npm run build
npm run preview
```

## Cloudflare Pages

1. Push this folder to a GitHub repository.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: Astro. Build command: `npm run build`. Output directory: `dist`.
4. Add environment variable `SITE_URL` to the final public URL (e.g. `https://your-project.pages.dev`). Redeploy to update canonical URLs and sitemap.
5. Set Node version 22 via `NODE_VERSION=22` if required.

No functions, server, database, login, API keys or advertising code are required. Review Cloudflare's current free-tier limits independently.

## Before public launch

- Replace placeholder site URL with the actual public address.
- Add a real, verified contact channel to `/contact/`.
- Review privacy/terms with the actual hosting setup and jurisdiction; they are starter drafts, not legal advice.
- Test image processing across browsers and mobile devices; confirm file-size limits and print output.
- Test accessibility with keyboard and a screen reader.
- Do not claim production readiness until `npm run build`, `npm test`, `npm run check`, and manual smoke tests pass.

## Notes

- The compressor exports JPEG; transparent source images will lose transparency.
- Image resizing can change aspect ratio, and animation is not retained.
- The palette generator offers variations, not guaranteed accessible contrast.
- QR codes use the bundled `qrcode` library and no remote QR API.
- Invoice printing uses the browser's Print / Save as PDF functionality; no data persistence.
- This project intentionally includes no analytics or advertising scripts.
