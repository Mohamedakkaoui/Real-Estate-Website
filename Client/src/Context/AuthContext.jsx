import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { getUserById } from "../Api/Authapi";

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  UserProfile: null,
  SetUserProfile: () => {},
  handleLogin: () => {},
  isLoading: false,
  setIsLoading: (isLoading) => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [UserProfile, SetUserProfile] = useState(localStorage.getItem("UserProfile") || null);
  const [isLoading, setIsLoading] = useState(true);

  const token = Cookies.get("token");

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true)
      try {
        if (token) {
          setIsLoggedIn(true)
          const decoded = jwtDecode(token);
          const id = decoded.id;
          const res = await getUserById(id);
          if (res.status === 200) {
            const user = res.data.User;
            SetUserProfile(user);
            localStorage.setItem("UserProfile", JSON.stringify(user));
            setIsLoading(false);
          } else {
            setIsLoggedIn(false);
            SetUserProfile(null);
            localStorage.removeItem("UserProfile");
          }
        } else {
          setIsLoggedIn(false);
          SetUserProfile(null);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [token]);

  useEffect(() => {
    const retrieveUserProfileFromStorage = () => {
      if (!UserProfile && token) {
        const storedUserProfile = localStorage.getItem("UserProfile");
        if (storedUserProfile) {
          try {
            const parsedUserProfile = JSON.parse(storedUserProfile);
            SetUserProfile(parsedUserProfile);
          } catch (error) {
            console.error("Error parsing stored user profile:", error);
            localStorage.removeItem("UserProfile");
          }
        }
      }
    };
    retrieveUserProfileFromStorage();
  }, []);

  const handleLogin = async (Response) => {
    console.log("test");
    const token = Response.data.token;
    const user = Response.data.User;
    console.log(user);
    Cookies.set("token", token, { expires: 10 / 24 });
    setIsLoggedIn(true);
    SetUserProfile(user);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    SetUserProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        UserProfile,
        SetUserProfile,
        handleLogout,
        handleLogin,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
1;
export function ContextAuth() {
  return useContext(AuthContext);
}