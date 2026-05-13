# Delta Green Trust Center — Setup

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000/trust
npm run build      # static export → /out
```

## Deploying

The project is configured for **static export** (`output: "export"` in `next.config.js`).
Upload `./out` to any static host (Vercel, Cloudflare Pages, S3+CloudFront).

> **Vercel:** Remove `output: "export"` from `next.config.js` to use SSR/ISR and
> keep the API route (`/api/document-request`) live.

## Checklist before going live

### Brand tokens
Edit `tailwind.config.ts` → `theme.extend.colors.dg` to match exact hex values
from deltagreen.energy brand guidelines.

### Real content to fill in
- `components/Certifications.tsx` — replace placeholders:
  - `[Certifying Body Name]`
  - `[Certificate Number]`
  - `[Expiry Date]`
- `public/documents/` — add real PDFs:
  - `iso-27001-certificate.pdf`
  - `pentest-attestation.pdf`
  - `dpa-template.pdf`
- `public/pgp-key.asc` — add real PGP public key
- `data/subprocessors.json` — keep current and update `lastUpdated` on each change

### Logo
Replace the SVG placeholder in `components/Nav.tsx` → `<DGLogo>` with the real
Delta Green SVG logo mark.

### Form backend
`app/api/document-request/route.ts` — uncomment and configure one of:
- **Resend / Postmark / SendGrid** for email delivery to `security@deltagreen.energy`
- **HubSpot** to create a CRM deal for each request

### Subprocessor notifications
`components/Subprocessors.tsx` → `handleSubscribe` — wire up to your email
list provider (Mailchimp, HubSpot, custom endpoint).

### Analytics & cookie banner
If adding analytics (Plausible, GA4…), add a cookie consent banner.
Plausible is GDPR-friendly with no consent required if configured correctly.

## File structure

```
app/
  layout.tsx          Root layout + SEO meta
  page.tsx            Redirects / → /trust
  trust/
    page.tsx          Main Trust Center page (client component, holds form state)
  api/
    document-request/
      route.ts        POST endpoint for NDA document requests

components/
  Nav.tsx             Sticky nav with anchor links + mobile menu
  Hero.tsx            Dark hero: badges, headline, CTAs
  Certifications.tsx  ISO 27001 card, GDPR card, NIS2 statement
  SecurityPractices.tsx  8-card grid of security control areas
  Documents.tsx       Public docs + gated docs with request trigger
  Privacy.tsx         GDPR links, DPA download, data transfer table
  Subprocessors.tsx   Table from JSON + subscription form
  Disclosure.tsx      Responsible disclosure policy + incident SLA
  Footer.tsx          Footer with links
  RequestForm.tsx     Full-screen modal — form → /api/document-request

data/
  subprocessors.json  Source of truth for the subprocessors table
  documents.ts        Public and gated document lists
```
