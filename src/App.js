import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';
import ProtectedRoute from './Routers/ProtectedRoute';

function App() {
  const isAdmin = localStorage.getItem("role") === "ADMIN";

  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        
        {/* Protected route for admin panel */}
        {isAdmin ? (
          <Route path="/admin" element={<AdminPannel />} />
        ) : (
          <Route path="/admin" element={<Navigate to="/" />} />
        )}

       
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

