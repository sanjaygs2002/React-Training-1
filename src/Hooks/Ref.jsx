import { useRef, useState } from "react";

function Ref() {
  const inputRef = useRef();
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [error, setError] = useState("");

  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleChange(e) {
    e.preventDefault();
    if (!/^\d+$/.test(formData.age)) {
      setError("Error occurs");
      return;
    }

    setError("");

    console.log("Form Data", formData);
    console.log("Using Ref", inputRef.current.value);
    setFormData({ name: "", age: "" });
  }
  return (
    <>
      <form onSubmit={handleChange}>
        <input type="text" ref={inputRef} />
        <br />
        <br />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Enter the name"
          name="name"
          value={formData.name}
          onChange={handleFormData}
          required
        />
        <br />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter the age"
          value={formData.age}
          onChange={handleFormData}
          required
          min="1"
          max="100"
        />
        {error && <p>{error}</p>}
        <br />
        <button type="reset">Reset</button>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Ref;
