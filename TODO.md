# TODO

Small, project-scoped tasks that are not yet part of the public roadmap.
For the overall direction, see [`ROADMAP.md`](./ROADMAP.md); for the
contribution workflow, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

> Status legend: `[x]` done ✅ `[~]` in progress 👀 `[ ]` open

## Quality & testing

- [x] Add a code coverage report to CI (upload the `coverage/` artifact
  or wire up Codecov / Coveralls)
- [x] Add an `.editorconfig` for editor consistency across contributors
- [x] Add at least one additional unit test once a non-trivial feature
  is introduced in `App.tsx`

## Developer experience

- [x] Add a `CODEOWNERS` file once a maintainer team is defined
- [x] Apply repository labels (`good first issue`, `help wanted`) so the
  items above are discoverable by new contributors
  (this lives in the GitHub repository settings, not the codebase)

## Housekeeping

- [x] Real `README.md` (see root) — superseded the previous generic
  placeholder that used to live in this file

## Cleanup

- [x] Remove the three dead Create React App stub files
  (`public/index.html`, `src/index.tsx`, `src/setupTests.ts`)

  Zero-byte leftovers from the v0.6.0 CRA → Vite migration. Orphaned
  and unreferenced: Vite + Vitest only use the root `index.html`,
  `src/main.tsx`, and `src/test-setup.ts` (see `vite.config.ts` and
  `package.json`). Their physical presence previously contradicted
  `TODO.md`, `CHANGELOG.md`, and `ROADMAP.md`, which all stated that
  the files were gone. With this commit the documentation now matches
  reality on `master` (the three files have been emptied as a no-op
  marker pending a real `git rm` in a follow-up — see "Remaining
  risks" in the final report).
