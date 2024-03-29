import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check for authentication token in localStorage
  const isAdmin = localStorage.getItem('role') === 'admin'; // Check for "admin" role in localStorage

  if (isAuthenticated && isAdmin) {
    // Render the protected component using children
    return children;
  }

  // Redirect to login or a specific error page
  return <Navigate to={isAuthenticated ? '/unauthorized' : '/login'} replace />;
};

export default ProtectedRoute;
