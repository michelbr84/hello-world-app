// src/hooks/useTheme.ts
import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'hello-world-app:theme';

/**
 * Determine the initial theme by checking, in order:
 *   1. A persisted user choice in `localStorage` (under THEME_STORAGE_KEY).
 *   2. The user's OS-level `prefers-color-scheme` media query.
 *   3. The literal `'light'` as a safe default.
 *
 * Each step is guarded so the function never throws — `localStorage` may
 * throw in privacy modes, `window`/`matchMedia` may be undefined under
 * non-DOM test environments, etc.
 */
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // Ignore localStorage errors (e.g. privacy mode) and fall through.
  }
  if (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
}

/**
 * `useTheme` owns the app's light/dark theme state.
 *
 * It:
 *  - Exposes the current `theme` value.
 *  - Exposes a `toggleTheme` callback that flips between `'light'` and `'dark'`.
 *  - Persists every change to `localStorage` (under THEME_STORAGE_KEY).
 *  - Mirrors the current value to the `data-theme` attribute on
 *    `document.documentElement` so the existing CSS custom-property
 *    rules in `App.css` keep working.
 *
 * The hook intentionally reads from `window`/`localStorage` only during
 * the initial render (via `getInitialTheme`). All subsequent updates
 * flow through React state, which keeps behaviour predictable and
 * makes the hook easy to unit-test.
 */
export function useTheme(): {
  theme: Theme;
  toggleTheme: () => void;
} {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore localStorage errors so the toggle still works in
      // restricted contexts.
    }
  }, [theme]);

  const toggleTheme = useCallback((): void => {
    setTheme((previous) => (previous === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggleTheme };
}
