import { OverView, Stats,Brands, Reviews, WhatWeDo,PostReview } from "../Components/about";
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
      <PostReview/>
      <Reviews />
      <Footer/>
    </>
  );
};

export default About;
