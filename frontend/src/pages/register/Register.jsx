import React from "react";
import { Box, Button } from "@mui/material";
import InputAndLabel from "../../components/InputAndLabel";
import useRegister from "./useRegister";

function Register() {
  const { userForm, handleInputChange, dispatchRegister } = useRegister();
  return (
    <Box>
      <InputAndLabel
        styles={{ marginTop: 2 }}
        label="Username"
        color="secondary"
        value={userForm.username}
        handleChange={handleInputChange}
      />

      <InputAndLabel
        inputType={"password"}
        styles={{ marginTop: 2 }}
        label="Password"
        color="secondary"
        value={userForm.password}
        handleChange={handleInputChange}
      />

      <Button
        sx={{ marginTop: 2 }}
        variant="contained"
        color="secondary"
        onClick={() => dispatchRegister(userForm)}
      >
        Register
      </Button>
    </Box>
  );
}

export default Register;
