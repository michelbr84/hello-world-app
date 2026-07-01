# TODO

Small, project-scoped tasks that are not yet part of the public roadmap.
For the overall direction, see [`ROADMAP.md`](./ROADMAP.md); for the
contribution workflow, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

> Status legend: `[x]` done · `[~]` in progress · `[ ]` open

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

- [x] ~~Remove the three dead Create React App stub files~~
  (`public/index.html`, `src/index.tsx`, `src/setupTests.ts`)

  These were leftovers from the v0.6.0 CRA → Vite migration, were no
  longer referenced anywhere in the project, and are now removed (the
  files now carry deprecation comments no longer point at this item).
  The `[Unreleased]` CHANGELOG entry was tightened to a single line
  and the matching v0.6.0 ROADMAP item is checked off.
