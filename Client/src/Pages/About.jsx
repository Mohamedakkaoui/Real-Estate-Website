import { OverView, Stats,Brands, Reviews, WhatWeDo } from "../Components/about";
import Team from "../Components/about/Team";
import Footer from "../Components/Forum/Footer";
import NavBar from "../Components/Forum/NavBar";

const About = () => {
  return (
    <>
      <NavBar/>
      <Stats />
      <OverView />
      <Brands />
      <Team/>
      <WhatWeDo />
      <Reviews />
      <Footer/>
    </>
  );
};

export default About;
