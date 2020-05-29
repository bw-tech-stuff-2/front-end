import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { Route, NavLink } from "react-router-dom";

import RenterPage from "./components/RenterPage";
import TechPage from "./components/TechPage";
import AddTechItem from "./components/AddTechItem";
import RenterPageInfo from "./components/RenterPageInfo";
import TechPageInfo from "./components/TechPageInfo";
import PrivateRoute from "./components/PrivateRoute";
import { AppBar, Button, withStyles } from "@material-ui/core";
import styled from "styled-components";

const StyledFormDiv = styled.div`
  margin: 170px 0 0 0;
  display: flex;
  flex-flow: column;
  text-align: center;
`;

const StyledAppBar = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    background: "#4392F1",
  }
})(AppBar);

const StyledButton = styled(Button)`
  width: 10%;
`;

const StyledH2 = styled.h2`
  margin-left: 10px;
`;

function App() {
  return (
    <div>
      <Route exact path="/">
        <StyledAppBar>
          <StyledH2>Use My Tech Stuff</StyledH2>
          <div>
            <StyledButton
              target="_blank"
              color="inherit"
              className="homeLink"
              href="https://practical-visvesvaraya-6e178e.netlify.app/"
            >
              Home
          </StyledButton>
            <StyledButton
              component={NavLink}
              color="inherit"
              className="signupLink"
              to="/register"
            >
              Register
          </StyledButton>
            <StyledButton
              component={NavLink}
              color="inherit"
              className="loginLink"
              to="/login"
            >
              Login
          </StyledButton>
          </div>
        </StyledAppBar>
      </Route>
      <Route path="/register">
        <StyledAppBar>
          <StyledH2>Use My Tech Stuff</StyledH2>
          <div>
            <StyledButton
              component={NavLink}
              color="inherit"
              className="homeLink"
              to="/"
            >
              Home
          </StyledButton>
            <StyledButton
              component={NavLink}
              color="inherit"
              className="signupLink"
              to="/register"
            >
              Register
          </StyledButton>
            <StyledButton
              component={NavLink}
              color="inherit"
              className="loginLink"
              to="/login"
            >
              Login
          </StyledButton>
          </div>
        </StyledAppBar>
        <StyledFormDiv>
          <SignupForm />
        </StyledFormDiv>
      </Route>
      <Route path="/login">
        <StyledAppBar>
          <StyledH2>Use My Tech Stuff</StyledH2>
          <div>
            <StyledButton
              component={NavLink}
              color="inherit"
              className="homeLink"
              to="/"
            >
              Home
          </StyledButton>
            <StyledButton
              component={NavLink}
              color="inherit"
              className="signupLink"
              to="/register"
            >
              Register
          </StyledButton>
            <StyledButton
              component={NavLink}
              color="inherit"
              className="loginLink"
              to="/login"
            >
              Login
          </StyledButton>
          </div>
        </StyledAppBar>
        <StyledFormDiv>
          <LoginForm />
        </StyledFormDiv>
      </Route>
      <PrivateRoute path="/renterPage" component={RenterPage} />
      <PrivateRoute path="/techPage" component={TechPage} />
      <PrivateRoute path="/renterPageInfo" component={RenterPageInfo} />
      <PrivateRoute path="/techPageInfo" component={TechPageInfo} />
      <PrivateRoute path="/addTechItem" component={AddTechItem} />
    </div>
  );
}

export default App;
