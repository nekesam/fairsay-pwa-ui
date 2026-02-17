# FairSay PWA Frontend

Lightweight frontend Progressive Web App (PWA) for FairSay — an employee rights escalation platform aimed at small and medium enterprises and startups (aligned with SDG 10).

**Status:** Authentication & Onboarding Complete ✅

## Table of contents

- [Project overview](#project-overview)
- [What's Implemented](#whats-implemented)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Project overview

This repository contains the UI for the FairSay PWA. It is built with React and Vite and provides the foundation for building an accessible, mobile-friendly frontend for reporting and escalating employee concerns internally.

The frontend features a complete authentication and onboarding flow with responsive design optimized for both mobile and desktop experiences.

## What's Implemented

### ✅ Completed Features

**Authentication Flow:**
- Sign In page with password visibility toggle
- Sign Up page with validation and responsive layout
- Forgot Password flow with success state

**Multi-Step Onboarding (Step Indicator):**
- Complete Profile (Step 2/3) - Workplace information
- Employee Verification (Step 3/3) - File upload & consents
- Account Success page with status cards and next steps

**Design System:**
- Consistent color palette (FairSay Blue & Teal)
- Poppins & Inter typography
- Responsive grid layouts (side-by-side on desktop, stacked on mobile)
- Reusable components (Logo, StepIndicator)
- Form validation with error states
- File upload with drag-and-drop support

**Responsive Design:**
- Mobile-first approach with Tailwind CSS
- Optimized layouts for 375px (mobile), 768px (tablet), 1024px+ (desktop)
- Step indicator adapts for mobile (circles only) and desktop (with labels)
- Multi-column grids on desktop, single column on mobile

### 📋 Navigation Flow

```
/ → /sign-in → /sign-up → /complete-profile → /employee-verification → /account-success
              ↓
        /forgot-password
```

For detailed information about each page, see [UI Documentation](docs/UI-DOCUMENTATION.md).

## Tech stack

- **Framework:** React 19
- **Bundler / Dev Server:** Vite 7
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS v3
- **Fonts:** Google Fonts (Poppins, Inter)
- **Linting:** ESLint

See `package.json` for exact dependency versions.

## Getting started

Prerequisites

- Node.js (16+ recommended)
- npm (or yarn/pnpm)

Install

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build locally

```bash
npm run preview
```

Run linters

```bash
npm run lint
```

## Available scripts

- `dev`: start Vite dev server
- `build`: create production build
- `preview`: locally preview the production build
- `lint`: run ESLint

```
fairsay-pwa-ui/
├── docs/
│   └── UI-DOCUMENTATION.md          # Comprehensive UI documentation
├── src/
│   ├── components/
│   │   ├── Logo.jsx                 # Reusable FairSay logo
│   │   └── StepIndicator.jsx        # Onboarding progress indicator
│   ├── pages/
│   │   ├── SignIn.jsx               # Authentication pages
│   │   ├── SignUp.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── CompleteProfile.jsx      # Onboarding pages
│   │   ├── EmployeeVerification.jsx
│   │   └── AccountSuccess.jsx
│   ├── styles/
│   │   └── index.css                # Tailwind CSS + custom styles
│   ├── utils/
│   │   └── constants.js             # Shared constants
│   ├── App.jsx                      # Router configuration
│   └── main.jsx                     # App entry point
├── public/
│   └── manifest.json                # PWA manifest
├── index.html                       # Vite HTML template
├── tailwind.config.js               # Tailwind configuration
├── vite.config.js                   # Vite configuration
└── package.json                     # Dependencies and scripts
```

## Documentation

- **[UI Documentation](docs/UI-DOCUMENTATION.md)** - Complete guide to all pages, components, design system, and responsive behavior
- **[Implementation Summary](IMPLEMENTATION_SUMMARY.md)** - Technical implementation details and PRD alignment

## Next steps

**Backend Integration:**
- Connect authentication endpoints (sign in, sign up, password reset)
- Implement file upload to server
- Add token-based authentication
- Protected routes with auth guards

**New Features:**
- Educational Dashboard / Rights & Awareness Hub
- Email Verification Flow
- Complaint Submission System
- Whistleblowing Feature (anonymous reporting)
- Admin Portal
- AI-RAG System for assistance

**Technical Improvements:**
- Add unit tests and E2E tests
- Implement CI/CD pipeline
- Add loading states and error boundaries
- Enhance PWA features (service worker, offline mode)
- Accessibility audit and improvements(reporting form, escalation flow, admin view)
- Add PWA manifest and service worker if full offline support is desired
- Add tests and CI (lint + build checks)

## Contributing

1. Fork the repository and create a feature branch.
2. Open a pull request describing your changes.

If you're unsure where to start, open an issue to discuss ideas.

## License

MIT



