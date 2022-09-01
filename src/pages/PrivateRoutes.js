import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let isAuthenticated = window.localStorage.getItem("isAuthenticated");
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  // console.log(typeof isAuthenticated);
  return isAuthenticated === "true" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
