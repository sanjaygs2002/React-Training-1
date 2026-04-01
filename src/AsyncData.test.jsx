import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AsyncData from "./AsyncData";

describe("AsyncData Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("fetches and displays data (success case)", async () => {
    const mocks = [
      { id: 1, name: "Sanjay" },
      { id: 2, name: "Ram" },
    ];

    // ✅ define fetch first
    global.fetch = jest.fn();

    jest.spyOn(global, "fetch").mockResolvedValue({
      json: async () => mocks,
    });

    render(<AsyncData />);

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });
});

