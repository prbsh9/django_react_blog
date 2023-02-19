import axios from "axios";
import React, { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/logout/";
    axios.post(apiUrl, { refresh: localStorage.getItem("refresh_token") });
    localStorage.clear();
    window.location.href = "/login";
  }, []);
  return <div>Logout</div>;
}
