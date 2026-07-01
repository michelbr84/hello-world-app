# 🤝 Contributing to Hello World App

First off, thanks for taking the time to contribute! 🎉
Whether you're fixing a typo, improving docs, reporting a bug, or shipping a new feature — you are welcome here.

This guide walks you through everything you need to get set up and submit a great contribution.

---

## 📜 Code of Conduct

This project follows the spirit of the [Contributor Covenant](https://www.contributor-covenant.org/).
By participating, you are expected to treat everyone with respect. Please report unacceptable behavior to the project maintainer.

---

## 🧰 Prerequisites

Before you start, make sure you have:

- **Node.js** — version **18** (see [`.nvmrc`](.nvmrc))
- **npm** — bundled with Node.js (or **yarn** if you prefer)
- **Git**

We recommend [`nvm`](https://github.com/nvm-sh/nvm) for managing Node versions:

```bash
nvm install    # reads .nvmrc
nvm use
```

---

## 🚀 Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:

   ```bash
   git clone https://github.com/<your-username>/hello-world-app.git
   cd hello-world-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

   The `prepare` script automatically installs the [Husky](https://typicode.github.io/husky/) Git hooks.

4. **Verify everything works**:

   ```bash
   npm run lint
   CI=true npm test -- --watchAll=false
   npm run build
   ```

5. **Start the dev server**:

   ```bash
   npm start
   ```

   The app opens at <http://localhost:3000> with hot reload.

---

## 🌿 Branching & Workflow

We use a simple, trunk-based workflow on the `master` branch:

1. Create a feature branch off `master`:

   ```bash
   git checkout -b feat/<short-description>
   # or
   git checkout -b fix/<short-description>
   # or
   git checkout -b docs/<short-description>
   ```

2. Make your changes in small, focused commits.
3. Push your branch and open a **Pull Request** against `master`.
4. Ensure CI is green (see [Continuous Integration](#-continuous-integration-ci)).
5. Wait for review and address any feedback.

---

## 🧹 Coding Standards

Consistency is enforced automatically through **ESLint** and **Prettier**. You shouldn't have to think about formatting — the tools do it for you.

| Task | Command |
| --- | --- |
| Lint the code | `npm run lint` |
| Auto-fix lint issues | `npm run lint:fix` |
| Format all source files | `npm run format` |
| Verify formatting only (CI-friendly) | `npm run format:check` |

Both linting and formatting also run automatically on every commit via [`lint-staged`](https://github.com/okonet/lint-staged) (see [`.husky/pre-commit`](.husky/pre-commit)).

### TypeScript

- **Strict** TypeScript is enabled — avoid `any` in production code.
- Prefer explicit, descriptive types over `any` / `unknown` when feasible.
- Keep components small, focused, and single-purpose.

### Imports

- Group imports logically: external → internal → relative.
- Prettier handles the rest (single quotes, trailing commas, 80-char line width — see [`.prettierrc`](.prettierrc)).

---

## ✅ Testing

| Task | Command |
| --- | --- |
| Run tests in watch mode (dev) | `npm test` |
| Run once in CI mode (matches CI) | `CI=true npm test -- --watchAll=false` |

When you add a new feature or fix a bug, please add or update tests. See the [Roadmap](ROADMAP.md) for the current testing goals (unit tests, e2e tests, coverage, accessibility).

---

## 💬 Commit Messages

We follow **[Conventional Commits](https://www.conventionalcommits.org/)**.
This is enforced automatically by [`commitlint`](https://commitlint.js.org/) via a Husky hook (see [`.husky/commit-msg`](.husky/commit-msg)).

**Format:**

```
<type>(<scope>): <short description>
```

**Common types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`.

**Examples:**

```bash
# ✅ Valid — will pass commitlint
git commit -m "feat: add greeting component"
git commit -m "fix: resolve hot-reload crash"
git commit -m "docs: update README with setup steps"
git commit -m "chore: bump dependencies"

# ❌ Invalid — will be rejected
git commit -m "added stuff"
```

> Need to bypass the hooks in an emergency? Use `git commit --no-verify` (not recommended).

---

## 🔁 Continuous Integration (CI)

Every push and pull request to `master` runs the pipeline defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml):

1. **Install** — `npm ci`
2. **Lint** — `npm run lint`
3. **Test** — `npm test -- --watchAll=false --ci`
4. **Build** — `npm run build`

All four steps must pass before a PR can be merged. Please run them locally before pushing:

```bash
npm ci
npm run lint
CI=true npm test -- --watchAll=false
npm run build
```

---

## 🔀 Pull Request Process

1. **Sync with `master`** — `git fetch && git rebase origin/master`.
2. **Run the local checks**:
   ```bash
   npm run lint
   npm run format:check
   CI=true npm test -- --watchAll=false
   npm run build
   ```
   All four must pass cleanly.
3. **Write a clear PR title and description**:
   - **What** does this PR change?
   - **Why** is the change needed?
   - **How** can it be tested?
   - Link any related issues (e.g. `Closes #12`).
4. **Reference the relevant roadmap milestone** when applicable (see [ROADMAP.md](ROADMAP.md)).
5. **Request a review** from a maintainer.

> 💡 The pre-commit hook will automatically lint and format your staged files, and the commit-msg hook will verify your message follows Conventional Commits.

---

## 🐛 Reporting Bugs

Found a bug? Please open an [issue](../../issues) and include:

- A clear, descriptive title.
- **Steps to reproduce** the bug.
- **Expected** vs. **actual** behavior.
- Your **environment** (Node version, OS, browser).
- Screenshots or error logs, if applicable.

---

## 💡 Suggesting Features

Feature ideas are welcome! To keep the project focused, please **open an issue first** to discuss the change before sending a PR. See the [Roadmap](ROADMAP.md) for what is currently planned.

---

## 📁 Project Structure

```
hello-world-app/
├── .github/workflows/   # CI pipelines
├── .husky/              # Git hooks (pre-commit, commit-msg)
├── public/              # Static HTML
├── src/                 # React + TypeScript source
│   ├── App.tsx          # Main App component
│   ├── App.css          # App-level styles
│   └── index.tsx        # Entry point
├── .eslintrc.json       # ESLint config
├── .prettierrc          # Prettier config
├── .gitignore
├── .gitattributes
├── .nvmrc               # Node.js version
├── commitlint.config.js # Commitlint config
├── LICENSE.txt          # MIT License
├── README.md            # Project overview
├── ROADMAP.md           # Project roadmap
├── package.json
└── package-lock.json
```

See the [README](README.md) for the full feature list and tech stack.

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE.txt).

---

<p align="center">Made with ❤️ and ☕ — Happy coding!</p>
