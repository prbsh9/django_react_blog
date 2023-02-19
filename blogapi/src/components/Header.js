import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { alpha, makeStyles, styled } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Button, InputBase, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  // root: {
  //   flexGrow: 1,
  // },
  title: {
    flexGrow: 1,
  },
  btn: {
    marginRight: 10,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuthenticated(true);
    }
  }, []);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        // classesName={classes.root}
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            <Link href="/"> BlogmeUp </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {!isAuthenticated && (
            <div>
              <Button href="/register" className={classes.btn} color="inherit">
                Register
              </Button>
              <Button
                href="/login"
                color="primary"
                className={classes.btn}
                variant="outlined"
              >
                <Typography color="primary">login</Typography>
              </Button>
            </div>
          )}

          {isAuthenticated && (
            <div>
              <Link href="/"> User xxxx </Link>
              <Button
                href="/logout"
                className={classes.btn}
                color="primary"
                variant="outlined"
              >
                <Typography color="primary">LOGOUT</Typography>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
