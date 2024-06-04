import React, { useState } from "react";
import Home from "./Pages/Home";
import CheckEmail from "./Pages/CheckEmail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ResetPassword from "./Pages/ResetPassword";
import UpdatePassword from "./Pages/UpdatePssword";
import { AuthProvider } from "./Context/AuthContext";
import PropertyDetail from "./Pages/PropertyDetail";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import DashboardPage from "./Pages/UserDashboard/DashboardPage";
import './App.css'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/PropertyDetails/:propertyId" element={<PropertyDetail />} />
            <Route path="/users/auth/verify" element={<CheckEmail />} />
            <Route path="/Admin-Dashboard" element={<AdminDashboard />}></Route>
            <Route path="/User-Dashboard/*" element={<DashboardPage />}></Route>
            <Route
              path="/users/auth/reset-password-email"
              element={<ResetPassword />}
            ></Route>
            <Route
              path="/users/auth/password-reset"
              element={<UpdatePassword />}
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
