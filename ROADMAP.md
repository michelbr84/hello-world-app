# Roadmap

This roadmap tracks the planned evolution of **Hello World App** — a minimal
React + TypeScript starter. It reflects what has already shipped, what is
next, and longer-term ideas. Items may move as priorities shift.

> Status legend: `[x]` shipped  ·  `[ ]` planned

---

## ✅ Shipped

### v0.1.0 — Initial release

- [x] React 18 + TypeScript scaffold via Create React App
- [x] Strict TypeScript typing (no implicit `any`)
- [x] Functional `App` component using React hooks
- [x] Production-ready build with code splitting and hashed assets
- [x] Jest + React Testing Library integration
- [x] Sample unit test for the `App` component
- [x] `.gitignore` and `.gitattributes` for a clean, cross-platform repository
- [x] MIT License (`LICENSE.txt`)
- [x] `README.md` with badges, getting-started guide, and developer tooling notes

### v0.2.0 — Quality & automation

- [x] **ESLint** with a shared React + TypeScript configuration (`.eslintrc.json`, `.eslintignore`)
- [x] **Prettier** with a shared configuration (`.prettierrc`)
- [x] **Husky** pre-commit and commit-msg hooks (`.husky/`)
- [x] **lint-staged** to run ESLint (`--fix`) and Prettier (`--write`) on staged files
- [x] **Commitlint** enforcing the Conventional Commits format
- [x] `CONTRIBUTING.md` with contribution guidelines, branching strategy, and PR process
- [x] `CHANGELOG.md` to track notable changes per release
- [x] **GitHub Actions CI** (`.github/workflows/ci.yml`) — `npm ci`, lint, test (`--watchAll=false --ci`), and build on every push and pull request to `master`

---

### v0.3.0 — Interactive feature & coverage foundations

Focus: small, demo-quality feature additions and better test/documentation accuracy.

- [x] Add a tiny interactive feature (e.g., a name-greeting input or a click counter)
- [x] Add at least one additional unit test for the new feature
- [x] Add an `.editorconfig` for editor consistency
- [x] Add a code coverage report (e.g., a `coverage/` CI artifact)
- [x] Enable Dependabot for automated dependency updates
- [x] CI: read the Node version from `.nvmrc` instead of hardcoding `18`

---

## 💡 Future (v1.0.0+)

Longer-term directions; not yet committed. Discussions should happen in an issue before any PR.

- [ ] Migrate from Create React App to **Vite** for faster dev server and build
- [ ] Add **Storybook** for component documentation
- [ ] Internationalization (i18n) support
- [ ] Dark mode toggle
- [ ] End-to-end tests with **Playwright**
- [ ] Publish a demo build to **GitHub Pages**
- [ ] Extract `App` into a small, reusable component library

---

## 🙋 Suggesting changes

Open an issue first to discuss significant changes before sending a PR.
See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the contribution workflow
and the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.
