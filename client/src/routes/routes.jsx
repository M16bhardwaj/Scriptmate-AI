// src/routes.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../components/home";
// import Login from "../components/auth/login";
// import Register from "../components/auth/register";
import Home from "../components/Home";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import CreateScript from "../components/CreateScript";
import PrivateRoute from "../components/PrivateRoutes";
import About from "../pages/About";
import ForBusiness from "../pages/ForBusiness";
import Blog from "../pages/Blog";
import LearnMore from "../pages/LearnMore";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/about" element={<About />} />
    <Route path="/business" element={<ForBusiness />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/learn-more" element={<LearnMore />} />
    <Route element={<PrivateRoute />}>
      <Route path="/create-script" element={<CreateScript />} />
    </Route>
  </Routes>
);

export default AppRoutes;
