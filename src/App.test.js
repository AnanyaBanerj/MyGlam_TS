import { render, screen } from '@testing-library/react';
import App from './App';
// import { GoogleOAuthProvider } from '@react-oauth/google';


test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
