import {
  Paper,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  CssBaseline,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import React from "react";
import useLogin from "./useLogin";
import Loading from "../../components/Loading";

export default function Login() {
  const { userForm, handleInputChange, dispatchLogin, status, validationMsg } =
    useLogin();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      {/* image for desktop */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1623073284788-0d846f75e329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z291cm1ldCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {/* form  */}
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* icon */}
          <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
            <LockOpenIcon />
          </Avatar>
          {/* header */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* form itself */}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={userForm.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={userForm.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* error msg if needed */}
            {validationMsg ? (
              <Typography color={"error"}>{validationMsg}</Typography>
            ) : null}

            {/* submit action */}
            <Button
              onClick={() => dispatchLogin(userForm)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
