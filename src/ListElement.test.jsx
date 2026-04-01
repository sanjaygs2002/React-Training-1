import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ListElement from "./ListElement";

test("Checking list elements", () => {

  const mocks = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  render(<ListElement users={mocks} />);

  const items = screen.getAllByRole("listitem");

  expect(items).toHaveLength(3);
});

