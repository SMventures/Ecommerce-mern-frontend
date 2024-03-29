import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  // Check if the user is authenticated and has the role of "ADMIN"
  const isAdmin = localStorage.getItem("role") === "ADMIN";
  console.log("isadmin",isAdmin) // Check if user has the role of "ADMIN"

  // If user is authenticated and has the role of "ADMIN", render the provided element
  // Otherwise, navigate to the home page
  return isAdmin ? (
    <Route {...rest} element={element} />
  ) : (
    <Route {...rest} element={element} />
  );
};

export default ProtectedRoute;
