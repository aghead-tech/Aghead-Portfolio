# Professional Next.js Portfolio

A high-performance portfolio website built with **Next.js**, TypeScript, **Tailwind CSS v4** and **Gsap js**.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.17.0 or higher)
- [pnpm](https://pnpm.io/installation) (Recommended package manager)

---

## 🚀 Getting Started

### 01. Prerequisites

```bash
npm install -g pnpm

npm install next

pnpm install

npm install next
```

### 02. Fresh Installation (Recommended)

If you are setting up the project for the first time or facing issues, **run these commands exactly**. This will clean up any old conflicts and install everything correctly.

```bash
# 1. Clean old dependencies (PowerShell)
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
Remove-Item -Force pnpm-lock.yaml

# 2. Install dependencies (DO NOT use npm install)
1. Install dependencies:

npm install -g pnpm

npm install next

pnpm install

npm install next


# 3. Run the development server

pnpm dev

```

### 03. Run Development Server

To start the local development server:

```bash
pnpm dev
# or
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### 04. Building for Production

To create an optimized production build:

```bash
pnpm build
# or
npm run build
```

To run the production build locally:

```bash
pnpm start
# or
npm run start
```

---

### 05. Project Structure

This project uses a clean, professional directory structure:

```
portfolio/
├── components/          # Reusable React Components
│   ├── layout/          # Layout Components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Main.tsx
│   │   ├── NavigationBar.tsx
│   │   └── SEO.tsx
│   ├── sections/        # Page Sections
│   │   ├── AboutPreviewSection.tsx
│   │   ├── ContactPreviewSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ExpertiseSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioPreviewSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ServicesPreviewSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── TechMarqueeSection.tsx
│   └── ui/              # UI Components
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── PhysicsBadges.tsx
│       ├── Preloader.tsx
│       ├── ThemeContext.tsx
│       └── ... (and more)
├── data/                # Static Content & Configuration
│   ├── aboutData.ts
│   ├── contactData.ts
│   ├── heroData.ts
│   ├── portfolioData.ts
│   └── ... (and more)
├── hooks/               # Custom React Hooks
│   ├── useButtonGsapEffects.ts
│   ├── useGsapFadeIn.ts
│   ├── useHeaderScrollAnimation.ts
│   ├── usePreloadContext.tsx
│   ├── useScrollAnimation.ts
│   └── ... (and more)
├── lib/                 # Utilities & Libraries
│   ├── analytics.ts
│   ├── constants.ts
│   └── seo.ts
├── pages/               # Application Routes
│   ├── _app.tsx         # Global App Wrapper
│   ├── _document.tsx    # Document Structure
│   ├── 404.tsx          # Custom 404 Page
│   ├── about.tsx        # About Page
│   ├── contact.tsx      # Contact Page
│   ├── index.tsx        # Homepage
│   ├── portfolio.tsx    # Portfolio Page
│   └── services.tsx     # Services Page
├── public/              # Static Assets
│   ├── fonts/
│   ├── images/
│   └── ...
├── services/            # API Services
│   ├── api.ts
│   └── emailService.ts
├── styles/              # Global Styles
│   ├── globals.css
│   └── ...
├── utils/               # Helper Functions
│   ├── formatDate.ts
│   └── slugify.ts
├── next.config.mjs      # Next.js Config
├── tailwind.config.ts   # Tailwind Config
└── tsconfig.json        # TypeScript Config
```

---

### 06. Common Troubleshooting

**Additional Tips:**

- **Path Aliases:** Use `@/components/...` instead of `../../components`
- **TypeScript:** All components use `.tsx` extension
- **Styling:** Use Tailwind utility classes or `styles/` for custom CSS

---

## 🛠️ Tech Stack & Key Libraries

| Category          | Technology                                                                  |
| ----------------- | --------------------------------------------------------------------------- |
| **Framework**     | [Next.js 15](https://nextjs.org/) (Pages Router)                            |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)                               |
| **Styling**       | [Tailwind CSS v4](https://tailwindcss.com/)                                 |
| **Animation**     | [GSAP](https://greensock.com/gsap/)                                         |
| **Smooth Scroll** | [Lenis](https://github.com/studio-freight/lenis)                            |
| **Physics**       | [Matter.js](https://brm.io/matter-js/)                                      |
| **UI Components** | [CSS UI](https://www.tailwindcss.com/), [Lucide Icons](https://lucide.dev/) |
| **Forms**         | [React Hook Form](https://react-hook-form.com/)                             |

---

## 📜 Available Scripts

| Command      | Description                 |
| ------------ | --------------------------- |
| `pnpm dev`   | Start development server    |
| `pnpm build` | Create production build     |
| `pnpm start` | Run production server       |
| `pnpm lint`  | Run ESLint for code quality |

---

## 📄 License

`Aghead Alkoko` by `@Aghead Alkoko 2026`
