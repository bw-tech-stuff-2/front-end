import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppBar, Button, withStyles } from "@material-ui/core";


const StyledAppBar = withStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        background: "#4392F1",
    },
})(AppBar);


const StyledButton = styled(Button)`
  width: 10%;
`;

const StyledH2 = styled.h2`
  margin-left: 10px;
`;

export default function NavigationBar() {
    return (
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
    );
}