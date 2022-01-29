import { fireEvent, render, screen } from '@testing-library/react';
import Header from './index';
import { BrowserRouter } from 'react-router-dom';

it('footer', () => {
  render(
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>,
  );
});

it('explore', () => {
  render(
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>,
  );
  const explore = screen.getByText('Explore');
  fireEvent.click(explore);
});

it('should have blinkistLogo', () => {
  render(
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>,
  );
  const explore = screen.getByTestId('image');
  expect(explore).toBeInTheDocument();
});

it('clicking blinkist logo should navigate to MyLibrary page', () => {
  render(
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>,
  );
  const image = screen.getByTestId('image');
  fireEvent.click(image);
  expect(window.location.pathname).toBe('/');
});
