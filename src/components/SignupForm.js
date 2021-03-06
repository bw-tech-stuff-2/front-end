import React, { useState, useEffect } from "react";
import axios from "axios";
import SignupFormSchema from "../validation/SignupFormSchema";
import * as yup from "yup";
import { Select, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom"
// import Button from "@material-ui/core/Button";
import styled from "styled-components"

const StyledTextField = styled(TextField)`
    width: 30%;
    margin: 10px 0;
`;

const SignupForm = (props) => {

    const initialUserValues = {
        fullName: "",
        username: "",
        password: "",
        email: "",
        userType: "",
    }
    const initialSignUpFormErrors = {
        fullName: "",
        username: "",
        password: "",
        userType: "",
    }
    const initialDisabled = false;

    const [signupFormErrors, setSignupFormErrors] = useState(initialSignUpFormErrors);
    const [userValues, setUserValues] = useState(initialUserValues);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [token, setToken] = useState("");
    const history = useHistory();
    const { push } = history;

    const postNewUser = newUser => {
        let postUser = {
            username: newUser.username,
            password: newUser.password,
            email: newUser.email,
        }
        if (newUser.userType === "renter") {
            postUser.renterName = newUser.fullName;
            axios.post("https://usemytechstuff2.herokuapp.com/api/renters/auth/register", postUser)
                .then(res => {
                    console.log(res)
                    setToken(res.data.token)
                    console.log(token)
                })
                .finally(setUserValues(initialUserValues))
        } else if (newUser.userType === "owner") {
            postUser.ownerName = newUser.fullName;
            axios.post("https://usemytechstuff2.herokuapp.com/api/owners/auth/register", postUser)
                .then(res => {
                    console.log(res)
                    setToken(res.data.token)
                    console.log(token)
                })
                .finally(setUserValues(initialUserValues))
        }
    }
    // Required: Username, Full Name, Password, Choice of Renter or Owner
    // Not Required: Email

    const onSignupInputChange = evt => {
        const { name, value } = evt.target;
        yup
            .reach(SignupFormSchema, name)
            .validate(value)
            .then(valid => {
                setSignupFormErrors({ ...signupFormErrors, [name]: "" })
            })
            .catch(err => {
                setSignupFormErrors({ ...signupFormErrors, [name]: err.errors[0] })
            })
        setUserValues({ ...userValues, [name]: value });
    }

    const onSubmitSignup = evt => {
        evt.preventDefault()

        const newUser = {
            username: userValues.username.trim(),
            password: userValues.password.trim(),
            fullName: userValues.fullName.trim(),
            email: userValues.email.trim(),
            userType: userValues.userType.trim(),
        }
        postNewUser(newUser);
        push("/login");
    }

    useEffect(() => {
        SignupFormSchema.isValid(userValues)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [userValues])

    return (
        <form className="registerForm" onSubmit={onSubmitSignup}>
            <h1>Sign Up</h1>
            <label>I am a &nbsp;
                <Select onChange={onSignupInputChange} value={userValues.userType} name="userType" >
                    <option value=""></option>
                    <option value="renter">Renter</option>
                    <option value="owner">Owner</option>
                </Select>
            </label>
            <div>{signupFormErrors.userType}</div>
            <StyledTextField value={userValues.fullName} name="fullName" onChange={onSignupInputChange} label="Full Name" variant="outlined"></StyledTextField>
            <div>{signupFormErrors.fullName}</div>
            <StyledTextField value={userValues.username} onChange={onSignupInputChange} name="username" label="Username" variant="outlined"></StyledTextField>
            <div>{signupFormErrors.username}</div>
            <StyledTextField type="password" value={userValues.password} onChange={onSignupInputChange} name="password" label="Password" variant="outlined"></StyledTextField>
            <div>{signupFormErrors.password}</div>
            <StyledTextField value={userValues.email} onChange={onSignupInputChange} name="email" label="Email" variant="outlined"></StyledTextField>
            <div>{signupFormErrors.email}</div>
            <br></br>
            <button disabled={disabled} className="submit" variant="contained" color="primary">Register</button>
        </form>
    );
}

export default SignupForm;