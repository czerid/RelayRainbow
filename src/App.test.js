// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RelayRainbow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RelayRainbow/i);
    expect(titleElement).toBeInTheDocument();
});
