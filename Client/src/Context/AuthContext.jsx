import React, { createContext, useContext, useEffect, useState } from "react";
import { isAuth } from "../Utils/IsAuth";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [UserProfile, SetUserProfile] = useState(null);

  useEffect(() => {
    const JWTstate = isAuth();
    console.log(isAuth());
    setIsLoggedIn(JWTstate);
    const token = Cookies.get("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        SetUserProfile(decoded || null);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, UserProfile, SetUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
1;
export function ContextAuth() {
  return useContext(AuthContext);
}
