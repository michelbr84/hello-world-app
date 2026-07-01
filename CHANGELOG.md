# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
- README updated with a "Live Demo" badge, a new `## Deployment` section
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
- `test:coverage` npm script (`react-scripts test --coverage --watchAll=false`)
  to generate a Jest/Istanbul coverage report locally and in CI.
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
- **GitHub Actions CI** workflow (`.github/workflows/ci.yml`) that runs `npm ci`, `npm run lint`, `npm test -- --watchAll=false --ci`, and `npm run build` on every push to `master` and on every pull request.

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

[Unreleased]: https://github.com/michelbr84/hello-world-app/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/michelbr84/hello-world-app/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/michelbr84/hello-world-app/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/michelbr84/hello-world-app/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/michelbr84/hello-world-app/releases/tag/v0.1.0
