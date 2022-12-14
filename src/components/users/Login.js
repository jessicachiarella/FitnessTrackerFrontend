import React from "react";
import { LoginPerson } from "../../api/index.js";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoggedIn, setUsername }) => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const loginUsername = event.target[0].value;
    const result = await LoginPerson(event);
    if (result.token) {
      setLoggedIn(true);
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", loginUsername);
      setUsername(loginUsername);
    } else {
      alert(result.error);
    }

    navigate("/users/myRoutines");
  }

  const registerButton = async (event) => {
    event.preventDefault();
    navigate("/users/Register");
  };

  return (
    <div id="loginBox">
      <form onSubmit={handleSubmit}>
        <h1 id="WelcomePage">Welcome to Fitness Tracker</h1>
        <h1 id="LogInPage">Log In</h1>
        <label>Login Username</label>
        <input id="username" placeholder="login username here"></input>
        <label>Password</label>
        <input id="password" placeholder="login password here"></input>
        <button type="submit">Login</button>
        <button id="register" type="submit" onClick={registerButton}>
          Create Account
        </button>
      </form>
    </div>
  );
};
export default Login;
