import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, OutlinedInput } from "@mui/material";
import { AppRoute } from "routing/AppRoute.enum";
import sideImage from "./assets/sideImage.png";
import "./Login.css";

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("https://join-tsh-api-staging.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
      .then((data) => console.log(data)) //TODO: set the user here
      .catch((error) => console.log(error));
  };
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.currentTarget;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  return (
    <>
      <div className="loginContainer">
        <img src={sideImage} alt="sideImage" />
        <form onSubmit={handleSubmit}>
          <p>join.tsh.io</p>
          <div>
            <h2>Login</h2>
            <label htmlFor="username">Username</label>
            <OutlinedInput
              placeholder="Enter Username"
              id="username"
              name="username"
              onChange={(e) => handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>

            <OutlinedInput
              placeholder="Enter Password"
              id="password"
              name="password"
              type="password"
              onChange={(e) => handleChange}
            />
          </div>
          <Button variant="contained" type="submit">
            submit
          </Button>
          <span className="text-lighten">
            <Link to={AppRoute.Home}>
              <abbr>Forgot password?</abbr>
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};
