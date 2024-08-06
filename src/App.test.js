import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add New Events header', async () => {
  render(<App />);
  const headerElement = await screen.findByText(/Add New Event/i);
  expect(headerElement).toBeInTheDocument();
});

// test('renders learn react link', async () => {
//   render(<App />);
//   screen.debug(); // Print the rendered output to the console for inspection
//   const linkElement = await screen.findByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
