import React, { useState } from "react";
import { Heart, Share2 } from "lucide-react";
import { GrMap } from "react-icons/gr";
import axios from 'axios';


const SaveListingComponent = ({ id }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // await saveListing(id);
      setIsSaved(true);
    } catch (error) {
      console.error('Error saving listing:', error);
      // Handle error (e.g., show error message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`flex gap-2 border rounded-lg px-2 pt-2 ${isSaved ? 'text-red-600' : 'text-grey-600'} hover:cursor-pointer`}
      onClick={handleSave}
    >
      <span>{isSaved ? 'saved' : 'save'}</span>
      <Heart className="size-5" />
      {isLoading && <span>Loading...</span>}
    </div>
  );
};

function Header({ property }) {
  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-[900px] mx-auto overflow-hidden mb-4">
      <div className="p-4">
        <div className="flex justify-between items-center mt-5">
          <div>
            <div className="flex flex-col text-primary">
              <span>{property.category} / for {property.listingType}</span>
              <h1 className="text-2xl font-extrabold pb-2 border-b-1 text-gray-800 flex items-center">
                {property.title}
              </h1>
            </div>

            <div className="flex items-baseline mt-2">
              <GrMap color="#808080" size={13} className=" " />
              <p className="pl-1 pb-[2px]">{property.location}</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-orange-500 mr-2">
            <div className="flex ml-14 text-gray-500 gap-4 pb-4">

              <SaveListingComponent id={property.id} />

              <div className="border rounded-lg p-2 hover:cursor-pointer">
                <Share2 />
              </div>
            </div>

            <div className="flex w-full justify-end items-baseline">
              <span className="text-3xl text-[#FFA920] font-bold">
                {property.price}
              </span>
              <span className="taxt-l text-[#FFA920] ml-1">MAD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
