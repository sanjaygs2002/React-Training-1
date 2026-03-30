import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

test("spy click test", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();
  render(<Button onClick={handleClick} />);
  await user.click(screen.getByText("Click"));
  expect(handleClick).toHaveBeenCalled();
});