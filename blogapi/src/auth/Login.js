import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: pink[500],
    // color: theme.palette.getContrastText(pink[500]),
  },
  signInBtn: {
    marginTop: 20,
    marginBottom: 5,
  },
}));

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      window.location.href = "/";
    }
  }, []);
  function usernameChange(e) {
    setUsername(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  async function formSubmit(e) {
    const apiUrl = "http://localhost:8000/api/token/";
    const loginData = { username: username, password: password };
    const { data } = await axios.post(apiUrl, loginData);
    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    console.log(localStorage.getItem("access_token"));
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    window.location.href = "/";
  }

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 55,
          marginBottom: 170,

          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Avatar className={classes.avatar}>
          <AccountCircleSharpIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom align="center">
          Sign in{" "}
        </Typography>
        {/* <Box component="form" noValidate> */}
        <Box>
          <TextField
            required
            margin="normal"
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={usernameChange}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            id="outlined-password-input"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={passwordChange}
          />
          <FormControlLabel
            sx={{ alignContent: "justify", mb: 50 }}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />{" "}
          <Button
            type="submit"
            className={classes.signInBtn}
            color="primary"
            variant="contained"
            onClick={formSubmit}
            fullWidth
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
