import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('role') === 'admin';
  console.log("isAdmmin",isAdmin)

  if (isAdmin) {
   
    return children;
  }

  return <Navigate to="/login" replace />; 
};

export default ProtectedRoute;
