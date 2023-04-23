import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import "../BigTile/BigTile.css";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const [redirect, setRedirect] = useState(false);

  const getThemedClass = (className) => {
    if (props.theme == '"DARK"') return `${className} ${className}--dark`;
    return className;
  };
  const authorize = () => {
    console.log(username);
    const correctUser = localStorage.getItem("username", "admin");
    const correctPass = localStorage.getItem("password", "admin");
    if (username == correctUser && password == correctPass) {
      setLoginFailed(false);

      sessionStorage.setItem("current-username", "admin");
      sessionStorage.setItem("current-password", "admin");
      window.location.reload(false);
      setTimeout(() => {
        setLoginSuccess(true);
      }, 5000);
    } else {
      setLoginFailed(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "admin");
    if (
      sessionStorage.getItem("current-password") &&
      sessionStorage.getItem("current-password") != ""
    ) {
      setRedirect(true);
    }
  }, []);

  return (
    <div class={getThemedClass("tile")}>
      {redirect && <Navigate to="/" />}
      <h1 class={getThemedClass("heading")}>{props.heading}</h1>

      <div class="login-box">
        <label>Username: </label>
        <input
          class="input"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password </label>
        <input
          class="input"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button class="submit" onClick={authorize}>
          Submit
        </button>
        {loginFailed && (
          <div class="errbox">Incorrect credentials, please try again</div>
        )}
      </div>
    </div>
  );
}

export default Login;
