import { render, screen } from '@testing-library/react';
import LogOutButton from '.';

const isauth = true;
describe('TopNav Component Tests - Logged in', () => {
  test('Logout Button displays when logged in', () => {
    render(<LogOutButton logout={undefined} isauth={isauth} />);
    const loginButton = screen.getByText(/Log Out/i);
    expect(loginButton).toBeInTheDocument();
  });
});
