import { screen, render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { expect,test } from "vitest";
import userEvent from "@testing-library/user-event";

test("Form data checks", async ()=>{
    const user = userEvent.setup();
    render(<LoginForm/>);

    const emailInput= screen.getByPlaceholderText("Enter the email");
    const passwordInput = screen.getByPlaceholderText("Enter the password");

    await user.type(emailInput,"test@gmail.com");
    await user.type(passwordInput,"Sanjay209");

    expect(emailInput).toHaveValue("test@gmail.com");
    expect(passwordInput).toHaveValue("Sanjay209");
})