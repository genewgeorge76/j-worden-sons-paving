# Copilot Instructions for J. Worden & Sons Asphalt Paving

## Project Overview

This is the official website for **J. Worden & Sons Asphalt Paving** — a 4th-generation family-owned asphalt paving company operating since 1984. The site serves as the primary web presence for the business, highlighting services, service areas, credentials, and contact information. The company is independent from other local paving entities and has been vetted by commercial clients including KFC, Arby's, and Taco Bell.

**Business goals of the site:**
- Establish trust and credibility as a long-standing, family-owned business
- Showcase asphalt paving services (driveways, parking lots, commercial paving, repairs, sealcoating, etc.)
- Generate leads via a clear call-to-action and contact form
- Display service areas, testimonials, and photo galleries of completed projects
- Surface licensing, insurance, and commercial vetting credentials

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager:** `npm`
- **Linter:** ESLint (with Next.js rules)
- **Formatter:** Prettier
- **Testing:** Jest + React Testing Library
- **Deployment:** Vercel (or any Node.js-compatible static/SSR host)
- **Image handling:** Next.js `<Image />` component for automatic optimization

---

## Project Structure

```
/
├── .github/
│   └── copilot-instructions.md   # This file
├── public/
│   ├── images/                   # Static images (logos, project photos, etc.)
│   └── favicon.ico
├── src/
│   ├── app/                      # Next.js App Router pages and layouts
│   │   ├── layout.tsx            # Root layout (fonts, metadata, nav, footer)
│   │   ├── page.tsx              # Home page
│   │   ├── services/             # Services page(s)
│   │   ├── gallery/              # Photo gallery
│   │   ├── about/                # Company history and credentials
│   │   └── contact/              # Contact form and map
│   ├── components/               # Reusable UI components
│   │   ├── ui/                   # Generic UI primitives (Button, Card, etc.)
│   │   ├── layout/               # Header, Footer, Navigation
│   │   └── sections/             # Page-level sections (Hero, Services, Testimonials, etc.)
│   ├── lib/                      # Utility functions and helpers
│   ├── styles/                   # Global CSS / Tailwind config
│   └── types/                    # Shared TypeScript types
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Code Style & Conventions

### TypeScript
- Use **TypeScript** for all new files (`.ts` / `.tsx`). Avoid `any` — use proper types or `unknown`.
- Define shared data shapes in `src/types/`.
- Prefer `interface` for object shapes, `type` for unions/aliases.

### React & Next.js
- Use **functional components** with hooks only; no class components.
- Use the **Next.js App Router** (`src/app/`) for routing.
- Prefer **Server Components** by default. Add `"use client"` only when client-side interactivity is required (e.g., forms, modals, animations).
- Use `next/image` (`<Image />`) for all images; always supply `alt` text that is descriptive for accessibility.
- Use `next/link` (`<Link />`) for internal navigation.
- Keep pages thin — extract logic and UI into named components under `src/components/`.

### Tailwind CSS
- Style exclusively with Tailwind utility classes. Avoid writing custom CSS except in `globals.css` for base/reset rules.
- Follow a **mobile-first** responsive approach: default styles are mobile, then `sm:`, `md:`, `lg:`, `xl:` breakpoints.
- Group Tailwind classes in a consistent order: layout → spacing → sizing → typography → color → effects.
- Avoid inline `style` props unless absolutely necessary.

### Components
- One component per file. File name matches the exported component name (e.g., `HeroSection.tsx` exports `HeroSection`).
- Use **named exports** for components, not default exports (except for Next.js pages/layouts, which require default exports).
- Co-locate component-specific tests in `__tests__/` subdirectories next to the component, or in `*.test.tsx` files alongside the source file.

### Naming
- **Files/folders:** `camelCase` for utilities/lib files; `PascalCase` for component files.
- **Variables/functions:** `camelCase`.
- **Constants:** `SCREAMING_SNAKE_CASE` for true module-level constants.
- **CSS classes:** Tailwind utilities only — no BEM or custom class names.

---

## Key Business Content Constraints

When generating or editing content for this site, follow these guidelines:

1. **Brand Voice:** Professional, trustworthy, and approachable. Emphasize family legacy (4 generations), longevity (since 1984), and quality craftsmanship.
2. **Independence:** The company is **independent** from other local paving entities. Do not conflate or associate J. Worden & Sons with any competitor or similarly named business.
3. **Commercial Credentials:** The company has been vetted by and has served commercial clients including KFC, Arby's, and Taco Bell. These may be referenced as trust signals where appropriate.
4. **Services:** Focus on asphalt-specific services — paving, repaving, patching, pothole repair, sealcoating, line striping, and commercial/residential lot paving. Do not imply concrete or other non-asphalt services unless confirmed.
5. **Contact / Lead Gen:** Every page should have a clear path to the contact form or phone number. A call-to-action (CTA) button should be visible above the fold on the home page.
6. **Accessibility:** All pages must meet WCAG 2.1 AA standards — proper heading hierarchy, sufficient color contrast, keyboard-navigable interactive elements, and descriptive alt text on all images.

---

## Running the Project Locally

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Run tests
npm test
```

---

## Testing Approach

- Write tests with **Jest** and **React Testing Library**.
- Test components for correct rendering, user interactions, and accessibility.
- Use `screen.getByRole` and other accessible queries instead of `getByTestId` wherever possible.
- Mock external dependencies (e.g., fetch calls, Next.js router) in unit tests.
- Aim for meaningful coverage of form logic and interactive components; do not obsess over coverage percentage alone.

---

## Environment Variables

Sensitive configuration (API keys, form submission endpoints, email service credentials) must be stored in `.env.local` and **never committed to the repository**. Reference them as `process.env.NEXT_PUBLIC_*` for client-safe values or `process.env.*` for server-only values.

Common variables:
```
NEXT_PUBLIC_SITE_URL=https://jworden-sons-paving.com
CONTACT_FORM_ENDPOINT=...
GOOGLE_MAPS_API_KEY=...
```

---

## Contribution Guidelines

- Keep PRs focused and small.
- All new UI components should be responsive and accessible.
- Run `npm run lint` and `npm test` before opening a PR.
- Write descriptive commit messages (imperative mood: "Add hero section" not "Added hero section").
- Images should be compressed and placed in `public/images/`. Use descriptive, kebab-case filenames (e.g., `parking-lot-sealcoating.jpg`).
