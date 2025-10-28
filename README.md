# 905 Detailing — Preview Landing

A pixel-clean, deploy-ready Next.js (App Router) + Tailwind landing page inspired by the screenshot you provided.

## Quick Start (local)

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- Replace `/public/logo.png` with the real logo (keep same filename).
- Replace `/public/client*.jpg` with real faces or remove that block in `app/page.tsx`.
- Edit the headline, paragraph, and button text in `app/page.tsx`.
- Set your countdown target by changing the `to` prop in `<Countdown />`.

## Deploy to Vercel via GitHub

1. **Create a new GitHub repo** (e.g., `905-detailing-preview`).  
2. Initialize & push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USER>/905-detailing-preview.git
   git push -u origin main
   ```
3. Go to **Vercel > New Project** → **Import Git Repository** → pick your repo.
4. Framework should auto-detect **Next.js**. Keep defaults and click **Deploy**.
5. After deploy, you’ll get a live URL. Connect a custom domain in Vercel → Domains (optional).

### Environment / Forms
The email capture is a placeholder (client-side only). To collect real emails, wire one of these:
- **Formspree**: Create a form and replace the submit handler with a POST to their endpoint.
- **Vercel Serverless**: Create `app/api/subscribe/route.ts` and POST to it from the form, then store in your DB or a Google Sheet.
- **Resend / Mailchimp**: Call their APIs from a server route.

## Tech

- Next.js 14 (App Router)
- Tailwind CSS 3
- TypeScript for components (no extra setup required)

---

© 2025 905 Detailing
