import React, { useContext, useState } from "react";
import login from '../assets/images/login.png'
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
  image: {
    // Add styling for your image here
    width: "100%",
    height: "auto",
  },
}));

const Login = (props) => {
  const navigate = useNavigate();

  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const verified = !Object.keys(inputErrorHandler).some((obj) => {
      return inputErrorHandler[obj].error;
    });
    if (verified) {
      axios
        .post(apiList.login, loginDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response?.data?.message || "An error occurred",
          });
          console.error(err.response);
        });
    } else {
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  if (loggedin) {
    // Redirect to "/" if logged in
    navigate("/");
    // You can also return null here if you don't want to render anything
    return null;
  }

  return (
    <Paper elevation={3} className={classes.body}>
      <Grid container spacing={4}>
        {/* Left Column (Image) */}
        <Grid item xs={12} sm={6}>
          <img
            src={login}
            alt="Left Column Image"
            className={classes.image}
          />
        </Grid>

        {/* Right Column (Login Form) */}
        <Grid item xs={12} sm={6}>
          <Grid
            container
            direction="column"
            spacing={4}
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h3" component="h2">
                Login
              </Typography>
            </Grid>
            <Grid item>
              <EmailInput
                label="Email"
                value={loginDetails.email}
                onChange={(event) =>
                  handleInput("email", event.target.value)
                }
                inputErrorHandler={inputErrorHandler}
                handleInputError={handleInputError}
                className={classes.inputBox}
              />
            </Grid>
            <Grid item>
              <PasswordInput
                label="Password"
                value={loginDetails.password}
                onChange={(event) =>
                  handleInput("password", event.target.value)
                }
                className={classes.inputBox}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleLogin()}
                className={classes.submitButton}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;
