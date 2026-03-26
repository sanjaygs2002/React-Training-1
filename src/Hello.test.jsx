import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("text checked",()=>{
    render(<Hello/>)
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Sanjay")).toBeInTheDocument();
})