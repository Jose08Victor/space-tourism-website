import { render, screen } from '@testing-library/react';
import { AppRoutes } from '.';

test('renders Home component when navigating to "/space-tourism-website"', () => {
  render(<AppRoutes />);
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders Destination component when navigating to "/destination"', () => {
  render(<AppRoutes />);
  const destinationElement = screen.getByText(/Destination/i);
  expect(destinationElement).toBeInTheDocument();
});

test('renders Crew component when navigating to "/crew"', () => {
  render(<AppRoutes />);
  const crewElement = screen.getByText(/Crew/i);
  expect(crewElement).toBeInTheDocument();
});

test('renders Technology component when navigating to "/technology"', () => {
  render(<AppRoutes />);
  const technologyElement = screen.getByText(/Technology/i);
  expect(technologyElement).toBeInTheDocument();
});