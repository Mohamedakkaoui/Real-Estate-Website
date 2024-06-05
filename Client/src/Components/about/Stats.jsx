import React from "react";
import AboutImg from "../../assets/AboutImg.jpg";

const Stats = () => {
  return (
    <div className="relative h-[390px] flex items-center text-left">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75"
        style={{ backgroundImage: `url(${AboutImg})` }}
      ></div>
      <div className="relative z-10 max-w-2xl ml-10 px-6 py-12 bg-opacity-0 text-left ">
        <h1 className="text-4xl font-bold text-white leading-tight mb-2">
          <span className="bg-clip-text text-white">About Us</span>
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-white">
          Welcome to our website, a premier destination for all your real estate
          needs.
        </p>
      </div>
    </div>
  );
};

export default Stats;
