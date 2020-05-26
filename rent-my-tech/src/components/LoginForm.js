import React from "react";

const LoginForm = (props) => {
    const { values, onLoginInputChange, onSubmit, disabled, errors } = props;
    /*
    -> values is user values
    -> onLoginInputChange is to change user values
    -> onSubmit is to prevent refresh and to send info
    -> disabled is to keep sign up button disabled if required fields are not completed
    -> errors are to let user know what fields are not filled
    */

    // Required: Username, Full Name, Password, Choice of Renter or Owner
    // Not Required: Email

    return (
        <form onSubmit={onSubmit}>
            <h1>Login</h1>
            <label>I am a 
                <select onChange={onLoginInputChange} value={values.userType} name="userType">
                    <option value=""></option>
                    <option value="renter">Renter</option>
                    <option value="owner">Owner</option>
                </select>
            </label>
            <label>Username: 
                <input type="text" value={values.username} onChange={onLoginInputChange} name="username"></input>
            </label>
            <div>{errors.username}</div>
            <label>Password: 
                <input type="password" value={values.password} onChange={onLoginInputChange} name="password"></input>
            </label>
            <div>{errors.password}</div>
            <label>Full Name:
                <input type="text" value={values.fullName} onChange={onLoginInputChange} name="fullName"></input>
            </label>
            <button disabled={disabled} className="submit">Sign In</button>
        </form>
    );
}

export default LoginForm;