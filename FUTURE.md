# Future Direction — Post v0.6.0

> 📋 **Discussion document.** This file is meant to seed a GitHub issue that
> charts the next chapter for **Hello World App** after v0.6.0 is complete.
> It is **not a commitment**. Every direction below still needs community
> input before any work begins (see [Suggesting changes](#-suggesting-changes)).

---

## Where we are

As of **v0.6.0**, every item in the public roadmap (v0.1.0 → v0.6.0) has been
shipped:

| Version | Theme | Status |
| --- | --- | --- |
| v0.1.0 | Initial release (CRA + React 18 + TypeScript) | ✅ |
| v0.2.0 | Quality & automation (ESLint, Prettier, Husky, Commitlint) | ✅ |
| v0.3.0 | Interactive feature & coverage foundation | ✅ |
| v0.4.0 | GitHub Pages deployment | ✅ |
| v0.5.0 | Dark mode | ✅ |
| v0.6.0 | Vite migration (CRA → Vite, Jest → Vitest) | ✅ |

The result is a small, polished starter that demonstrates a modern
React + TypeScript + Vite workflow with strict typing, unit tests, dark
mode, and a live GitHub Pages demo. It is intentionally minimal — a
**foundation**, not a framework.

## Strategic questions

Before any new feature is built, the maintainer would like input on three
strategic questions:

1. **What is this project for?** A reference for newcomers? A playground
   for tooling experiments? Both?
2. **How big should it grow?** Stay minimal (one-screen app), or expand
   into a small reusable component library?
3. **Who is the audience?** First-time contributors, experienced React
   devs, or both?

The answers will shape which of the directions below (if any) is worth
pursuing next.

---

## Candidate directions

These mirror the four items listed in [`ROADMAP.md`](./ROADMAP.md) under
"Future (v1.0.0+)". They are presented in the order they appear in the
roadmap, **not in order of priority**.

### 1. Storybook for component documentation

**What it would look like.** Add [Storybook](https://storybook.js.org/) and
author a story for every existing component (`App`, `useTheme`). Future
contributors could preview components in isolation and see all variants
(light/dark, with/without a name, etc.).

**Why consider it.** The current demo shows the app in its default state
only. Storybook would make the component surface visible, lower the cost
of adding a new component, and double as living documentation.

**Trade-offs.** Storybook adds a non-trivial dev dependency and a second
build pipeline. For a one-component app, it may be over-engineering.

**Discussion questions.**
- Would stories be useful given the current component count (≈ 1)?
- Should stories be **required** for new components, or optional?

### 2. Internationalization (i18n)

**What it would look like.** Integrate a small i18n library
([`react-i18next`](https://react.i18next.com/) or
[`Lingui`](https://lingui.dev/)) and extract the two user-facing strings
("Hello, World!" and the name-prompt placeholder) into message catalogs.

**Why consider it.** Demonstrates a common real-world concern in a way the
current codebase does not. Useful for learners who have not seen i18n in
a React app before.

**Trade-offs.** Adds a runtime dependency and a build step for catalog
compilation. With only two strings, the pedagogical payoff is small.

**Discussion questions.**
- Is i18n worth showcasing in a starter that aims to be minimal?
- If yes, which library best matches the project's "zero magic" feel?

### 3. End-to-end tests with Playwright

**What it would look like.** Add [Playwright](https://playwright.dev/) and
author a small E2E suite that exercises the happy path: load the page,
type a name, see the personalized greeting, toggle the theme, refresh
the page, and confirm the theme persists.

**Why consider it.** Unit tests cover `App` and `useTheme`, but there is
no test that proves the **production build** actually works in a real
browser. A green GitHub Pages deploy is not the same as a green E2E run.

**Trade-offs.** Playwright is heavier than Vitest and would be the first
test runner in the project that requires a real browser. CI runtime
would increase.

**Discussion questions.**
- Is an E2E suite appropriate at the current project size?
- Should it run on every PR, or only on `master`?

### 4. Extract `App` into a reusable component library

**What it would look like.** Move `App.tsx`, `App.css`, and `useTheme.ts`
out of `src/` and into a separate package (for example,
`packages/ui` in a pnpm-workspace, or a standalone `hello-world-ui`
package). The top-level `src/` would become a thin consumer that
imports and composes the components.

**Why consider it.** Turns the project from "an app" into "an app + a
library", which is a more interesting reference for anyone who has ever
wondered how to publish a React component.

**Trade-offs.** This is the **largest** change by far. It would
introduce a monorepo tool (Turborepo, Nx, or pnpm workspaces),
restructure the build, and require a v1.0.0 release strategy. It may
be the wrong call for a project whose stated purpose is to be a starter.

**Discussion questions.**
- Is "reusable component library" compatible with "minimal starter", or
  do the two goals conflict?
- If pursued, what is the **minimum viable version** of this idea?

---

## 🙋 Suggesting changes

The project's own governance documents —
[`CONTRIBUTING.md`](./CONTRIBUTING.md) and
[`ROADMAP.md`](./ROADMAP.md) — require that any significant change be
**discussed in a GitHub issue before a pull request is opened**.

If you would like to champion one of the directions above, or propose a
new one, please:

1. Open a GitHub issue titled along the lines of
   `Proposal: <direction name>`.
2. Link to this file so future readers can see the full context.
3. Reference the relevant checklist item in
   [`ROADMAP.md`](./ROADMAP.md#-future-v100).

---

<p align="center">Made with ❤️ and 😴 — happy discussing!</p>
