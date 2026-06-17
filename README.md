# Lagunitas Craft Beer Landing Page

A responsive single-page landing page for Lagunitas craft beer. Built with semantic HTML, modular SCSS, vanilla JavaScript, Vite, GSAP ScrollTrigger, and Lenis smooth scrolling.

**Live Demo:** [https://maria-kapiturko-lagunitas-site.vercel.app](https://maria-kapiturko-lagunitas-site.vercel.app)

---

## Overview

The goal of this project is to create a clean, modern landing page without heavy UI frameworks. The current implementation focuses on a structured HTML document, BEM-style SCSS modules, reusable design tokens, and scroll-driven motion.

---

## Tech Stack

- **Markup:** HTML5 with semantic landmarks and BEM-style class hooks
- **Styles:** SCSS split into abstracts, base, components, and layout modules
- **Architecture:** CSS custom properties for colors, typography, spacing, z-index, and transitions
- **Layout:** Flexbox, CSS Grid, fluid spacing, and fluid typography with `clamp()`
- **Animations:** GSAP 3 with ScrollTrigger
- **Smooth Scroll:** Lenis
- **Build Tool:** Vite 8

---

## Key Engineering Features

### 1. Performance & Scroll Sync

- **Local npm dependencies:** GSAP, ScrollTrigger, and Lenis are imported through the Vite module graph instead of runtime CDN globals.
- **Smooth animation loop:** Lenis is connected to the GSAP ticker so scroll-driven animations stay synchronized with smooth scrolling.
- **ScrollTrigger refresh:** The animation module refreshes ScrollTrigger after load to reduce incorrect trigger calculations after assets and fonts affect layout.

### 2. Modern CSS Layouts

- **Modular SCSS:** Styles are organized into `abstracts`, `base`, `components`, and `layout` layers at the file-system level.
- **BEM-style naming:** Components and layout blocks use predictable class names such as `.header__menu-toggle`, `.feature-card__value`, and `.product-item__img`.
- **Fluid UI tokens:** Typography, spacing, header height, and sidebar width scale with `clamp()` tokens.
- **Responsive layout:** Sections use Flexbox and CSS Grid with breakpoint-based adjustments.

### 3. Accessibility Foundation

- **Landmarks:** The page uses `header`, `nav`, and `main` landmarks.
- **Icon hiding:** Decorative Remix Icon glyphs are hidden from assistive technologies with `aria-hidden="true"`.
- **Visible focus:** Global `:focus-visible` rules are included for keyboard navigation.
- **Reduced motion baseline:** CSS transitions and animations are minimized under `prefers-reduced-motion: reduce`.

### 4. Code Architecture

- **Single Vite entrypoint:** `src/js/main.js` imports the SCSS bundle, Lenis styles, smooth scrolling, and animation modules.
- **Config alignment:** Vite aliases point to real project folders such as `src/scss` and `src/js`.
- **Linting setup:** ESLint, Stylelint, and Prettier are configured through `npm run check` and `npm run fix`.

---

## Folder Structure

```text
src/
├── js/
│   ├── modules/
│   │   ├── animations.js     # GSAP timelines and scroll effects
│   │   └── smoothScroll.js   # Lenis smooth scroll configuration
│   └── main.js               # Main script entry point
├── scss/
│   ├── abstracts/
│   │   └── _variables.scss   # CSS custom properties and design tokens
│   ├── base/
│   │   ├── _reset.scss       # Reset, focus-visible, reduced-motion baseline
│   │   └── _typography.scss  # Global typography rules
│   ├── components/
│   │   ├── _button.scss      # Reusable button styles
│   │   └── _card.scss        # Feature and flavor card styles
│   ├── layout/
│   │   ├── _header.scss      # Header and sidebar navigation styles
│   │   ├── _hero.scss        # Hero section
│   │   ├── _section.scss     # Shared page section layout
│   │   ├── _about.scss       # About and metrics section
│   │   ├── _mouthfeel.scss   # Mouthfeel section
│   │   ├── _flavors.scss     # Flavor cards section
│   │   ├── _availability.scss # Product availability section
│   │   └── _recipes.scss     # Recipes banner section
│   └── style.scss            # Primary SCSS entry file
└── index.html                # Semantic BEM-structured layout

```

---

## Getting Started

To run this project locally, use the following terminal commands:

```bash
# Clone the repository
git clone https://github.com/taracamary/lagunitas-site.git

# Go to project directory
cd lagunitas-site

# Install dependencies
npm install

# Start local development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

```

---

## 👩‍💻 Contact

- **Developer:** Maria Kapiturko — Frontend & HTML Developer
- **Location:** Minsk, Belarus (Available for global remote cooperation)
- **LinkedIn:** [linkedin.com/in/taracamary](https://www.linkedin.com/in/taracamary)
- **GitHub:** [github.com/taracamary](https://github.com/taracamary)

---

_This project is part of a frontend portfolio focused on production-level layout structure, styling architecture, and UI interactions_
