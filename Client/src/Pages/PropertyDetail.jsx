import React from "react";
import Header from "../Components/PropertyDetail/Header";
import ImagesSection from "../Components/PropertyDetail/ImagesSection";
import DetailComponents from "../Components/PropertyDetail/DetailComponents";
import Navbar from "../Components/Forum/NavBar";
import Footer from "../Components/Forum/Footer";
function PropertyDetail() {
  return (
    <>
      <Navbar />
      <div>
        <Header />
        <ImagesSection />
        <DetailComponents />
      </div>
      <Footer />
    </>
  );
}

export default PropertyDetail;
