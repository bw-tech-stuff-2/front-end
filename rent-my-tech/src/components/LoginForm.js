import React from "react";

const LoginForm = (props) => {
    const { values, onInputChange, onSubmit, disabled, errors } = props;
    /*
    -> values is user values
    -> onInputChange is to change user values
    -> onSubmit is to prevent refresh and to send info
    -> disabled is to keep sign up button disabled if required fields are not completed
    -> errors are to let user know what fields are not filled
    */

    // Required: Username, Full Name, Password, Choice of Renter or Owner
    // Not Required: Email

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            <label>Full Name: 
                <input type="text" value={values.fullName} onChange={onInputChange} name="fullName"></input>
            </label>
            <div>{errors.fullName}</div>
            <label>Username: 
                <input type="text" value={values.username} onChange={onInputChange} name="username"></input>
            </label>
            <div>{errors.username}</div>
            <label>Password: 
                <input type="password" value={values.password} onChange={onInputChange} name="password"></input>
            </label>
            <div>{errors.password}</div>
            <label>Email
                <input type="text" value={values.email} onChange={onInputChange} name="email"></input>
            </label>
            <div>{errors.email}</div>
            <label>I am a 
                <select onChange={onInputChange} value={values.userType} name="userType">
                    <option value=""></option>
                    <option value="renter">Renter</option>
                    <option value="owner">Owner</option>
                </select>
            </label>
            <button disabled={disabled} className="submit">Register</button>
        </form>
    );
}

export default LoginForm;