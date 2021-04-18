import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let item = { email, password };
    let result = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/home");
  };

  return (
    <>
      <h1 className="app__title">To-Do App</h1>
      <div className="container form__fields">
        <form className="container" onSubmit={handleSubmit}>
          <input
            className="username__field"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Enter Username"
            name="email"
          />
          <input
            type="password"
            className="password__field"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Enter Password"
            name="password"
          />
          <button className="login__button">Login</button>
        </form>
      </div>
    </>
  );
}

export default Loginform;
