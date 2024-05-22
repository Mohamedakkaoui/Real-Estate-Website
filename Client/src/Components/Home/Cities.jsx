import React from "react";
import FesImage from "../../assets/Fes.jpeg";
import RabatImage from "../../assets/Rabat.jpg";
import TangerImg from "../../assets/Tanger.jpeg";
import CasablancaImg from "../../assets/Casablanca.jpg";
import MarrakeshImg from "../../assets/Marakesh.jpeg";
import ErrachidiaImg from "../../assets/Erracidia.jpeg";

function Cities() {
  return (
    <div className="flex flex-col justify-center w-[70%] m-auto mb-10 mt-10">
      <div className="flex flex-col items-center mb-9">
        <div className="font-bold text-5xl text-black mb-4">Browse Cities</div>
        <div className="text-[#FFA920] font-semibold text-xl">
          discover Listings in cities with high demand
        </div>
      </div>

      <div className="grid grid-flow-row justify-center">
        <div className="grid grid-cols-2 gap-4 mb-3">
          
          <div className="aspect-ratio w-full h-[300px] overflow-hidden shadow-md rounded-lg relative">  
            <img
              className="object-cover brightness-75 w-full h-full hover:brightness-50 hover:cursor-pointer transition-all duration-300"
              src={CasablancaImg}
              alt="Casablanca"
            />
            <p className="text-white text-xl font-bold absolute bottom-8 left-2">
              Casablanca
            </p>
            <p className="text-white text-sm font-semibold absolute bottom-2 left-2">
              98 Listings
            </p>
          </div>

          <div className="aspect-ratio w-full h-[300px] overflow-hidden shadow-md rounded-lg relative"> 
            <img
              className="object-cover brightness-75 w-full h-full hover:brightness-50 hover:cursor-pointer transition-all duration-300"
              src={RabatImage}
              alt="Rabat"
            />
            <p className="text-white text-xl font-bold absolute bottom-8 left-2">
              Rabat
            </p>
            <p className="text-white text-sm font-semibold absolute bottom-2 left-2">
              82 properties
            </p>
          </div>
        </div>

        
        <div className="flex gap-3">


          <div className="aspect-ratio w-1/4 h-[300px] overflow-hidden shadow-md rounded-lg relative"> 


            <img
              className="object-cover brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-300"
              src={ErrachidiaImg}
              alt="Errachidia"
            />
            <p className="text-white text-xl font-bold absolute bottom-8 left-2">
              Errachidia
            </p>
            <p className="text-white text-sm font-semibold absolute bottom-2 left-2">
              34 properties
            </p>
          </div>


          <div className="aspect-ratio w-1/4 h-[300px] overflow-hidden shadow-md rounded-lg relative">
            <img
              className="object-cover brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-300"
              src={FesImage}
              alt="Fes"
            />
            <p className="text-white text-xl font-bold absolute bottom-8 left-2">
              Fes
            </p>
            <p className="text-white text-sm font-semibold absolute bottom-2 left-2">
              57 properties
            </p>
          </div>


          <div className="aspect-ratio w-1/4 h-[300px] overflow-hidden shadow-md rounded-lg relative">
            <img
              className="object-cover brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-300"
              src={TangerImg}
              alt="Tanger"
            />
            <p className="text-white text-xl font-bold absolute bottom-8 left-2">
              Tanger
            </p>
            <p className="text-white text-sm font-semibold absolute bottom-2 left-2">
              66 properties
            </p>
          </div>


          <div className="aspect-ratio w-1/4 h-[300px] overflow-hidden shadow-md rounded-lg relative">
            <img
              className="object-cover brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-300"
              src={MarrakeshImg}
              alt="Marrakesh"
            />
            <p className="text-white text-xl font-bold absolute bottom-8 left-2">
              Marrakesh
            </p>
            <p className="text-white text-sm font-semibold absolute bottom-2 left-2">
              37 properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cities;
