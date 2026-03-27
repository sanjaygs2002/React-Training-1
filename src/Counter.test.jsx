import { screen, render } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";


test("Checking count increase",async ()=>{
    render(<Counter/>)

    const btn = screen.getByRole("button",{name:"Inc"})

    await userEvent.click(btn);
     await userEvent.click(btn);
      await userEvent.click(btn);
   expect(screen.getByText("Count:3")).toBeInTheDocument()
})