import React from "react";
import Footer from "../Components/Forum/Footer";
import NavBar from "../Components/Forum/NavBar";
import Hero from "../Components/Home/Hero";
import AboutUs from "../Components/Home/AboutUs";
import Featured from "../Components/Home/Featured";
import Categories from "../Components/Home/Categories";
import Cities from "../Components/Home/Cities";
import SellingOption from "../Components/Home/SellingOption";
import ScrollToTopButton from "../Components/Common/ScrollToTopButton";
import NavBar2 from "../Components/Forum/Navbar2";
function Home() {

  return (
    <>
      {/* <NavBar/> */}
      <NavBar2 />
      <Hero />
      <AboutUs />
      <Featured />
      <Categories />
      <Cities />
      <ScrollToTopButton />
      <SellingOption />
      <Footer />
    </>
  );
}

export default Home;