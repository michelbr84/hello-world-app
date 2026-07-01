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
