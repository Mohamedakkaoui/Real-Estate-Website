import React from "react";
import Footer from "../Components/Forum/Footer";
import NavBar from "../Components/Forum/NavBar";
import { ContextAuth } from "../Context/AuthContext";
import Hero from "../Components/Home/Hero";
import AboutUs from "../Components/Home/AboutUs";
import Featured from "../Components/Home/Featured";
import Categories from "../Components/Home/Categories";
import Cities from "../Components/Home/Cities";
import SellingOption from "../Components/Home/SellingOption";
import ScrollToTopButton from "../Components/Common/ScrollToTopButton";
function Home() {
  const { isLoading, UserProfile } = ContextAuth();

  return (
    <>
      <NavBar/>
      <Hero/>
      <AboutUs/>
      <Featured/>
      <Categories/>
      <Cities/>
      <ScrollToTopButton/>
      <SellingOption/>
      <Footer/>
    </>
  );
}

export default Home;