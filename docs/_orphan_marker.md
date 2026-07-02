# Orphan file removal — automation blocker (resolved manually, 2026-07-01)

This note documents the partial progress made toward the v0.6.0
cleanup item recorded in [`TODO.md`](../TODO.md) and [`ROADMAP.md`](../ROADMAP.md).

## Goal

Remove the three dead Create React App (CRA) stub files that survived the
v0.6.0 Vite migration:

- `public/index.html`
- `src/index.tsx`
- `src/setupTests.ts`

All three are zero-byte files (empty-blob SHA `e69de29bb2d1d6434b8b29ae775ad8c2e48c5391`)
with no references from any other tracked file. The Vite build only uses the
root `index.html`, `src/main.tsx`, and `src/test-setup.ts` (see
`vite.config.ts` and the root `index.html`).

## Status

The Contents API exposed to the automation that produced this file does
**not** provide a `delete` operation, and `create_file` rejects the request
with HTTP `422` when the path already exists. `edit_file` can overwrite the
blob (the current contents are already empty), but it cannot remove the path
from the Git tree. As a result the three files remain on `master` from this
automation's point of view.

A human with shell access finished the job in one line:

```bash
git rm public/index.html src/index.tsx src/setupTests.ts
git commit -m "chore: remove dead CRA stub files (v0.6.0 cleanup)"
```

Until that commit lands, `TODO.md`, `ROADMAP.md`, and `CHANGELOG.md`
intentionally keep their `Pending` / `Unreleased` / unchecked markers so the
governance documents stay honest about the codebase state.

## Resolution

Done manually on 2026-07-01 via `git rm`. The three paths no longer exist on
`master`, `public/.gitkeep` preserved the `public/` directory, and the
governance documents were updated in the same cleanup pass. This file is
retained as the historical record of why the three paths sat in the tree for
a release cycle.
