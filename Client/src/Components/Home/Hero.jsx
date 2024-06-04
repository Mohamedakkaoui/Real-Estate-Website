import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative z-10 min-h-screen text-white "
      style={{
        backgroundImage: `url(https://themesflat.co/html/dreamhomehtml/assets/images/slider/bg-slider-5.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Full-screen semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="p-[3%] md:p-[6%] text-center">
          <h1 className="text-4xl font-bold capitalize lg:text-5xl mb-8">
            The Best Way To Find Your Dream Home
          </h1>
          <p className="mb-8 pl-3">
            Explore top-rated listings, find great deals, <br />
            and secure your dream home with us. Your journey to the perfect
            living space begins here.
          </p>
          <div className="mt-8 flex justify-center gap-x-3 ">
            <Link to={"/Property"} className=" opacity-100">
              <button className="bg-[#FFA920] rounded-md px-6  transition-all duration-300 py-3 text-lg">
                EXPLORE PROPERTIES
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
