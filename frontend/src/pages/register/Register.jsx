import useRegister from "./useRegister";
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

function Register() {
  const { userForm, handleInputChange, dispatchRegister } = useRegister();
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
            "url(https://media.istockphoto.com/photos/roast-duck-with-beetroot-sauce-picture-id628582456?k=20&m=628582456&s=612x612&w=0&h=q9_gKQCCXO-Cc7yXZO8HiTfsXi5tP5RkzsxSTQH1R7Q=)",
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
            Register
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

            {/* submit action */}
            <Button
              onClick={() => dispatchRegister(userForm)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              REGISTER
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Register;

// const { userForm, handleInputChange, dispatchLogin, status, validationMsg } =
