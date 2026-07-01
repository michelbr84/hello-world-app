import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /hello/i });
  expect(heading).toBeInTheDocument();
});

test('shows a personalized greeting after the user types a name', () => {
  render(<App />);
  const input = screen.getByLabelText(/your name/i) as HTMLInputElement;

  // Greeting is hidden until a name is entered.
  expect(screen.queryByTestId('greeting')).not.toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'Ada' } });

  const greeting = screen.getByTestId('greeting');
  expect(greeting).toHaveTextContent('Hello, Ada!');
  expect((input as HTMLInputElement).value).toBe('Ada');
});

test('trims whitespace around the typed name in the greeting', () => {
  render(<App />);
  const input = screen.getByLabelText(/your name/i);

  fireEvent.change(input, { target: { value: '  Grace  ' } });

  expect(screen.getByTestId('greeting')).toHaveTextContent('Hello, Grace!');
});

test('click counter starts at zero and increments when the button is clicked', () => {
  render(<App />);
  const counter = screen.getByTestId('counter-value');
  const button = screen.getByRole('button', { name: /click me/i });

  expect(counter).toHaveTextContent('0');

  fireEvent.click(button);
  expect(counter).toHaveTextContent('1');

  fireEvent.click(button);
  fireEvent.click(button);
  expect(counter).toHaveTextContent('3');
});

test('renders the theme toggle button', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /switch to (light|dark) theme/i });
  expect(toggle).toBeInTheDocument();
});

test('clicking the theme toggle flips the data-theme attribute on the document', () => {
  render(<App />);
  const initialTheme = document.documentElement.getAttribute('data-theme');
  const toggle = screen.getByRole('button', { name: /switch to (light|dark) theme/i });

  fireEvent.click(toggle);

  const nextTheme = document.documentElement.getAttribute('data-theme');
  expect(nextTheme).not.toBe(initialTheme);
  expect(['light', 'dark']).toContain(nextTheme);
});

describe('theme system coverage', () => {
  // The theme system is global: it reads from `window.matchMedia`,
  // writes to `localStorage`, and mutates `document.documentElement`.
  // Reset all three between tests so each one starts from a known
  // baseline and tests are order-independent.
  beforeEach(() => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  test('respects prefers-color-scheme: dark when no localStorage value exists', () => {
    // Simulate the OS reporting a dark color-scheme preference. The
    // default polyfill in `src/test-setup.ts` always returns
    // `matches: false`, so this path was previously never exercised.
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<App />);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('persists theme preference in localStorage and restores it across remounts', () => {
    const { unmount } = render(<App />);

    // No localStorage, no dark-mode preference → defaults to light.
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    // Toggle to dark and verify both side-effects.
    const toggle = screen.getByRole('button', { name: /switch to dark theme/i });
    fireEvent.click(toggle);

    expect(localStorage.getItem('hello-world-app:theme')).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    // Unmount and re-render. The new instance should restore the
    // theme from localStorage, not fall through to the matchMedia
    // check (mocked to `matches: false` → would yield 'light').
    unmount();
    render(<App />);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('updates the toggle button aria-label and emoji after clicking', () => {
    render(<App />);

    // Initial: light theme. The button label announces the next
    // theme (dark) and the emoji reflects the current (light) state.
    const lightButton = screen.getByRole('button', { name: /switch to dark theme/i });
    expect(lightButton).toHaveTextContent('☀️');

    // Click to switch to dark.
    fireEvent.click(lightButton);

    // Now in dark mode: label and emoji both flip.
    const darkButton = screen.getByRole('button', { name: /switch to light theme/i });
    expect(darkButton).toHaveTextContent('🌙');
  });
});
