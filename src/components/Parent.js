import React, { useState } from "react";
import LoginForm from "./LoginForm";

const Parent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <LoginForm onLogin={handleLogin} />
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
  );
};

export default Parent;
