import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardHoverIcons from "./CardIcon";
import CardLabels from "./CardLabel";

const SingleProductCard = ({
  _id,
  Object_id,
  title,
  location,
  price,
  size,
  images,
  basis,
  listingType,
  city, rooms, bathrooms
}) => {
  const propImg = images[0] ? images[0].url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGa8oiX-GzOZHRZCgosUZY5aVxeCbhVTEzQ&s'
  return (
    <div
      className={`flex-1 ${basis ? basis : "basis-[18rem]"
        } shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        <Link to={`/property-details/${Object_id}`} className="!opacity-100">
          <img
            src={propImg}
            alt={title}
            className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
          />
        </Link>
        {/* <CardHoverIcons /> */}
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p className="text-white">{city}</p>
          </div>
        </div>
      </div>
      <CardLabels purpose={listingType} />
      <div className="p-3">
        <Link to={`/PropertyDetails/${Object_id}`} className="group-hover:text-primary transition-a">
          <h1 className="text-lg font-bold capitalize">{title}</h1>
        </Link>
        <div className="flex justify-between mt-3">
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className="text-sm">{rooms} Rooms</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className="text-sm">{bathrooms} Bathrooms</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiMapAlt />
            </div>
            <p className="text-sm">{size} m2</p>
          </div>
        </div>

        <div className="mt-4 flex-center-between">
          <h1 className="text-lg font-semibold text-primary">MAD{price}</h1>
          <Link to={`/PropertyDetails/${Object_id}`}>
            <button className="bg-[#02293e] opacity-80 rounded-lg text-white py-2 px-6">DETAILS</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SingleProductCard;
