import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import RenterPage from "./components/RenterPage";
import TechPage from "./components/TechPage";
import AddTechItem from "./components/AddTechItem";
import RenterPageInfo from "./components/RenterPageInfo";
import TechPageInfo from "./components/TechPageInfo";
import PrivateRoute from "./components/PrivateRoute";
import NavigationBar from "./components/NavigationBar"
import styled from "styled-components";

const StyledFormDiv = styled.div`
  margin: 170px 0 0 0;
  display: flex;
  flex-flow: column;
  text-align: center;
`;


function App() {
  return (
    <div>
      <Header />
      <Route exact path="/">
        <NavigationBar />
      </Route>
      <Route path="/register">
        <NavigationBar />
        <StyledFormDiv>
          <SignupForm />
        </StyledFormDiv>
      </Route>
      <Route path="/login">
        <NavigationBar />
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
