import React from 'react'
import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";
import AboutUsImg1 from '../../assets/property26.jpg'
import AboutUsImg2 from '../../assets/property16.jpg'


function AboutUs() {
  return (
    <div className="pt-16 pb-20 w-[90%]  mx-auto mb-10">
      <div className="flex flex-wrap gap-24">
        <div className="relative flex-1 basis-[18rem] border">
          <img
            src={AboutUsImg2}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src={AboutUsImg1}
            alt=""
            className="absolute object-cover w-48 h-64  rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>
        <div className="relative flex-1 basis-[22rem]">
          <h2 className="sub-heading">about us</h2>
          <h2 className="heading">Discover Your Ideal Home</h2>
          <p className="mt-3">
          At RYMZ, we are dedicated to helping you find not just a house, but a place you can call home. 
          Our team goes beyond the listings to understand your dreams and aspirations, ensuring every recommendation leads you to a space where memories will be cherished.
          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiHomeAlt />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                 Crafting Homes, Not Just Houses
                </h1>
                <p>
                Find your perfect place with personalized service that understands your need for a home that's as unique as you are.
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiGlobe />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                the perfect residency 
                </h1>
                <p>
                We match you with residences that fit your lifestyle, ensuring every property we suggest feels like a natural extension of your life.
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiCreditCard />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                Clear Cut Financials
                </h1>
                <p>
                With us, what you see is what you get — transparent pricing and straightforward advice that puts your financial welfare first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs