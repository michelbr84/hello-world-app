// src/App.tsx
import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'hello-world-app:theme';

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

function App() {
  const [name, setName] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore localStorage errors so the toggle still works in restricted contexts.
    }
  }, [theme]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleIncrement = (): void => {
    setCount((previous) => previous + 1);
  };

  const toggleTheme = (): void => {
    setTheme((previous) => (previous === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';
  const nextThemeLabel = isDark ? 'light' : 'dark';
  const toggleEmoji = isDark ? '☀️' : '🌙';

  return (
    <div className="container">
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${nextThemeLabel} theme`}
        title={`Switch to ${nextThemeLabel} theme`}
      >
        <span aria-hidden="true">{toggleEmoji}</span>
      </button>

      <h1>Hello World!</h1>
      <p>Welcome to your first React + TypeScript page.</p>
      <label className="greeting-label" htmlFor="name-input">
        What is your name?
      </label>
      <input
        id="name-input"
        className="greeting-input"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name"
        aria-label="Your name"
      />
      {name.trim() !== '' && (
        <p className="greeting-message" data-testid="greeting">
          Hello, {name.trim()}!
        </p>
      )}

      <div className="counter">
        <p className="counter-label">Click counter</p>
        <p className="counter-value" data-testid="counter-value">
          {count}
        </p>
        <button
          type="button"
          className="counter-button"
          onClick={handleIncrement}
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
