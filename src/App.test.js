import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 tag with text Heyy!', () => {
  render(<App />);
  const headingText = screen.getByText(/Heyy!/i);
  expect(headingText).toBeInTheDocument();
});
