import '@testing-library/jest-dom';

// jsdom does not implement window.matchMedia by default. The dark mode
// feature uses it to detect the system color scheme during the initial
// render, so we provide a minimal polyfill that defaults to "no match".
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
