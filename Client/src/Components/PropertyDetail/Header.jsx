import React from "react";
import { Map, Heart, Share2 } from "lucide-react";

function Header() {
  return (
    <div className="w-full max-w-[900px] mx-auto overflow-hidden mb-4">
      <div className="p-4">
        <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className="text-2xl font-extrabold pb-6 border-b-1 text-gray-800 flex items-center">
              Villa Belo a large superior luxury villa
            </h1>
            <div className="flex mt-2">
              <Map className="size-5 mt-1" />
              <p className="pl-1">58 Hullbrook Road, Billesley, B13 0LA</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-orange-500 mr-2">
            <div className="flex ml-14 text-gray-500 gap-4 pb-4">
              <div className=" border rounded-lg px-2 pt-2 hover:cursor-pointer">
                <Heart className="size-5"/>
              </div>
              <div className="border rounded-lg p-2 hover:cursor-pointer">
                <Share2 />
              </div>
            </div>

            <div className="flex">
              <span className="text-3xl text-[#FFA920] font-bold">
                750,000 MAD
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
