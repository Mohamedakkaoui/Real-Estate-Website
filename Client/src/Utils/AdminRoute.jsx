import React from "react";
import { Navigate } from "react-router-dom";
import { ContextAuth } from "../Context/AuthContext";

const AdminRoute = ({ element: Element }) => {
  const { UserProfile } = ContextAuth();
  if (!UserProfile) {
    return <Navigate to="/Home" />;
  }

  if (UserProfile.role !== "admin") {
    return <Navigate to="/Home" />;
  }

  return <Element />;
};

export default AdminRoute;
