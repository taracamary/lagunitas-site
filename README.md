# Lagunitas Craft Beer Landing Page

A responsive and accessible single-page website for Lagunitas craft beer. Built from scratch to practice modern CSS features (Layers, Subgrid, Container Queries) and smooth scroll animations

**Live Demo:** [https://maria-kapiturko-lagunitas-site.vercel.app](https://maria-kapiturko-lagunitas-site.vercel.app)

---

## 📝 Overview

The main goal of this project is to create a clean, modern landing page without using heavy frameworks like React or Tailwind. Everything is built using semantic HTML5, modular SCSS (BEM methodology), and vanilla JavaScript

---

## 🛠️ Tech Stack

- **Markup:** Semantic HTML5 (WCAG 2.2 accessible standard)
- **Styles:** SCSS with CSS Cascading Layers (`@layer`)
- **Animations:** GSAP 3 & ScrollTrigger
- **Smooth Scroll:** Lenis
- **Build Tool:** Vite 8

---

## 💻 Key Engineering Features

### 1. Performance & Scroll Sync

- **Smooth Animation Loop:** Lenis smooth scrolling is connected directly to the GSAP animation loop (`gsap.ticker`). This prevents lag and makes animations sync perfectly with the mouse wheel
- **Tab Switching Fix:** Added `gsap.ticker.lagSmoothing(0)` so animations do not jump or glitch when a user returns to the website tab after a break
- **Optimized Performance:** Used `ScrollTrigger.batch()` for loading card elements. This reduces CPU usage when animating many cards at the same time

### 2. Modern CSS Layouts

- **CSS Layers (`@layer base, components, utilities`):** Organized CSS into logical steps. This isolates the CSS reset from component styles and helps avoid using `!important`
- **CSS Subgrid:** Used `grid-template-rows: subgrid` for product packaging cards. Now, elements inside different cards (images, text, buttons) align perfectly with each other, even if the content has different sizes
- **Container Queries (`@container`):** Metric cards use container width instead of screen width to change their layout. This makes components independent from the viewport
- **Native Height Transitions:** Used `interpolate-size: allow-keywords` to animate elements smoothly from `height: 0` to `height: auto` using pure CSS

### 3. Better Accessibility (a11y)

- **Safari List Fix:** Added `role="list"` to `<ul>` elements where list styles were removed. This fixes a well-known Safari bug that breaks screen reader lists
- **Keyboard Navigation:** The mobile menu features a simple JavaScript focus trap. When the menu is open, the keyboard focus stays inside it. Focus returns to the burger button when closed
- **Reduced Motion Support:** If a user disables animations in their operating system, the website automatically turns off all CSS transitions via root variables (`prefers-reduced-motion: reduce`)
- **Semantic HTML:** Used correct tags like `<dl>`, `<dt>`, `<dd>` for metrics (ABV/IBU) and `<figure>` with `<figcaption>` for video/media wrappers

### 4. Code Architecture

- **Two-Tier Design Tokens:** Centralized variables are split into primitives (raw colors) and semantic roles (like `--color-brand`, `--color-surface-base`)
- **Clean Dark Mode:** Implemented dark theme using the `[data-theme="dark"]` attribute with an automatic `@media (prefers-color-scheme: dark)` fallback. It works instantly without any flashing effects
- **Fluid Layouts:** Typography and spacing scale smoothly from mobile screens (`375px`) to desktop screens (`1440px`) using the CSS `clamp()` function

---

## 📁 Folder Structure

```text
src/
├── js/
│   ├── modules/
│   │   ├── animations.js     # GSAP timelines and scroll effects
│   │   ├── nav.js            # Mobile navigation and focus trap
│   │   └── scroll.js         # Lenis smooth scroll configuration
│   └── main.js               # Main script entry point
├── styles/
│   ├── base/
│   │   ├── _a11y.scss        # Focus states, skip-links, reduced motion rules
│   │   ├── _reset.scss       # Modern CSS reset with dvh support
│   │   └── _typography.scss  # Fluid text sizing via clamp tokens
│   ├── components/
│   │   ├── _nav.scss         # Header navigation styles
│   │   ├── _hero.scss        # Main section with text background clipping
│   │   ├── _product.scss     # Product info and container-query stats
│   │   ├── _flavors.scss     # Cards with scroll-snap and grid features
│   │   └── _bottle.scss      # Fixed beer bottle styles for GSAP targets
│   ├── layout/
│   │   ├── _breakpoints.scss # Media query mixins
│   │   └── _grid.scss        # Main container and layout primitives
│   └── main.scss             # Primary styles entry file
└── index.html                # Semantic BEM-structured layout

```

---

## 🚀 Getting Started

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
