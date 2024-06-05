import React from 'react';
import { brands } from "../../Data/DummyData";

const Brands = () => {
  return (
    <div className="pt-6 pb-10">
      <div className="text-center max-w-[400px] mx-auto">
        <h1 className="mx-auto sub-heading">brands</h1>
        <h1 className="heading">our brands</h1>
        <p>
          We proudly represent a diverse portfolio of brands, each dedicated to delivering exceptional quality and value. Our commitment to excellence is reflected in the brands we partner with, ensuring that our customers always receive the best.
        </p>
      </div>
      <div className="flex-wrap p-4 mt-8 flex-center-center gap-x-16 gap-y-5">
        {brands.map((image, i) => (
          <div className="group" key={i}>
            <img
              src={image}
              alt=""
              className="w-20 group-hover:scale-125 transition-a"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
