import { useState } from "react";

function LoginForm() {
  const [input, setInput] = useState({ email: "", password: "" });

  const pattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!pattern.test(input.password)) {
      alert("Password not strong");
      return;
    }
    console.log("Form data submitted", input);
    setInput({
      email: "",
      password: "",
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter the email"
          value={input.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Enter the password"
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
       
      </form>
    </>
  );
}

export default LoginForm;
