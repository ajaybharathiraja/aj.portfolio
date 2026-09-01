# Personal Portfolio Website

A clean, modern, minimal developer/academic portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization
- **Images:** Add your headshot or photo to `src/components/Hero.tsx`. Replace project placeholders in `src/components/Projects.tsx`.
- **Colors:** The primary accent color (emerald) is defined in `src/app/globals.css`. You can change `--accent` in the `:root` and `.dark` blocks.
- **Form:** Connect the contact form in `src/components/Contact.tsx` by setting the `action` attribute to your backend (e.g., Formspree, Resend).

## Deployment
This project is fully ready to be deployed on Vercel with zero configuration. Simply import your GitHub repository into Vercel and it will automatically detect the Next.js setup.
