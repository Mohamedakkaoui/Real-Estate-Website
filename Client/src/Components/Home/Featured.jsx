import React from 'react'
import SingleProductCard from "../Common/Card/SingleCard";
import ListingsNeraby from '../../Hooks/ListingsNeraby';
import { GetAllListings } from '../../Api/ListingsApi';
import Loading from '../Common/Loading';


function Featured() {

  const { city, listings, loading, error} = ListingsNeraby()
  if (!listings.length > 0) {
    const getalllsitings = async () => {
      const res  = await GetAllListings()
      const listings = res.data.listings
    }
  }
  
  //another condiiton if the arrya legth is 0
  
  return (

    <div className="pt-10 pb-16 w-[90%]  mx-auto mt-10">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">featured</h1>
        <h1 className="heading">explore featured nearby properties</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {!loading ? listings.slice(0, 3).map((featured) => (
          <SingleProductCard key={featured._id} {...featured} />
        )) : <div className="flex items-center justify-center h-screen"><Loading  /></div>}
      </div>
    </div>
  );
};

export default Featured