import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminPannel from "../Admin/AdminPannel";
import DemoAdmin from "../Admin/Views/DemoAdmin";
import UnauthorizedPage from "../Pages/Unauthorized"; // Import the UnauthorizedPage component

const AdminRoutes = () => {
  const isAdmin = localStorage.getItem("role") === "ADMIN";
  console.log("isAdmin",isAdmin)
  
  return (
    <div>
      <Routes>
      <ProtectedRoute path="/" element={<AdminPannel />}>
          <Route path="/" element={<Navigate to="/unauthorized" />} />
       </ProtectedRoute>
     
  
      
        <Route path="/demo" element={<DemoAdmin />} />


        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
