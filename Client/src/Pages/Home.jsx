import React, { useEffect, useState } from "react";
import Footer from "../Components/Forum/Footer";
import NavBar from "../Components/Forum/NavBar";
import { ContextAuth } from "../Context/AuthContext";

function Home() {

  
  const { isLoading, UserProfile } = ContextAuth();


  return (
    <>
      <NavBar />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {UserProfile && UserProfile.Email ? (
            <div>Welcome, {UserProfile.Email}!</div>
          ) : (
            <div>You are not logged in.</div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Home;