- Dead CRA stub files (`public/index.html`, `src/index.tsx`,
  `src/setupTests.ts`) — 0-byte orphans left over from the Create React
  App ➜ Vite migration. No code, config, or build step references any
  of them. Physical deletion requires shell access (`git rm
  public/index.html src/index.tsx src/setupTests.ts`) and is the last
  remaining action to make the v0.6.0 migration truly complete; once
  the human-side `git rm` lands, this entry will be folded into a
  release.

## [0.6.0] - 2026-07-01
