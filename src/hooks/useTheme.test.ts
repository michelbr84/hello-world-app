// src/hooks/useTheme.test.ts\nimport { act, renderHook } from '@testing-library/react';\nimport { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';\n\nimport { THEME_STORAGE_KEY, useTheme } from './useTheme';\n\n/**\n * Build a fresh `matchMedia` stub that returns the supplied value for\n * `(prefers-color-scheme: dark)` and `false` for everything else.\n * Mirrors the shape used by `src/test-setup.ts` so the behaviour is\n * identical between the global polyfill and the per-test overrides\n * performed in the `App.test.tsx` describe block.\n */\nfunction createMatchMedia(matches: boolean) {\n  return vi.fn().mockImplementation((query: string) => ({\n    matches: query === '(prefers-color-scheme: dark)' ? matches : false,\n    media: query,\n    onchange: null,\n    addListener: vi.fn(),\n    removeListener: vi.fn(),\n    addEventListener: vi.fn(),\n    removeEventListener: vi.fn(),\n    dispatchEvent: vi.fn(),\n  }));\n}\n\ndescribe('useTheme', () => {
  // The hook reads from window, document and localStorage during the
  // initial render. Reset every relevant piece of global state between
  // tests so they remain order-independent.
  beforeEach(() => {
    window.matchMedia = createMatchMedia(false);
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('defaults to "light" when there is no localStorage value and the OS preference is light', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();
  });

  test('respects prefers-color-scheme: dark when no localStorage value exists', () => {
    window.matchMedia = createMatchMedia(true);

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
  });

  test('persists the current theme to localStorage and mirrors it onto documentElement', () => {
    const { result } = renderHook(() => useTheme());

    // The effect runs after mount, so the side-effects should already
    // reflect the initial theme.
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  test('toggleTheme flips between light and dark repeatedly', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('dark');

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('light');

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('dark');
  });

  test('restores a previously persisted theme on initial render', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    // Even if the OS prefers dark, the stored value must win.
    window.matchMedia = createMatchMedia(true);

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
