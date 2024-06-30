import React from "react";
import { GrLocation } from "react-icons/gr";
import { IoMdResize } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

function FavsCard({ property }) {
  const defaultImage =
    "https://static.vecteezy.com/system/resources/previews/026/632/768/non_2x/image-icon-symbol-design-illustration-vector.jpg";

  return (
    <div className="w-1/3" style={{ margin: "auto", width: "31%" }}>
      <div className="flex mb-10">
        <div
          className="listing-card-one rounded-lg  w-full bg-white"
          style={{
            boxShadow:
              "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.1)",
            height: "500px",
          }}
        >
          <div className="relative" style={{ padding: "15px", height: "60%" }}>
            <div>
              <div
                className="absolute top-0 left-0 z-10 flex justify-between items-center w-full"
                style={{ padding: "30px" }}
              >
                <div className="border-2 border-white px-2 py-1 bg-black text-white text-xs uppercase">
                  {property.listingType}
                </div>
                <FaHeart className="text-red-500 size-6" />
              </div>
              <Link to={`/PropertyDetails/${property.Object_id}`}>
                <img
                  className="rounded-lg mx-auto w-full h-[300px] object-cover "
                  src={
                    property.images[0] ? property.images[0].url : defaultImage
                  }
                  alt={property.title}
                />
              </Link>
            </div>
          </div>
          <div
            className="property-info mt-3"
            style={{
              padding: "10px 20px",
              height: "40%",
              maxWidth: "450px",
              overflow: "hidden",
            }}
          >
            <Link
              className="text-black font-semibold"
              to={`/PropertyDetails/${property.Object_id}`}
              style={{ fontSize: "22px" }}
            >
              {property.title}
            </Link>
            <div
              className="flex address items-center text-100 text-gray-400 my-3"
              style={{ gap: "5px" }}
            >
              <GrLocation />
              <div>{property.location}</div>
            </div>
            <div
              className="flex justify-between pt-4"
              style={{ marginTop: "20px", borderTop: "1px dashed #c7c7c7" }}
            >
              <ul className="style-none feature d-flex flex-wrap items-center justify-content-between">
                <li className="flex items-center gap-2">
                  <IoMdResize />
                  <span className="fs-16">{property.size} M²</span>
                </li>
              </ul>
              <div className="pl-footer top-border d-flex items-center justify-content-between">
                <strong className="price fw-500 color-dark">
                  $
                  {`${
                    property.listingType !== "Buy"
                      ? `${property.price} /night`
                      : `${property.price}`
                  }`}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavsCard;
