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
  `package.json`). Their physical presence contradicts `TODO.md`,
  `CHANGELOG.md`, and `ROADMAP.md`, which all state that the files
  are gone.

  > **Status (2026-07-01):** The three files are inert, zero-byte
  > orphans that cause no runtime or build issues. The documentation
  > already accurately describes the project state as if they were
  > removed. The available automation surface (repository-contents
  > `get` / `list` / `create` / `edit` operations) does not expose a
  > file-deletion operation, and no shell-level `git rm` tool is
  > available to this automation. A human with local shell access can
  > still run
  > `git rm public/index.html src/index.tsx src/setupTests.ts && git commit -m "chore: remove dead CRA stub files" && git push`
  > to physically delete them from the branch history, but this is
  > purely cosmetic cleanup with no behavioral effect.

  > **Alternative (no local clone required):** The GitHub Contents API
  > supports `DELETE` for tracked file paths. A maintainer with `gh`
  > CLI authenticated against this repository can finish v0.6.0 with
  > a single shell session, no clone, no push:
  >
  > ```bash
  > for path in public/index.html src/index.tsx src/setupTests.ts; do
  >   gh api -X DELETE \
  >     -H "Accept: application/vnd.github+json" \
  >     "repos/michelbr84/hello-world-app/contents/$path" \
  >     -f message="chore: remove dead CRA stub files (v0.6.0 cleanup)" \
  >     -f sha=e69de29bb2d1d6434b8b29ae775ad8c2e48c5391
  > done
  > ```
  >
  > The three paths share the same empty-blob SHA
  > (`e69de29bb2d1d6434b8b29ae775ad8c2e48c5391`), so the same `sha`
  > value is used in all three calls. Each call produces its own
  > commit on `master`. The end state is identical to the
  > `git rm … && git commit … && git push` path: the three zero-byte
  > paths no longer exist on `master`, the docs in this repository
  > then match the tree, and v0.6.0 is closed.
