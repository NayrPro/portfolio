# Portfolio — Freelance Developer

Personal portfolio built with Next.js 15, TypeScript and CSS Modules. Dark tech aesthetic, fully static, deployable on Vercel in one click.

## Live demos

| Project | Stack | URL |
|---|---|---|
| Vidal Électricité | Next.js · Formspree | [vidal-electricite.vercel.app](https://vidal-electricite.vercel.app/) |
| Maison Castellane | Next.js 15 · React 19 · CartContext | [maison-castellane.vercel.app](https://maison-castellane.vercel.app/) |
| Studio Lumière | React · Stepper · Animations | [studio-lumiere-six.vercel.app](https://studio-lumiere-six.vercel.app/) |

## Tech stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — CSS Modules + CSS variables
- **Contact form** — Formspree (`mykawbjw`)
- **Images** — Next.js `<Image>` with local assets in `/public`
- **Deployment** — Vercel (static export)

## Project structure

```
src/
├── app/
│   ├── globals.css       # CSS variables, reset, body background
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Page assembly
│   └── page.module.css   # Dividers
└── components/
    ├── Nav.tsx            # Fixed navbar with availability badge
    ├── Hero.tsx           # Hero section with terminal animation
    ├── Projects.tsx       # Project cards grid
    ├── Services.tsx       # Services grid
    ├── Contact.tsx        # Formspree contact form (client component)
    └── Footer.tsx
public/
├── vidal.png
└── castellane.png
```

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
```