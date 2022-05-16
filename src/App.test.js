import { render, screen } from '@testing-library/react';
import Login_Page from './Login_Page';

test('renders learn react link', () => {
  render(<Login_Page />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
