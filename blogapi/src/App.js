import React, { useEffect, useState } from "react";
import "./App.css";
import { Posts, PostsLoading } from "./components";
import axios from "axios";

export default function App() {
  const [appState, setAppState] = useState({ loading: true, posts: null });

  useEffect(() => {
    const appUrl = "http://localhost:8000/api/";
    axios
      .get(appUrl)
      .then((response) =>
        setAppState({ loading: false, posts: response.data })
      );
  }, []);

  if (appState.posts) {
    return <Posts posts={appState.posts} />;
  }
  return <h1>Data is loading. Please Wait!!!</h1>;
}
