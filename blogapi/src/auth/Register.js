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
import React, { useEffect, useState } from "react";
// import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import { pink } from "@material-ui/core/colors";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: pink[500],
    // color: theme.palette.getContrastText(pink[500]),
  },
  signInBtn: {
    marginTop: 20,
    marginBottom: 5,
  },
  alreadyAccount: {
    marginTop: 10,
  },
}));

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function emailChange(e) {
    setEmail(e.target.value);
  }
  function usernameChange(e) {
    setUsername(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  async function formSubmit(e) {
    const apiUrl = "http://localhost:8000/api/register/";
    const loginData = { username: username, email: email, password: password };
    const { data } = await axios.post(apiUrl, loginData);
    console.log(data);
    window.location.href = "/login";
  }
  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      window.location.href = "/";
    }
  }, []);

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
          Sign up{" "}
        </Typography>
        <Box>
          <TextField
            required
            margin="normal"
            fullWidth
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            onChange={emailChange}
            value={email}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            id="outlined-basic"
            onChange={usernameChange}
            value={username}
            label="Username"
            variant="outlined"
          />
          <TextField
            required
            margin="normal"
            fullWidth
            onChange={passwordChange}
            value={password}
            id="outlined-password-input"
            type="password"
            label="Password"
            variant="outlined"
          />
          <FormControlLabel
            sx={{ alignContent: "justify", mb: 50 }}
            control={<Checkbox value="remember" color="primary" />}
            label="I want to receive inspiration, marketing, promotions and updates via email"
          />{" "}
          <Button
            type="submit"
            className={classes.signInBtn}
            color="primary"
            onClick={formSubmit}
            variant="contained"
            fullWidth
          >
            Sign up
          </Button>
          <Grid container justify="flex-end">
            <Grid item className={classes.alreadyAccount}>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
