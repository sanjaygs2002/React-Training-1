import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { act } from "react-dom/test-utils"; // ✅ IMPORTANT
import Timer from "./Timer";

test("fetches data after timeout", async () => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([{ id: 1, title: "Photo 1" }]),
    })
  );

  vi.useFakeTimers();

  render(<Timer />);

  // 🔥 wrap in act
  await act(async () => {
    await vi.advanceTimersByTimeAsync(2000);
  });

  expect(await screen.findByText("Photo 1")).toBeInTheDocument();
});