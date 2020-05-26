import React, {useState, useEffect} from 'react';
import './App.css';
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import * as yup from "yup";
import LoginFormSchema from "./validation/LoginFormSchema";
import SignupFormSchema from "./validation/SignupFormSchema";
import axios from "axios";
import {Route, NavLink} from "react-router-dom";

function App() {
  const initialRentersList = [];
  const initialOwnersList = [];
  const initialUserValues = {
    fullName: "",
    username: "",
    password: "",
    email: "",
    userType: "",
  }
  const initialLoginValues = {
    username: "",
    password: "",
  }
  const initialSignUpFormErrors = {
    fullName: "",
    username: "",
    password: "",
    userType: "",
  }
  const initialLoginFormErrors = {
    fullName: "",
    username: "",
    password: "",
    userType: "",
  }
  const initialDisabled = false;
  
  const [renters, setRenters] = useState(initialRentersList);
  const [owners, setOwners] = useState(initialOwnersList);
  const [userValues, setUserValues] = useState(initialUserValues);
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [signupFormErrors, setSignupFormErrors] = useState(initialSignUpFormErrors);
  const [loginFormErrors, setLoginFormErrors] = useState(initial)
  const [disabled, setDisabled] = useState(disabled);

  const onSignupInputChange = evt => {
    const {name, value} = evt.target;
    yup
      .reach(SignupFormSchema, name)
      .validate(value)
      .then(valid => {
        setSignupFormErrors({...signupFormErrors, [name]: ""})
      })
      .catch(err => {
        setSignupFormErrors({...signupFormErrors, [name]: err.errors[0]})
      })
    setSignupFormErrors({...signupFormErrors, [name]:: value});
  }

  const onLoginInputChange = evt => {
    const {name, value} = evt.target;
    yup
      .reach(LoginFormSchema, name)
      .validate(value)
      .then(valid => {
        setLoginFormErrors({...loginFormErrors, [name]: ""})
      })
      .catch(err => {
        setLoginFormErrors({...loginFormErrors, [name]: err.errors[0]})
      })
    setLoginFormErrors({...loginFormErrors, [name]: value});
  }

  const postNewUser = newUser => {
    const postUser = {
      fullName: newUser.fullName,
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
    }
    if (newUser.userType === "renter") {
      axios.post("https://usemytechstuff2.herokuapp.com/api/renters/auth/register", postUser)
        .then(res => {
          setRenters([...renters, res.data])
        })
        .finally(setUserValues(initialUserValues))
    } else if (newUser.userType === "owner") {
      axios.post("https://usemytechstuff2.herokuapp.com/api/owners/auth/register", postUser)
        .then(res => {
          setOwners([...owners, res.data])
        })
        .finally(setUserValues(initialUserValues))
    }
  }

  useEffect(() => {
    SignupFormSchema.isValid(userValues)
      .then(valid => {
        setDisabled(!valid)
      })
    }, [userValues])

  useEffect(() => {
    LoginFormSchema.isValid(loginValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [loginValues])

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
  }

  return (
    <div>
      <Route exact path = "/">
        <nav>
          <NavLink className="homeLink" to="/">Home</NavLink>
          <NavLink className="signupLink" to="/register">Register</NavLink>
          <NavLink className="loginLink" to="/login">Login</NavLink>
        </nav>
      </Route>
      <Route path="/register">
        <nav>
          <NavLink className="homeLink" to="/">Home</NavLink>
          <NavLink className="signupLink" to="/register">Register</NavLink>
          <NavLink className="loginLink" to="/login">Login</NavLink>
        </nav>
        <SignupForm values={userValues} onInputChange={onSignupInputChange} onSubmit={onSubmitSignup} disabled={disabled} errors={signupFormErrors}></SignupForm>
      </Route>
    </div>
  );
}

export default App;