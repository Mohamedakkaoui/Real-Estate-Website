import { OverView, Stats,Brands, Reviews, WhatWeDo } from "../Components/about";
import Footer from "../Components/Forum/Footer";
import NavBar from "../Components/Forum/NavBar";

const About = () => {
  return (
    <>
      <NavBar/>
      <Stats />
      <OverView />
      <Brands />
      <WhatWeDo />
      <Reviews />
      <Footer/>
    </>
  );
};

export default About;
