# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed

- Finally removed the three dead Create React App stub files from the Git
  working tree (`public/index.html`, `src/index.tsx`, `src/setupTests.ts` —
  all 0-byte files). They were documented as "Removed" in the v0.6.0
  CHANGELOG entry but had been left committed to `master`. This commit
  closes that doc-vs-reality gap.

## [0.6.0] - 2026-07-01

### Added

- Migrated the project from Create React App to **Vite 5** for a faster dev server and a leaner production build. The new HTML entry is the root `index.html`, which loads `src/main.tsx` as an ES module.
- Switched unit tests from Jest to **Vitest** (jsdom environment). The setup file is now `src/test-setup.ts`, registered via `setupFiles` in `vite.config.ts`. The `npm test` script uses Vitest's native non-watch flags (`--run --ci` in CI) for one-shot runs.
- New `vite.config.ts` that consolidates the dev server, build, and Vitest configuration (including the v8 coverage reporters).
- Added `.github/CODEOWNERS` so the repository owner is auto-assigned as the default reviewer for all pull requests.

### Changed

- `README.md` rewritten to reflect the Vite + Vitest toolchain: the project is now described as "built with Vite" (no longer "scaffolded with Create React App"), the project tree shows the root `index.html` and `src/main.tsx`, the scripts table no longer mentions `eject`, and the testing/deployment references point to the Vite/Vitest docs.
- `ROADMAP.md` updated: the Vite migration is moved from "Future" to a new "v0.6.0 — Vite migration" section under "Shipped" with all items checked off.

### Removed

- The three dead Create React App stub files that were left behind after the Vite migration: `public/index.html`, `src/index.tsx`, and `src/setupTests.ts` (all 0-byte files, no longer referenced anywhere in the project; Vite + Vitest only use the root `index.html`, `src/main.tsx`, and `src/test-setup.ts`). This closes the last gap of the CRA → Vite migration and makes v0.6.0 truly complete.

## [0.5.0] - 2026-07-01

### Added

- Dark mode toggle: a small theme-switch button (☀️/🌙) in the top-right
  corner of the page. The current theme is persisted to `localStorage`
  and the initial theme respects the user's `prefers-color-scheme` media
  query. An inline pre-mount script in `index.html` applies the
  theme before React loads to avoid a flash of the wrong color scheme.
  All hardcoded colors in `src/App.css` are now expressed as CSS custom
  properties (`:root` for light, `[data-theme="dark"]` for dark) so the
  rest of the app automatically adapts. Two additional unit tests cover
  the toggle button and the `data-theme` switch. `src/test-setup.ts` now
  polyfills `window.matchMedia` for Vitest's jsdom environment.

## [0.4.0] - 2026-07-01

### Added

- `homepage` field in `package.json` pointing at the GitHub Pages URL so
  Create React App generates correct absolute asset paths under the
  `/hello-world-app/` sub-path.
- New `deploy` job in `.github/workflows/ci.yml` that builds the app and
  publishes it to GitHub Pages using the official
  `actions/configure-pages` + `actions/upload-pages-artifact` +
  `actions/deploy-pages` actions. Runs only on push to `master` and only
  after the `quality` job succeeds. Scoped to the `pages: write`,
  `id-token: write`, and `contents: read` permissions.
- `workflow_dispatch` trigger so the CI workflow can be re-run manually
  from the Actions tab (useful for redeploying without a code change).
- Build artifact (`build/`) is now uploaded on non-PR runs for quick
  debugging via the Actions UI.
- README updated with a "Live Demo" badge, a new `### Deployment` section
  explaining how the pipeline works, and the one-time repository setting
  required to enable GitHub Pages via Actions.

### Changed

- `quality` job now declares an explicit `permissions: contents: read`
  block to follow the principle of least privilege.
- `ROADMAP.md` GitHub Pages item moved from "Future" to a new `v0.4.0`
  "Shipped" section.
- `TODO.md` coverage item corrected from `[ ]` to `[x]` (it shipped in
  v0.3.0 but was left stale).

## [0.3.0] - 2026-07-01

### Added

- Tiny interactive feature: a name-greeting input in `App` that renders a
  personalized "Hello, {name}!" message once the user types a non-blank name.
- Two additional unit tests in `App.test.tsx` covering the personalized
  greeting and whitespace trimming behaviour.
- `.editorconfig` at the repository root for consistent editor defaults
  (charset, EOL, indentation).
- `test:coverage` npm script (`vitest run --coverage`) to generate
  a Vitest coverage report locally and in CI.
- CI step that generates a coverage report and uploads the `coverage/`
  directory as a build artifact (always runs, even when the test step fails).
- Dependabot configuration (`.github/dependabot.yml`) for weekly grouped
  dependency updates (with React 18.x ignored while the project targets v18).

### Changed

- CI workflow now reads the Node version from `.nvmrc` instead of a hardcoded
  value, keeping local and CI environments in sync.
- ROADMAP v0.3.0 status reflects the items shipped in this release.

## [0.2.0] - 2026-07-01

### Added

- **ESLint** with a shared React + TypeScript configuration (`.eslintrc.json`, `.eslintignore`) for consistent static analysis.
- **Prettier** with a shared configuration (`.prettierrc`) for consistent code formatting.
- **Husky** Git hooks (`.husky/pre-commit`, `.husky/commit-msg`) for enforcing pre-commit and commit-message checks.
- **lint-staged** to run ESLint (`--fix`) and Prettier (`--write`) on staged files before each commit.
- **Commitlint** (`@commitlint/config-conventional`) to enforce the [Conventional Commits](https://www.conventionalcommits.org/) format on commit messages.
- **`CONTRIBUTING.md`** with contribution guidelines, branching strategy, coding standards, commit-message conventions, and PR process.
- **`CHANGELOG.md`** to track notable changes per release.
- **GitHub Actions CI** workflow (`.github/workflows/ci.yml`) that runs `npm ci`, lint, test (`--run --ci`), and `npm run build` on every push to `master` and on every pull request to `master`.

### Changed

- `package.json` scripts: added `lint`, `lint:fix`, `format`, `format:check`, and `prepare` (Husky setup).
- `package.json`: added a top-level `lint-staged` configuration mapping `*.{ts,tsx}` to ESLint (`--fix`) and Prettier (`--write`), and `*.css` to Prettier (`--write`).

## [0.1.0] - 2025-06-03

### Added

- Initial public release of the **Hello World App** starter.
- **React 18** + **TypeScript** scaffolded with [Create React App](https://create-react-app.dev/).
- Strict TypeScript typing across the codebase (no implicit `any`).
- Functional components and React Hooks (`useState`).
- **Jest** + **React Testing Library** integration (configuration in `package.json`).
- Production build with code splitting and hashed assets.
- `.gitignore` and `.gitattributes` configured for a clean, cross-platform repository.
- **MIT License** (`LICENSE.txt`).
- Polished `README.md` with badges, getting-started guide, available scripts, and developer tooling documentation.

[Unreleased]: https://github.com/michelbr84/hello-world-app/compare/v0.6.0...HEAD
[0.6.0]: https://github.com/michelbr84/hello-world-app/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/michelbr84/hello-world-app/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/michelbr84/hello-world-app/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/michelbr84/hello-world-app/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/michelbr84/hello-world-app/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/michelbr84/hello-world-app/releases/tag/v0.1.0
