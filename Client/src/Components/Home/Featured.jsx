import React from 'react'
import SingleProductCard from "../Common/Card/SingleCard";
import ListingsNeraby from '../../Hooks/ListingsNeraby';
import { GetAllListings } from '../../Api/ListingsApi';
import Loading from '../Common/Loading';


function Featured() {

  const { city, listings, loading, error} = ListingsNeraby()
  //another condiiton if the arrya legth is 0
  
  return (

    <div className="pt-10 pb-16 w-[90%]  mx-auto mt-10">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">Nearby</h1>
        <h1 className="heading">explore {city} properties</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {!loading ? listings.reverse().slice(0, 3).map((featured) => (
          <SingleProductCard key={featured._id} {...featured} />
        )) : <div className="flex items-center justify-center mx-auto"><Loading  /></div>}
      </div>
    </div>
  );
};

export default Featured