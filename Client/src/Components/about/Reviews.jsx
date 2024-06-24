import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SingleReviewCard from "./SingleReviewCard";
import { GetWebsiteReviews } from "../../Api/ReviewsApi";

const Reviews = () => {
  const [reviews, SetReviews] = useState([]);

  useEffect(() => {
    const GetReviews = async () => {
      const res = await GetWebsiteReviews()
      if (res.status == 200) {
        SetReviews(res.data.Reviews)
      }
      console.log(res.data.Message)
    }
    GetReviews()
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full my-4 py-2 md:py-4 lg:py-6">
      <div className="container mx-auto px-4 md:px-6 mb-2 text-center flex flex-col items-center">
        <h1 className="sub-heading text-3xl font-bold mb-2">Reviews</h1>
        <h1 className="heading text-2xl">What People Say About Us</h1>
      </div>
      <Slider {...settings} className="py-12">
        {reviews.map((review) => (
          <div key={review._id} className="px-2">
            <SingleReviewCard review = {review} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;
