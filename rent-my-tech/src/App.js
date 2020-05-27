import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { Route, NavLink } from "react-router-dom";
import RenterPage from "./components/RenterPage";
import TechPage from "./components/TechPage";
import { AppBar, Button } from "@material-ui/core";
import styled from "styled-components";

const StyledFormDiv = styled.div`
  margin: 170px 0 0 0;
  display: flex;
  flex-flow: column;
  text-align: center;
`;

const StyledAppBar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 10%;
`;

function App() {
  return (
    <div>
      <Route exact path="/">
        <StyledAppBar>
          <h2>Use My Tech Stuff</h2>
          <StyledButton component={NavLink} color="inherit" className="homeLink" to="/">
            Home
          </StyledButton>
          <StyledButton component={NavLink} color="inherit" className="signupLink" to="/register">
            Register
          </StyledButton>
          <StyledButton component={NavLink} color="inherit" className="loginLink" to="/login">
            Login
          </StyledButton>
        </StyledAppBar>
      </Route>
      <Route path="/register">
        <StyledAppBar>
          <h2>Use My Tech Stuff</h2>
          <StyledButton component={NavLink} color="inherit" className="homeLink" to="/">
            Home
          </StyledButton>
          <StyledButton component={NavLink} color="inherit" className="signupLink" to="/register">
            Register
          </StyledButton>
          <StyledButton component={NavLink} color="inherit" className="loginLink" to="/login">
            Login
          </StyledButton>
        </StyledAppBar>
        <StyledFormDiv>
          <SignupForm />
        </StyledFormDiv>
      </Route>
      <Route path="/login">
        <StyledAppBar>
          <h2>Use My Tech Stuff</h2>
          <StyledButton component={NavLink} color="inherit" className="homeLink" to="/">
            Home
          </StyledButton>
          <StyledButton component={NavLink} color="inherit" className="signupLink" to="/register">
            Register
          </StyledButton>
          <StyledButton component={NavLink} color="inherit" className="loginLink" to="/login">
            Login
          </StyledButton>
        </StyledAppBar>
        <StyledFormDiv>
          <LoginForm />
        </StyledFormDiv>
      </Route>
      <Route path="/renterPage" component={RenterPage} />
      <Route path="/techPage" component={TechPage} />
    </div>
  );
}

export default App;
