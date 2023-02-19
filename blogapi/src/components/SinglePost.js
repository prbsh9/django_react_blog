import { Container, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

// Single Post in a page. blog/id
export default function SinglePost(props) {
  const UseStyles = makeStyles((theme) => ({
    container: {
      marginTop: 50,
      marginBottom: 150,
    },
  }));
  const location = useLocation();
  const [postData, setPostData] = useState({});
  const id =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  useEffect(() => {
    const apiUrl = `http://localhost:8000/api/${id}/`;

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    axios.get(apiUrl).then((response) => setPostData(response.data));
  }, []);
  const classes = UseStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Typography variant="h2" paragraph align="center">
        {postData.title}
      </Typography>
      <Typography align="justify" variant="caption" color="secondary">
        {postData.excerpt}
      </Typography>
      <Typography align="justify" variant="body1">
        {postData.content}
      </Typography>
    </Container>
  );
}
