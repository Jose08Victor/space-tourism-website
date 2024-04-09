import { render, screen } from "@testing-library/react";
import { Title } from ".";

test('renders the title', () => {
  render(<Title strong={1} title="Example Title" />);
  const titleElement = screen.getByText('Example Title');
  expect(titleElement).toBeInTheDocument();
});

test('styles are applied correctly to Title component', () => {

  render(<Title strong={1} title="Example Title" />);

  const titleElement = screen.getByText('Example Title');
  const computedStyles = window.getComputedStyle(titleElement);

  expect(computedStyles.color).toBe("rgb(255, 255, 255)");
  expect(computedStyles.fontSize).toBe('28px');
});