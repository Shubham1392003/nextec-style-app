<div align="center">

# 🪨 NEXTEC. — Brutalist Creative Agency & ATS

### Awwwards-Winning Editorial Web Experience & Applicant Tracking System

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=vercel)](https://nextec-style-app.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)

*An experimental, high-performance web experience that prioritizes bold aesthetics, whitespace, and refined motion design. Includes a fully functional Applicant Tracking System (ATS) dashboard for managing creative talent.*

</div>

---

## ✨ Features at a Glance

<table>
<tr>
<td width="50%">

### 🎯 Core Agency Features
- 🎨 **Brutalist UI** — High-contrast editorial layout with massive typography and raw borders
- 🖱️ **Custom Global Cursor** — GSAP-powered magnetic cursor with difference blending
- 🎞️ **Cinematic Motion** — Framer Motion staggering, text-reveals, and layout morphing
- 📜 **Smooth Scrolling** — Lenis integration for butter-smooth parallax physics
- 🖼️ **Interactive Portfolio** — Horizontal scroll-hijacking with fullscreen layout animations
- 📱 **Fully Responsive** — Off-canvas mobile menus and touch-friendly swipe carousels

</td>
<td width="50%">

### 🚀 ATS Dashboard Features
- 🔐 **Brutalist Auth** — Premium split-screen login page with form validation
- 📊 **Productivity Analytics** — Recharts-powered application velocity & pipeline charts
- 📋 **Job Requisitions** — Status-badged internal job board
- 🔍 **Candidate Pipeline** — Debounced search, status filtering, and dynamic pagination
- 👤 **Talent Modal** — In-depth candidate evaluation modal with Zustand state management
- ⏱️ **Zero-Latency UI** — Instant optimistic updates when modifying applicant statuses

</td>
</tr>
</table>

---

## 🚀 Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP_ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=react&logoColor=white)

</div>

### Frontend Architecture
- **Next.js 15** (App Router) — Server-side optimized structure
- **TypeScript** — Strict, scalable type safety across all components
- **Tailwind CSS v4** — Custom brutalist design system (ecru backgrounds, thick borders)
- **Framer Motion** — `AnimatePresence`, `layoutId`, and spring-based physics
- **GSAP** — `quickSetter` for performant cursors, `ScrollTrigger` for velocity-based parallax footers
- **Lenis** — Global requestAnimationFrame smooth scrolling
- **Zustand** — Managing global ATS candidate state seamlessly without prop drilling
- **Recharts** — Responsive charting for internal HR analytics
- **Lucide React** — Minimalist scalable vector icons

---

## 📂 Project Structure

```
nextec-style-app/
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 dashboard/       # Internal ATS Dashboard layout & routing
│   │   │   ├── 📁 candidates/  # Candidate pool, search, and filters
│   │   │   ├── 📁 jobs/        # Active job requisitions
│   │   │   ├── layout.tsx      # Off-canvas responsive ATS sidebar
│   │   │   └── page.tsx        # Analytics & insights overview
│   │   ├── 📁 login/           # Secure ATS authentication gateway
│   │   ├── layout.tsx          # Root layout with Global Cursor & SEO
│   │   ├── page.tsx            # Main agency landing page assembly
│   │   ├── template.tsx        # Framer Motion global page transitions
│   │   └── globals.css         # Brutalist tokens & utility classes
│   │
│   ├── 📁 components/
│   │   ├── 📁 ats/             # ATS-specific modular components
│   │   │   └── CandidateModal.tsx
│   │   ├── 📁 ui/              # Reusable design system
│   │   │   ├── brutalist-button.tsx
│   │   │   ├── brutalist-card.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── portfolio-section.tsx
│   │   │   ├── process-timeline.tsx
│   │   │   ├── who-we-are.tsx
│   │   │   ├── navbar.tsx
│   │   │   └── gsap-footer.tsx
│   │   ├── GlobalCursor.tsx    # High-performance GSAP cursor
│   │   └── SmoothScrolling.tsx # Lenis provider wrapper
│   │
│   ├── 📁 lib/
│   │   ├── dummy-data.ts       # Static JSON talent & pipeline data
│   │   └── utils.ts            # Tailwind merge utilities
│   │
│   └── 📁 store/
│       └── useAtsStore.ts      # Zustand state for candidate management
│
├── .env.example                # Required environment variables
├── README.md                   # You are here!
└── package.json                
```

---

## 🎨 Design System

NEXTEC uses a raw, editorial aesthetic heavily inspired by Swiss design and Brutalism:

```css
/* Brutalist Palette */
--color-background: #F3ECE7;  /* Warm editorial beige */
--color-foreground: #111111;  /* High-contrast ink */
--color-teal: #2A5A5B;        /* Accent: Muted Teal */
--color-coral: #D95D51;       /* Accent: Vibrant Coral */
--color-blue: #3A5F7D;        /* Accent: Slate Blue */

/* Core Typography */
--font-sans: 'Inter', sans-serif;
--font-heading: 'Space Grotesk', sans-serif;
--font-pixel: 'VT323', monospace;

/* Signature Elements */
.brutal-border { border: 2px solid var(--color-foreground); }
.brutal-shadow { box-shadow: 6px 6px 0px 0px var(--color-foreground); }
.hide-scrollbar { scrollbar-width: none; }
```

---

## 🛠️ Advanced Motion Workflows

### 1️⃣ **Global Page Transitions**
Wrapped the Next.js router in a `template.tsx` overlay that fades out smoothly via Framer Motion, preventing harsh unstyled flashes and creating an application-like experience.

### 2️⃣ **Scroll-Spy Process Timeline**
The timeline uses `useInView` to dynamically scale and dim inactive steps while maintaining a sticky desktop tracking bar (`useScroll` + `useSpring`), perfectly adapted into a vertical stack for mobile.

### 3️⃣ **Shared Layout Modals**
The Portfolio section uses Framer Motion's `layoutId`. When a project image is clicked, it visually detaches from the horizontal flex container and morphs into a fullscreen editorial modal layout.

### 4️⃣ **GSAP Velocity Parallax**
The `<GsapFooter />` registers `ScrollTrigger` to track scrolling speed. As the user reaches the bottom, the massive typography slides up underneath the content based on scrub velocity, staggering the social links concurrently.

---

## 🚧 Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Shubham1392003/nextec-style-app.git
cd nextec-style-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to view the agency site.
Visit `http://localhost:3000/login` to access the ATS.

---

## ☁️ Vercel Deployment

This project is perfectly optimized for Vercel Edge deployments.

### 1. Build Verification
```bash
npm run build
```
*Ensures zero hydration mismatches and optimal static generation.*

### 2. Deploy
```bash
git push origin main
# Vercel auto-deploys on every push
```

*Lighthouse optimizations include full ARIA accessibility, semantic HTML5 structuring, and rich Open Graph + Twitter Card SEO metadata.*

---

## 👨💻 Author

<div align="center">

### **Developed & Built by Shubham Madhav Kendre**

*Frontend Engineer & Creative Developer*

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://sk-coral.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Shubham1392003)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/shubham.x003/)

</div>

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ and lots of ☕**

*Built with Next.js 15 · Tailwind CSS v4 · GSAP · Framer Motion · Zustand*

</div>
