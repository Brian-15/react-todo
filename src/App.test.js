import { render, screen } from '@testing-library/react';
import App from './App';

test('smoke test: renders app', () => {
  render(<App />);
});
