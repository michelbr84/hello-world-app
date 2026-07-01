// Vitest test setup. Runs once per test file before any tests are
// executed (configured via `setupFiles` in `vite.config.ts`).
//
// - Registers `@testing-library/jest-dom` matchers (`toBeInTheDocument`,
//   `toHaveTextContent`, ...) globally.
// - Polyfills `window.matchMedia`, which is used by `App.tsx` to detect
//   the user's `prefers-color-scheme` during the initial render.
//   jsdom does not implement it, so without this polyfill the App tests
//   would throw `matchMedia is not a function`.
import '@testing-library/jest-dom/vitest';

if (typeof window !== 'undefined' && !window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}
