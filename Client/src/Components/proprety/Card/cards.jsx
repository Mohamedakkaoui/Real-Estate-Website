import React from "react";
import { BiMap ,BiBed,BiTab  } from "react-icons/bi";
import CardHoverIcons from "./cardHoverIcon";
import CardLabels from "./cardLabel";
import { Link } from "react-router-dom";

const CardWithImageSlider = ({
  id,
  title,
  description,
  images,
  location,
  price,
  category,
  objectID,
  listingType,
  city, rooms, bathrooms
}) => {
  const imageUrl =
    images && images.length > 0
      ? images[0].url
      : "https://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpghttps://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg";
  return (
    <div className="w-full shadow-md">
      <div className="flex-1 basis-[18rem] shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group">
        <div className="group !opacity-100 overflow-hidden relative">
        <Link  to={`/PropertyDetails/${objectID}`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
          />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-[#dcdde1] flex-align-center gap-x-2">
            <BiMap />
            <p className="text-[#dcdde1]">{location}</p>
          </div>
        </div>
        <CardLabels purpose={listingType} />
      </div>
      <div className="p-3">
        <h1 className="text-lg font-bold capitalize text-[#252836]">{title}</h1>
        <h2 className="text-lg font-bold capitalize text-[#252836]">
          {category}
        </h2>
        <div className="mt-4 flex-center-between">
          {/* <p className=' font-semibold text-primary text-[#252836]'>{description}</p> */}
          <h1 className="text-lg font-semibold text-primary">MAD {price}</h1>
            <p className="text-white">{city}</p>
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className="text-sm">{rooms} Rooms</p>
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className="text-sm">{bathrooms} Bathrooms</p>
          <Link  to={`/PropertyDetails/${objectID}`}>
            <button className="bg-[#252836] text-white font-bold w-24 h-8 rounded-lg hover:bg-gray-100 hover:text-[#252836]">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardWithImageSlider;
