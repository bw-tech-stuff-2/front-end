import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import * as yup from "yup";
import LoginFormSchema from "../validation/LoginFormSchema";
import axios from "axios";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

const LoginForm = (props) => {

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
                window.localStorage.setItem("token", res.data.token)
                push("/techPage");
            })
        } else if (newUser.userType === "renter") {
        axios.post("https://usemytechstuff2.herokuapp.com/api/renters/auth/login", newUser)
            .then(res => {
                window.localStorage.setItem("token", res.data.token)
                console.log("hi")
                push("/renterPage");
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
            <label>I am a &nbsp;
                <Select onChange={onLoginInputChange} value={userValues.userType} name="userType">
                    <option value=""></option>
                    <option value="renter">Renter</option>
                    <option value="owner">Owner</option>
                </Select>
            </label>
            <div>{loginFormErrors.userType}</div>
                <TextField type="text" value={userValues.fullName} onChange={onLoginInputChange} name="fullName" label="Full Name"></TextField>
            <div>{loginFormErrors.fullName}</div>
                <TextField type="text" value={userValues.username} onChange={onLoginInputChange} name="username" label="Username"></TextField>
            <div>{loginFormErrors.username}</div>
                <TextField type="password" value={userValues.password} onChange={onLoginInputChange} name="password" label="Password"></TextField>
            <div>{loginFormErrors.password}</div>
            <br></br>
            <button disabled={disabled} className="submit" variant="contained" color="primary">Sign In</button>
        </form>
    );
}

export default LoginForm;
// export default connect(null, {})(LoginForm)
