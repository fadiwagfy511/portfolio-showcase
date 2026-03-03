# Portfolio Redesign — Enterprise Qatar Presentation

## Goal

Rebuild the portfolio as a premium, multi-page corporate website with English/Arabic RTL support, targeting high-profile enterprise clients in Qatar.

## Design System

- **Palette:** Navy #0F2044 · White #FFFFFF · Steel #475569 · Gold #C49A2D
- **Type:** Plus Jakarta Sans (headings) · Inter (body) · Cairo (Arabic)
- **Geometry:** Sharp 0–2px radius, editorial layout, oversized section numbers
- **Stack:** React + Vite + Tailwind + react-router-dom + i18next

## Tasks

- [x] Task 1: Install i18next + react-i18next + language detector
- [x] Task 2: Set up design system tokens in index.css + tailwind.config.cjs
- [x] Task 3: Create i18n setup (en/ar locales for all pages)
- [x] Task 4: Build NavBar (language switcher, RTL-aware, mobile menu)
- [x] Task 5: Build Footer (full corporate footer)
- [x] Task 6: Build HomePage (hero, stats, services overview, featured projects, CTA)
- [x] Task 7: Build AboutPage (story, mission/vision, values, milestones)
- [x] Task 8: Build ServicesPage (detailed services, process, industries, tech)
- [x] Task 9: Build ProjectsPage (filtered grid from existing data)
- [x] Task 10: Build ContactPage (professional form + company info)
- [x] Task 11: Enhance ProjectDetailPage (keep existing, style upgrade)
- [x] Task 12: Wire all routes in App.tsx + add scroll-to-top behavior
- [x] Task 13: Run lint + type check → verify build

## Done When

- [ ] All 6 pages render correctly (EN + AR)
- [ ] Language toggle works and switches RTL/LTR direction
- [ ] All routes work (Home, About, Services, Projects, Project Detail, Contact)
- [ ] npm run build completes with zero errors
