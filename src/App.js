import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CustomerRoutes from './Routers/CustomerRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';


function App() {
  const isAdmin = localStorage.getItem("role") === "ADMIN";

  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route
  path="/admin/*"
  element={isAdmin ? <AdminPannel /> : <Navigate to="/" />}
/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

