# Nexus Quantitative (Nexus Quant)

> **"Logic beyond emotion. Speed beyond thought."**

Nexus Quantitative is a high-performance, aesthetically-driven platform representing a proprietary quantitative research and automated decision systems firm. Built at the intersection of mathematical precision and cutting-edge software engineering, the site features a "quantum/event-horizon" aesthetic with advanced real-time data visualizations and interactive system architecture diagrams.

## 🌑 Core Philosophy

We approach financial markets as **complex physical systems**. By bridging **stochastic research** with **deterministic software engineering**, we build decision engines that thrive in chaos.

- **Precision:** We prioritize data integrity and correctness over raw speculative speed.
- **Automation:** Removing human cognitive bias from critical execution workflows.
- **Resilience:** Systems designed to maintain 99.9% uptime in adversarial environments.

## ⚡ Technical Stack

- **Framework:** [Svelte 5](https://svelte.dev/) (Runes, Snippets)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [Skeleton UI v3](https://skeleton.dev/)
- **Graphics:** [Three.js](https://threejs.org/) (WebGL, Custom Shaders, Perlin Noise)
- **Runtime:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Internationalization:** [svelte-i18n](https://github.com/kaisermann/svelte-i18n) (8 languages: EN, PT, ES, RU, UK, ZH, JA, DE)
- **Testing:** [Vitest](https://vitest.dev/) (Unit), [Playwright](https://playwright.dev/) (E2E)

## 🔮 Key Features

### Animated Backgrounds & Shaders
- **Event Horizon Background:** A topographic mesh floating in a "void" black background, using Perlin 3D noise for slow, meditative wave displacement.
- **Mouse Gravity Well:** Subtle localized depressions on the topographic mesh that follow the user's cursor.

### Interactive System Architecture
- **Ark Streams Engine:** A real-time, event-driven trading intelligence platform built in Go, utilizing NATS JetStream as a persistent event bus for high-performance data processing.
- **Data Refinery:** A visual representation of data ingestion and processing pipelines.

### Global Accessibility
- **Multi-language Support:** Full localization for English, Portuguese, Spanish, Russian, Ukrainian, Chinese, Japanese, and German.
- **Adaptive Theme System:** Enhanced dark/light mode with flash prevention and persistent user preferences.
- **A11y Verified:** Comprehensive accessibility testing with Playwright and axe-core.

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation
```bash
git clone https://github.com/nexus-quantitative/nexus-quantitative.github.io.git
cd nexus-quantitative.github.io
npm install
```

### Development
```bash
npm run dev
```
The project will be available at `http://localhost:5173`.

### Production Build
```bash
npm run build
```

## 🧪 Testing

```bash
# Run all tests (Unit + E2E)
npm run test:all

# Unit tests (Vitest)
npm run test:run

# E2E tests (Playwright)
npm run e2e
```

## 📜 Documentation

- [Visual Identity Technical Doc](./VISUAL_IDENTITY_TECHNICAL_DOC.md) - Detailed breakdown of shader logic, color systems, and component architecture.
- [LinkedIn About](./LINKEDIN_ABOUT.md) - Brand positioning and mission statement.

## 🚢 Deployment

The project is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch, provided all tests pass.

---

© 2026 Nexus Quant. Logic beyond emotion. Speed beyond thought.
