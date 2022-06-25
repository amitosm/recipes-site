import { Button, Typography } from "@mui/material";
import React from "react";
import InputAndLabel from "../../components/InputAndLabel";
import useLogin from "./useLogin";

export default function Login() {
  const { userForm, handleInputChange, dispatchLogin, status, validationMsg } =
    useLogin();

  if (status === "loading") {
    return "Loading.";
  }

  return (
    <div className="login-container">
      {validationMsg ? <Typography>{validationMsg}</Typography> : null}
      <InputAndLabel
        styles={{ marginTop: 2 }}
        label="Username"
        color={"secondary"}
        value={userForm.username}
        handleChange={handleInputChange}
      />
      <InputAndLabel
        styles={{ marginTop: 2 }}
        label="Password"
        color={"secondary"}
        value={userForm.password}
        handleChange={handleInputChange}
        inputType="password"
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatchLogin(userForm)}
      >
        Login
      </Button>
    </div>
  );
}
