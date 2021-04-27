import { render, screen } from "@testing-library/react";

import App from "./App";

test("should show title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Pokeapi/i);
  expect(linkElement).toBeInTheDocument();
});
