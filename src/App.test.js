import { render, screen } from '@testing-library/react';
// import App from './App';
import Home from "./Home"

test('renders learn react link', () => {
  // render(<App />);
  render(<Home/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
