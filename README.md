# 👋 Hello World App

A simple **Hello World** project built with **React**, **TypeScript**, and **Vite**. It serves as a minimal starter to demonstrate a clean React + TypeScript setup with a fast, modern dev experience — perfect for learning, prototyping, or as a foundation for your next project.

[![License: MIT](./LICENSE.txt)](./LICENSE.txt)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![CI](https://github.com/michelbr84/hello-world-app/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/michelbr84/hello-world-app/actions/workflows/ci.yml)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-222?logo=github)](https://michelbr84.github.io/hello-world-app/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Linted: ESLint](https://img.shields.io/badge/linted-eslint-4B32C3.svg)](https://eslint.org/)

---

## ✨ Features

- ⚡ **React 18** with functional components and hooks
- 🔒 **TypeScript** for static typing and better developer experience
- ✅ **Jest** + **React Testing Library** ready for unit tests
- 📦 **Production-ready build** with code splitting and optimization
- 🌍 **Strict browser support** for modern browsers (Chrome, Firefox, Safari)
- 💅 **Prettier** — opinionated code formatter for consistent style
- 🧹 **ESLint** — with React + TypeScript rules for clean, bug-free code
- 🪝 **Husky + lint-staged** — automatic linting and formatting on every commit
- 📝 **Commitlint** — enforces [Conventional Commits](https://www.conventionalcommits.org/) for a tidy history
- 🚫 **zero runtime dependencies** beyond React itself

---

## 📂 Project Structure

```
hello-world-app/
├── index.html            # Vite HTML entry
├── src/                  # App.css
│   ├── App.css           # App-level styles
│   ├── App.tsx           # Main App component
│   ├── App.test.tsx      # App unit tests
│   ├── main.tsx          # React entry point
│   ├── test-setup.ts     # Vitest global setup
│   └── hooks/            # Reusable React hooks
│       ├── useTheme.ts        # Theme switcher hook
│       └── useTheme.test.ts   # Hook unit tests
├── .editorconfig         # Editor defaults
├── .eslintrc.json        # ESLint configuration
├── .eslintignore         # ESLint ignore patterns
├── .nvmrc                # Node.js version pin
├── .prettierrc           # Prettier configuration
├── .gitattributes        # Git attributes
├── .gitignore            # Ignored files
├── CHANGELOG.md          # Notable changes per release
├── CONTRIBUTING.md       # Contribution guide
├── LICENSE.txt           # MIT License
├── package.json          # Dependencies & scripts
├── package-lock.json     # Locked dependency tree
├── README.md             # You are here!
├── ROADMAP.md            # Project roadmap
├── TODO.md               # Housekeeping tasks
├── commitlint.config.js  # Commitlint rules
├── tsconfig.json         # TypeScript config (app)
├── tsconfig.node.json    # TypeScript config (Vite/Node)
└── vite.config.ts        # Vite + Vitest configuration
```

---

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/michelbr84/hello-world-app.git
   cd hello-world-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   > The `prepare` script will automatically set up Husky git hooks after install.

3. **Start the development server**

   ```bash
   npm start
   ```

   The app will open automatically at [http://localhost:3000](http://localhost:3000). The page will hot-reload whenever you make edits.

---

## 📜 Available Scripts

In the project directory, you can run:

| Script                    | Description                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm start`               | Runs the app in development mode at `http://localhost:3000`.                                                                                          |
| `npm test`                | Launches the test runner in interactive watch mode.                                                                                                   |
| `npm run build`           | Builds the app for production to the `build/` folder.                                                                                                  |
| `npm run lint`            | Runs ESLint on all `.ts` / `.tsx` files under `src/`.                                                                                                  |
| `npm run lint:fix`        | Runs ESLint and automatically applies safe fixes where possible.                                                                                      |
| `npm run format`          | Formats all source files with Prettier (`.ts`, `.tsx`, `.css`).                                                                                        |
| `npm run format:check`    | Verifies that all source files match Prettier formatting without modifying them (useful for CI).                                                       |

---

## 🛠️ Developer Tools

### Code Style

This project uses **Prettier** for consistent formatting and **ESLint** for static analysis. Both share a single configuration so formatting rules never clash with lint rules.

```bash
# Auto-format your code
npm run format

# Check formatting without writing
npm run format:check

# Lint your code
npm run lint

# Lint and apply auto-fixers
npm run lint:fix
```

### Pre-commit Hooks

Git hooks (via [Husky](https://typicode.github.io/husky/)) automatically run on every commit:

- **`pre-commit`** — `lint-staged` runs ESLint `--fix` and Prettier `--write` on staged files
- **`commit-msg`** — `commitlint` enforces [Conventional Commits](https://www.conventionalcommits.org/) format

The hooks are installed automatically by the `prepare` script after `npm install`. To bypass them in an emergency, use `git commit --no-verify` (not recommended).

**Commit message examples:**

```bash
# ✅ Valid — passes commitlint
git commit -m "feat: add greeting component"
git commit -m "fix: resolve hot-reload crash"
git commit -m "docs: update README with setup steps"
git commit -m "chore: bump dependencies"

# ❌ Invalid — will be rejected
git commit -m "added stuff"
```

### Editor Integration

For the best experience, install these editor extensions:

- **VS Code**: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- **WebStorm / JetBrains**: ESLint and Prettier are bundled out of the box.

---

## 🏗️ Built With

- **[React](https://reactjs.org/)** — A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** — Typed JavaScript at any scale.
- **[Vite](https://vitejs.dev/)** — A fast, modern frontend build tool with a great dev experience.
- **[ESLint](https://eslint.org/)** — Pluggable linter for JavaScript and TypeScript.
- **[Prettier](https://prettier.io/)** — Opinionated code formatter.
- **[Husky](https://typicode.github.io/husky/)** — Modern Git hooks made easy.
- **[lint-staged](https://github.com/okonet/lint-staged)** — Run linters on staged files.
- **[Commitlint](https://commitlint.js.org/)** — Lint commit messages against Conventional Commits.

---

## 🌍 Browser Support

The production build supports browsers that meet the following criteria:

- Production: >0.2%, not dead, not op_mini all
- Development: Last 1 version of Chrome, Firefox, and Safari

---

## ✅ Running Tests

```bash
npm test
```

This launches the test runner in interactive watch mode. See the [Vitest docs](https://vitest.dev/guide/) for more information on configuring tests, coverage, and CI mode.

---

## 🔨 Building for Production

```bash
npm run build
```

The build is minified, optimized, and the filenames include hashes for cache busting. The production-ready files will be generated in the `build/` directory and can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, AWS S3, etc.).

---

## 🚀 Deployment

A live demo is automatically published to **GitHub Pages** on every push to `master` via the CI workflow:

🌍 **[https://michelbr84.github.io/hello-world-app/](https://michelbr84.github.io/hello-world-app/)**

How it works:

1. The `quality` job runs lint, tests, coverage, and `npm run build` on every push and pull request.
2. On a push to `master` (only), the `deploy` job runs after `quality` succeeds.
3. The deploy job rebuilds the app, uploads `build/` as a Pages artifact, and publishes it via the official `actions/deploy-pages` action.

One-time setup (manual, outside the codebase):

1. Go to **Settings → Pages** for the repository.
2. Under **Source**, select **GitHub Actions**.
3. That's it! Subsequent pushes to `master` will trigger a fresh deploy.

The `base` setting in `vite.config.ts` is set to `/hello-world-app/` so Vite generates correct absolute asset paths under the GitHub Pages sub-path.

---

## 🙌 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Make sure `npm run lint` and `npm run format:check` pass
4. Commit your changes using a [Conventional Commits](https://www.conventionalcommits.org/) message — e.g. `git commit -m 'feat: add some AmazingFeature'`
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

> 🚨 The pre-commit hook will automatically lint and format your staged files, and the commit-msg hook will verify that your commit message follows the Conventional Commits format.

---

## 📝 License

Distributed under the **MIT License**. See [`LICENSE.txt`](./LICENSE.txt) for the full license text.

---

## 👤 Author

**michelbr84**

- GitHub: [@michelbr84](https://github.com/michelbr84)

---

## ⭐ Show Your Support

If you find this project helpful or inspiring, please consider giving it a **star** ⭐ on GitHub — it helps others discover it too!

---

<p align="center">Made with ❤️ and ☕ Happy coding!</p>
