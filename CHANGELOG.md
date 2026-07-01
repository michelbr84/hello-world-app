# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2026-07-01

### Added

- Tiny interactive feature: a name-greeting input in `App` that renders a
  personalised "Hello, {name}!" message once the user types a non-blank name.
- Two additional unit tests in `App.test.tsx` covering the personalised
  greeting and whitespace trimming behaviour.
- `.editorconfig` at the repository root for consistent editor defaults
  (charset, EOL, indentation).
- `test:coverage` npm script (`react-scripts test --coverage --watchAll=false`)
  to generate a Jest/Istanbul coverage report locally and in CI.
- CI step that generates a coverage report and uploads the `coverage/`
  directory as a build artifact (always run, even when the test step fails).
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

[Unreleased]: https://github.com/michelbr84/hello-world-app/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/michelbr84/hello-world-app/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/michelbr84/hello-world-app/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/michelbr84/hello-world-app/releases/tag/v0.1.0
