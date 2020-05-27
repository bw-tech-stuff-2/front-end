import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import * as yup from "yup";
import LoginFormSchema from "../validation/LoginFormSchema";
import axios from "axios";

const LoginForm = (props) => {
    const {token, setToken} = props;

    const initialUserValues = {
        fullName: "",
        username: "",
        password: "",
        email: "",
        userType: "",
    }
    const initialLoginFormErrors = {
        fullName: "",
        username: "",
        password: "",
        userType: "",
    }
    const initialDisabled = false;

    const [userValues, setUserValues] = useState(initialUserValues);
    const [loginFormErrors, setLoginFormErrors] = useState(initialLoginFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    // const [token, setToken] = useState("");
    const history = useHistory();
    const { push } = history;
    // Required: Username, Full Name, Password, Choice of Renter or Owner
    // Not Required: Email

    const onLoginInputChange = evt => {
        const { name, value } = evt.target;
        yup
            .reach(LoginFormSchema, name)
            .validate(value)
            .then(valid => {
                setLoginFormErrors({ ...loginFormErrors, [name]: "" })
            })
            .catch(err => {
                setLoginFormErrors({ ...loginFormErrors, [name]: err.errors[0] })
            })
        setUserValues({ ...userValues, [name]: value });
    }

    const onSubmitLogin = evt => {
        evt.preventDefault()
        const newUser = {
            username: userValues.username.trim(),
            password: userValues.password.trim(),
            fullName: userValues.fullName.trim(),
            userType: userValues.userType.trim(),
        }
        if (newUser.userType === "owner") {
        axios.post("https://usemytechstuff2.herokuapp.com/api/owners/auth/login", newUser)
            .then(res => {
                push("/");
                setToken(res.data.token);
                console.log(res.data.token);
                console.log(token)
                // return res.data.token;
            })
        } else if (newUser.userType === "renter") {
        axios.post("https://usemytechstuff2.herokuapp.com/api/renters/auth/login", newUser)
        .then(res => {
            push("/");
            setToken(res.data.token);
            console.log(res.data.token);
            console.log(token)
            // return res.data.token;
        })
        }
    }

    useEffect(() => {
        LoginFormSchema.isValid(userValues)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [userValues])

    return (
        <form onSubmit={onSubmitLogin}>
            <h1>Login</h1>
            <label>I am a
                <select onChange={onLoginInputChange} value={userValues.userType} name="userType">
                    <option value=""></option>
                    <option value="renter">Renter</option>
                    <option value="owner">Owner</option>
                </select>
            </label>
            <div>{loginFormErrors.userType}</div>
            <label>Username:
                <input type="text" value={userValues.username} onChange={onLoginInputChange} name="username"></input>
            </label>
            <div>{loginFormErrors.username}</div>
            <label>Password:
                <input type="password" value={userValues.password} onChange={onLoginInputChange} name="password"></input>
            </label>
            <div>{loginFormErrors.password}</div>
            <label>Full Name:
                <input type="text" value={userValues.fullName} onChange={onLoginInputChange} name="fullName"></input>
            </label>
            <div>{loginFormErrors.fullName}</div>
            <button disabled={disabled} className="submit">Sign In</button>
        </form>
    );
}

export default LoginForm;