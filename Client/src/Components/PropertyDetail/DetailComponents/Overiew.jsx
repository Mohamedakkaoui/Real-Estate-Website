import React from "react";
import { Bath, Proportions, Users, DoorOpen } from "lucide-react";
function Overiew({ property }) {
  return (
    <div className="bg-white shadow-lg shadow-t-xl rounded-lg overflow-hidden border p-4">
      <div className="flex items-center border-b-2 pb-5 w-[95%] m-auto">
        <span className="text-black text-xl font-semibold"> Overview</span>
      </div>

      <div className="grid grid-cols-4 w-[95%] m-auto mt-4 bg-gray-100 rounded-lg py-3">
        <div className="flex my-3">
          <div className="border-black mx-5 my-auto rounded-lg border-2">
            <Bath className="m-2" />
          </div>

          <div className="grid  grid-cols-1">
            <div className="text-[#FFA920] text-sm font-semibold ">
              Bathrooms
            </div>
            <div className=" font-semibold ">{property.bathrooms}</div>
          </div>
        </div>
        <div className="flex my-3">
          <div className="border-black mx-5 my-auto rounded-lg border-2">
            <Proportions className="m-2" />
          </div>

          <div className="grid  grid-cols-1">
            <div className="text-[#FFA920] text-sm font-semibold ">Size</div>
            <div className=" font-semibold ">{property.size} m²</div>
          </div>
        </div>
        <div className="flex my-3">
          <div className="border-black mx-5 my-auto rounded-lg border-2">
            <Users className="m-2" />
          </div>

          <div className="grid  grid-cols-1">
            <div className="text-[#FFA920] text-sm font-semibold ">
              Accomodation
            </div>
            <div className=" font-semibold ">{property.accomodation}</div>
          </div>
        </div>
        <div className="flex my-3 ml-2">
          <div className="border-black mx-5 my-auto rounded-lg border-2">
            <DoorOpen className="m-2" />
          </div>

          <div className="grid  grid-cols-1">
            <div className="text-[#FFA920] text-sm font-semibold ">
              Rooms
            </div>
            <div className=" font-semibold ">{property.rooms}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overiew;
