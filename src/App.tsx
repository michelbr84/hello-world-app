// src/App.tsx
import { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default App;
