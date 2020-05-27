import React, {useState} from 'react';
import './App.css';
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import {Route, NavLink} from "react-router-dom";

function App() {
  const [token, setToken] = useState("");
  return (
    <div>
      <Route exact path = "/">
        <nav>
          <NavLink className="homeLink" to="/">Home</NavLink>
          <NavLink className="signupLink" to="/register">Register</NavLink>
          <NavLink className="loginLink" to="/login">Login</NavLink>
        </nav>
      </Route>
      <Route path="/register">
        <nav>
          <NavLink className="homeLink" to="/">Home</NavLink>
          <NavLink className="signupLink" to="/register">Register</NavLink>
          <NavLink className="loginLink" to="/login">Login</NavLink>
        </nav>
        <SignupForm />
      </Route>
      <Route path="/login">
        <nav>
          <NavLink className="homeLink" to="/">Home</NavLink>
          <NavLink className="signupLink" to="/register">Register</NavLink>
          <NavLink className="loginLink" to="/login">Login</NavLink>
        </nav>
        <LoginForm token={token} setToken={setToken}/>
      </Route>
    </div>
  );
}

export default App;