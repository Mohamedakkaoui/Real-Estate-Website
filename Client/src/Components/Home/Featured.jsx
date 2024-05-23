import React from 'react'
import SingleProductCard from "../Common/Card/SingleCard";
import { property }  from "../../Data/DummyData"


function Featured() {
  return (

    <div className="pt-10 pb-16 w-[90%]  mx-auto mt-10">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">featured</h1>
        <h1 className="heading">explore featured latest properties</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {property.slice(0, 3).map((featured) => (
          <SingleProductCard key={featured.id} {...featured} />
        ))}
      </div>
    </div>
  );
};

export default Featured