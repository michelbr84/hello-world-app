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

- [ ] **Remove the three dead Create React App stub files**
  (`public/index.html`, `src/index.tsx`, `src/setupTests.ts`) by running

  ```bash
  git rm public/index.html src/index.tsx src/setupTests.ts
  ```

  and committing the result. These are leftovers from the v0.6.0
  CRA → Vite migration, are no longer referenced anywhere in the
  project, and are already documented as removed in `CHANGELOG.md`
  (`[Unreleased]` / Removed). The files now carry deprecation
  comments pointing at this item so the cleanup is discoverable
  from the repository tree itself. Once the `git rm` lands, this
  item can be flipped to `[x]` and the `[Unreleased]` CHANGELOG
  entry can finally be released.
