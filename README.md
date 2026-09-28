# DriveForgedAuto website

    npm install
    cp .env.example .env.local     # Windows PowerShell: copy .env.example .env.local
    npm run dev                     # http://localhost:3000
    npm run typecheck && npm run build

## Replace placeholders
- Photos: put files in `public/images/` and set `image` in `data/services.ts`, `src` in `data/gallery.ts`.
- Testimonials: `data/testimonials.ts` (set `placeholder: false` for real reviews; delete samples).
- Logo: `components/navbar/wordmark.tsx`.
- Social card: `app/opengraph-image.tsx` (or drop in an `opengraph-image.png`).
- Booking form: set `NEXT_PUBLIC_ENQUIRY_ENDPOINT` (see `lib/submit-enquiry.ts`). Until set, the form sends nothing and offers WhatsApp.
- Map: set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, otherwise a location card with a Directions button is shown.
- Set `NEXT_PUBLIC_SITE_URL` to the live domain (canonicals, sitemap, schema).
- WhatsApp/SMS links assume +91; change in `data/site.ts` if needed.
