import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About Me heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /About Me/i });
  expect(heading).toBeInTheDocument();
});

test('renders navigation buttons', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /About Me/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Work Experience/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
});