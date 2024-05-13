import React, { useState } from "react";
import Home from "./Pages/Home";
import CheckEmail from "./Pages/CheckEmail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ResetPassword from "./Pages/ResetPassword";
import UpdatePassword from "./Pages/UpdatePssword";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/users/auth/verify" element={<CheckEmail />} />
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
    </>
  );
}

export default App;
