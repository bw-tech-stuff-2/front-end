import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { Route, NavLink } from "react-router-dom";

import RenterPage from "./components/RenterPage";
import TechPage from "./components/TechPage";
import RenterPageInfo from './components/RenterPageInfo'
import TechPageInfo from './components/TechPageInfo'
import PrivateRoute from './components/PrivateRoute'
// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
import {
  AppBar,
  Button
} from '@material-ui/core'
import { AppBar, Button } from "@material-ui/core";
import styled from "styled-components";

const StyledFormDiv = styled.div`
  margin: 100px 0 0 0;
  display: flex;
  flex-flow: column;
  text-align: center;
`;

function App() {
  return (
    <div>
      <Route exact path="/">
        <AppBar>
          <Button component={NavLink} color="inherit" className="homeLink" to="/">
            Home
          </Button>
          <Button component={NavLink} color="inherit" className="signupLink" to="/register">
            Register
          </Button>
          <Button component={NavLink} color="inherit" className="loginLink" to="/login">
            Login
          </Button>
        </AppBar>
      </Route>
      <Route path="/register">
        <AppBar>
          <Button component={NavLink} color="inherit" className="homeLink" to="/">
            Home
          </Button>
          <Button component={NavLink} color="inherit" className="signupLink" to="/register">
            Register
          </Button>
          <Button component={NavLink} color="inherit" className="loginLink" to="/login">
            Login
          </Button>
        </AppBar>
        <StyledFormDiv>
          <SignupForm />
        </StyledFormDiv>
      </Route>
      <Route path="/login">
        <AppBar>
          <Button component={NavLink} color="inherit" className="homeLink" to="/">
            Home
          </Button>
          <Button component={NavLink} color="inherit" className="signupLink" to="/register">
            Register
          </Button>
          <Button component={NavLink} color="inherit" className="loginLink" to="/login">
            Login
          </Button>
        </AppBar>
        <StyledFormDiv>
          <LoginForm />
        </StyledFormDiv>
      </Route>
      <PrivateRoute path="/renterPage" component={RenterPage} />
      <PrivateRoute path="/techPage" component={TechPage} />
      <PrivateRoute path="/renterPageInfo" component={RenterPageInfo} />
      {/* <Route path="/techPageInfo" component={TechPageInfo} /> */}
    </div>
  );
}

export default App;
