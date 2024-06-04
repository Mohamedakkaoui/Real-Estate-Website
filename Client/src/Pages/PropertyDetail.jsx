import React, { useState, useEffect } from 'react';
import Header from "../Components/PropertyDetail/Header";
import ImagesSection from "../Components/PropertyDetail/ImagesSection";
import DetailComponents from "../Components/PropertyDetail/DetailComponents";
import Navbar from "../Components/Forum/NavBar";
import Footer from "../Components/Forum/Footer";
import Carousel from "../Components/Common/Carousel";
import { fetchSingleListing } from "../Api/ListingsApi";
import { useParams } from 'react-router-dom';



function PropertyDetail() {
  const { propertyId } = useParams();

  const [property, setProperty] = useState([null]);
  const [reviews, setReviews] = useState([])
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function getPropertyDetails() {
      try {
        const response = await fetchSingleListing(propertyId);
        const { property, reviews } = response.data
        setProperty(property);
        setImages(property.images);
        setReviews(reviews);
        console.log(property)
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    }
    getPropertyDetails();
  }, []);

  return (

    <>
      <Navbar />
      <div>
        <Header property={property} />
        <Carousel images={images} />
        <DetailComponents property={property} reviews={reviews} />
      </div>
      <Footer />
    </>
  );
}

export default PropertyDetail;
