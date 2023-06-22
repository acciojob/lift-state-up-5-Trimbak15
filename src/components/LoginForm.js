import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(username!=="" && password !== ""){
        onLogin();
    }
    // Perform login logic here (e.g., API call, validation)
    // Once login is successful, call the onLogin function from props
    // onLogin();
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
