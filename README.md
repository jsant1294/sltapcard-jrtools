# JR Tools USA Tap Card — Standalone Bilingual Build

A standalone, mobile-first smart tap card for JR Tools USA.

## Included
- EN / ES toggle
- Call button
- Text button
- WhatsApp button
- Save Contact (VCF) download
- Shop Now button
- Lead capture form
- Placeholder background image support
- JR Tools-inspired styling

## Routes
- `/` -> redirect to `/jrtools`
- `/jrtools` -> main standalone tap card
- `/api/lead` -> placeholder lead endpoint
- `/api/vcard/jrtools` -> VCF download

## Quick start
```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:
```text
http://localhost:3000/jrtools
```
