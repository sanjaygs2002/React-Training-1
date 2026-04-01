import React from "react";
import { screen, render } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("Checking count increase", async () => {
  const user = userEvent.setup();

  render(<Counter />);

  const btn = screen.getByRole("button", { name: /inc/i });

  await user.click(btn);
  await user.click(btn);
  await user.click(btn);

  const countText = screen.getByText(/count:/i);

  expect(countText).toHaveTextContent("Count:3");
});