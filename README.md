# FairSay PWA Frontend

Lightweight frontend Progressive Web App (PWA) for FairSay — an employee rights escalation platform aimed at small and medium enterprises and startups (aligned with SDG 10).

Status: Initial / scaffolding stage

## Table of contents

- Project overview
- Tech stack
- Getting started
- Available scripts
- Project structure
- Contributing

## Project overview

This repository contains the UI for the FairSay PWA. It is built with React and Vite and provides the foundation for building an accessible, mobile-friendly frontend for reporting and escalating employee concerns internally.

This is an early-stage codebase — core features, design, and integrations are still to be implemented.

## Tech stack

- Framework: React
- Bundler / dev server: Vite
- Routing: react-router-dom
- Linting: ESLint

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

## Project structure (important files)

- `src/main.jsx` — app entry
- `src/App.jsx` — root app component
- `src/styles/index.css` — global styles
- `src/utils/constants.js` — shared constants
- `index.html` — Vite HTML template

## Next steps (suggested)

- Implement app routes and core screens (reporting form, escalation flow, admin view)
- Add PWA manifest and service worker if full offline support is desired
- Add tests and CI (lint + build checks)

## Contributing

1. Fork the repository and create a feature branch.
2. Open a pull request describing your changes.

If you're unsure where to start, open an issue to discuss ideas.

## License

MIT
---


