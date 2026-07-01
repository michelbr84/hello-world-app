# TODO

Small, project-scoped tasks that are not yet part of the public roadmap.
For the overall direction, see [`ROADMAP.md`](./ROADMAP.md); for the
contribution workflow, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

> Status legend: `[x]` done ✅  `[~]` in progress 🛠  `[ ]` open

## Quality & testing

- [x] Add a code coverage report to CI (upload the `coverage/` artifact
  or wire up Codecov / Coveralls)
- [x] Add an `.editorconfig` for editor consistency across contributors
- [x] Add at least one additional unit test once a non-trivial feature
  is introduced in `App.tsx`

## Developer experience

- [x] Add a `CODEOWNERS` file once a maintainer team is defined
- [~] Apply repository labels (`good first issue`, `help wanted`) so the
  items above are discoverable by new contributors
  (this lives in the GitHub repository settings, not the codebase)

## Housekeeping

- [x] Real `README.md` (see root) — superseded the previous generic
  placeholder that used to live in this file

## Cleanup

- [ ] Remove the three dead Create React App stub files
  (`public/index.html`, `src/index.tsx`, `src/setupTests.ts`)

  Zero-byte leftovers from the v0.6.0 CRA → Vite migration. Orphaned
  and unreferenced: Vite + Vitest only use the root `index.html`,
  `src/main.tsx`, and `src/test-setup.ts` (see `vite.config.ts` and
  `package.json`). Their physical presence currently contradicts
  `TODO.md`, `CHANGELOG.md`, and `ROADMAP.md`, which all state that
  the files are gone. Verified: all three files are present on
  `master` with SHA `e69de29bb2d1d6434b8b29ae775ad8c2e48c5391` (the
  empty-blob SHA) and cause no runtime issues.

  Safe removal (no dependents, no runtime impact):

  ```
  git rm public/index.html src/index.tsx src/setupTests.ts
  git commit -m "chore: remove dead CRA stub files"
  ```
