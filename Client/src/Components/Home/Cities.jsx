import React, { useEffect, useState } from "react";
import FesImage from "../../assets/Fes.jpeg";
import RabatImage from "../../assets/Rabat.jpg";
import TangerImg from "../../assets/Tanger.jpeg";
import CasablancaImg from "../../assets/Casablanca.jpg";
import MarrakeshImg from "../../assets/Marakesh.jpeg";
import ErrachidiaImg from "../../assets/Erracidia.jpeg";
import { GetAllListings } from "../../Api/ListingsApi";
import Loading from "../Common/Loading";

const cities = [
  { CIty: "Casablanca", Image: CasablancaImg },
  { CIty: "Rabat", Image: RabatImage },
  { CIty: "Errachidia", Image: ErrachidiaImg },
  { CIty: "Fes", Image: FesImage },
  { CIty: "Tanger", Image: TangerImg },
  { CIty: "Marrakesh", Image: MarrakeshImg },
];

function Cities() {
  const [Listings, SetListings] = useState([]);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    const ListingsBycities = async () => {
      SetLoading(true);
      try {
        let listingswithcities = [];
        const res = await GetAllListings();
        const allListings = res.data.Listings;
        cities.forEach((option) => {
          const citiyandlistings = allListings.filter(
            (el) => el.city == option.CIty
          );
          listingswithcities.push({
            city: option,
            NumberOfProperties: citiyandlistings.length,
          });
        });
        SetListings(listingswithcities);
        SetLoading(false);
      } catch (error) {
        SetLoading(false);
      }
    };
    ListingsBycities();
  }, []);

  return (
    <div className="flex flex-col justify-center w-[70%] m-auto mb-10 mt-10">
      <div className="flex flex-col items-center mb-9">
        <div className="font-bold text-5xl text-black mb-4">Browse Cities</div>
        <div className="text-[#FFA920] font-semibold text-xl">
          discover Listings in cities with high demand
        </div>
      </div>
      {Loading ? (
        <div className="grid grid-flow-row justify-center">
          <div className="grid grid-cols-2 gap-4 mb-3">
            {Listings.slice(0, 2).map(({ city, NumberOfProperties }, index) => (
              <div
                key={index}
                className="aspect-ratio w-full h-[300px] overflow-hidden shadow-md rounded-lg relative"
              >
                <img
                  className="object-cover brightness-75 w-full h-full hover:brightness-50 hover:cursor-pointer transition-all duration-300"
                  src={city.Image}
                  alt={city.CIty}
                />
                <p className="text-white text-xl font-bold absolute bottom-8 left-2">
                  {city.CIty}
                </p>
                <p className="text-white text-sm font-semibold absolute bottom-2 left-2">
                  {NumberOfProperties} properties
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {Listings.slice(2).map(({ city, NumberOfProperties }, index) => (
              <div
                key={index}
                className="aspect-ratio w-1/4 h-[300px] overflow-hidden shadow-md rounded-lg relative"
              >
                <img
                  className="object-cover brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-300"
                  src={city.Image}
                  alt={city.CIty}
                />
                <p className="text-white text-xl font-bold absolute bottom-8 left-2">
                  {city.CIty}
                </p>
                <p className="text-white text-sm font-semibold absolute bottom-2 left-2">
                  {NumberOfProperties} properties
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mx-auto mt-20">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Cities;
