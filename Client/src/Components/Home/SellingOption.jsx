import React from "react";
import Image from "../../assets/Fes.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import Avatar from "../Common/Avatar";
import ApartImg from '../../assets/SellingOp.jpeg'
function SellingOption() {
  return (
    <div className="flex flex-row  bg-gray-100  overflow-hidden pb-6">
      <div className="w-[80%] mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {/* left side of the component */}
          <div className="flex flex-col p-4 w-2/3 mt-10">
            <p className="text-3xl font-semibold mb-7 text-black">
              Let’s Find The Right Selling Option For You
            </p>
            <p className="mb-7">
              As the complexity of buildings to increase, the field of
              architecture.
            </p>
            <div className="flex mb-5">
              <FaCheckCircle className="mt-1 size-6" />
              <p className="font-bold ml-4 mb-4">Find excellent deals</p>
            </div>
            <div className="flex mb-5">
              <FaCheckCircle className="mt-1 size-6" />
              <p className="font-bold ml-4 mb-4">
                Friendly host & Fast support
              </p>
            </div>
            <div className="flex mb-5">
              <FaCheckCircle className="mt-1 size-6" />
              <p className="font-bold ml-4 mb-4">List your own property</p>
            </div>
            <button className=" flex w-[180px] mt-6 rounded-xl border-1 pt-3 pb-4 px-7 border-black hover:bg-[#FFA920] hover:border-[#FFA920] hover:text-white transition-all duration-300">
              <div className="text-md font-bold pr-2">Learn More </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="currentColor"
                className="mt-1 ml-1"
              >
                <path
                  d="M15.5553 0.670898H5.77756C5.53189 0.670898 5.3331 0.86969 5.3331 1.11536C5.3331 1.36102 5.53189 1.55982 5.77756 1.55982H14.4824L0.129975 15.9122C-0.0436504 16.0859 -0.0436504 16.3671 0.129975 16.5407C0.216766 16.6275 0.330516 16.6709 0.444225 16.6709C0.557933 16.6709 0.671641 16.6275 0.758475 16.5407L15.1109 2.18827V10.8931C15.1109 11.1388 15.3097 11.3376 15.5553 11.3376C15.801 11.3376 15.9998 11.1388 15.9998 10.8931V1.11536C15.9998 0.86969 15.801 0.670898 15.5553 0.670898Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          {/* right the side of the component */}
          <div className="hidden md:flex relative">
            {" "}
            {/* Right column (visible on medium screens and larger) */}
            <div className="absolute top-0 right-0 z-10 w-2/4 rounded-lg overflow-hidden shadow-xl">
              <img
                src={Image}
                alt="Top right image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-2/5 h-2/3 rounded-lg overflow-hidden shadow-lg">
              <img
                src={ApartImg}
                alt="Bottom left image"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="absolute -bottom-4 left-1/4  transform z-20 shadow-lg rounded-lg bg-white py-4 px-6 text-black">
              <div className="pb-5 ">Meet our exclusive agents</div>
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellingOption;
