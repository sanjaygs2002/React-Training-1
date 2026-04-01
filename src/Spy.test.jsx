import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Button from "./Button";

test("spy click test", async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(<Button onClick={handleClick} />);

  const button = screen.getByRole("button", { name: /click/i });

  await user.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});