import React, {useState} from 'react';
import './App.css';
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import {Route, NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const StyledFormDiv = styled.div`
  margin: 100px 0 0 0;
  display: flex;
  flex-flow: column;
  text-align: center;
`;

function App() {
  const [token, setToken] = useState("");
  return (
    <div>
      <Route exact path = "/">
        <AppBar>
          <Button component={NavLink} color="inherit" className="homeLink" to="/">Home</Button>
          <Button component={NavLink} color="inherit" className="signupLink" to="/register">Register</Button>
          <Button component={NavLink} color="inherit" className="loginLink" to="/login">Login</Button>
        </AppBar>
      </Route>
      <Route path="/register">
        <AppBar>
          <Button component={NavLink} color="inherit" className="homeLink" to="/">Home</Button>
          <Button component={NavLink} color="inherit" className="signupLink" to="/register">Register</Button>
          <Button component={NavLink} color="inherit" className="loginLink" to="/login">Login</Button>
        </AppBar>
        <StyledFormDiv>
        <SignupForm />
        </StyledFormDiv>
      </Route>
      <Route path="/login">
        <AppBar>
          <Button component={NavLink} color="inherit" className="homeLink" to="/">Home</Button>
          <Button component={NavLink} color="inherit" className="signupLink" to="/register">Register</Button>
          <Button component={NavLink} color="inherit" className="loginLink" to="/login">Login</Button>
        </AppBar>
        <StyledFormDiv>
        <LoginForm token={token} setToken={setToken}/>
        </StyledFormDiv>
      </Route>
    </div>
  );
}

export default App;