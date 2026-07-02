# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2026-07-01

- Migrated the project from Create React App to Vite + Vitest. The
  migration is fully complete except for three 0-byte orphan files
  (`public/index.html`, `src/index.tsx`, `src/setupTests.ts`) left over
  from the CRA scaffold. No code, config, or build step references any
  of them. The final cleanup step is a shell-side
  `git rm public/index.html src/index.tsx src/setupTests.ts` followed
  by a commit and push; once that lands, this bullet can be removed and
  the v0.6.0 release finalized.
