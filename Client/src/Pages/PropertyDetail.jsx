import React from "react";
import Header from "../Components/PropertyDetail/Header";
import DetailComponents from "../Components/PropertyDetail/DetailComponents";
import Navbar from "../Components/Forum/NavBar";
import Footer from "../Components/Forum/Footer";
import Carousel from "../Components/Common/Carousel";

function PropertyDetail() {
  return (
    <>
      <Navbar />
      <div>
        <Header />
        <Carousel />
        <DetailComponents />
      </div>
      <Footer />
    </>
  );
}

export default PropertyDetail;
