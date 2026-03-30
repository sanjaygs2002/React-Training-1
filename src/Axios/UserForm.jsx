import React, { useState } from "react";
import api from "./api"; // axios instance with interceptor

function UserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const token = "fake-token";
    localStorage.setItem("token", token);
    console.log("Token created:", token);
    setLoggedIn(true);
  };

  const fetchData = async () => {
    try {
      const res = await api.get("/posts"); 
      console.log("Data:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h3>Welcome, {username}!</h3>
          <button onClick={fetchData}>Fetch Data</button>
        </div>
      )}
    </div>
  );
}

export default UserForm;
