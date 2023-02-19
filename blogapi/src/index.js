import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer, SinglePost } from "./components";

import Login from "./auth/Login";
import Logout from "./auth/Logout";

import Register from "./auth/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog/:id" element={<SinglePost />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
