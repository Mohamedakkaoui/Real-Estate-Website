import React from "react";
import YassineImg from "../../../assets/yassine.png";
import { UserCheck, Phone, Mail, Send } from "lucide-react";
import BackUser from '../../../assets/UsrBack.png'
function UserInfo() {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg  bg-white top-20 ml-4 shadow-r-xl mb-10 sticky pb-4 shadow-t-xl shadow-l-xl">
      <div className="h-full relative">
        <div className="h-[125px] bg-[#ffa9202a]">
          <img src={BackUser} alt="" className="w-full h-full object-cover" />
        </div>
        {/* the text area  */}
        <div className="w-[85%] m-auto pt-9">
          <div className="flex mb-5 mt-5 items-center">
            <Phone className="text-[#FFA920] size-6 mr-3 mt-1" />
            <p className="font-semibold text-xl text-gray-400">Phone :</p>
            <p className="font-semibold ml-auto">+(212)6181516193</p>
          </div>

          {/* import te icon for the mail */}
          <div className="flex items-center mb-5 mt-7 border-b-2 pb-7">
            <Mail className="text-[#FFA920] size-6 mr-3 mt-1"/>
            <p className="font-semibold text-lg text-gray-400">Mail :</p>
            <p className=" ml-auto font-semibold">
              akkaouimohamed00@gmail.com
            </p>
          </div>

          <div className="flex items-center mb-5 mt-5 ">
            <div>
              {" "}
              <button className="bg-[#ffa9202a] text-[#FFA920] font-semibold text-md py-3 px-7 rounded-lg hover:cursor-pointer">
                View profile
              </button>
            </div>
            <Send className="ml-auto mr-2 size-8 text-gray-400"/>
          </div>
        </div>
        <div className="w-[80%] ml-[45px] absolute bottom-[200px] transform z-20 shadow-lg rounded-lg  bg-white text-black">
          <div className="flex">
            <div className=" m-3">
              <img src={YassineImg} alt="" className="size-[90px] rounded-lg" />
            </div>
            <div className=" m-2 mt-6">
              <div className="text-[#FFA920] font-semibold text-xl">
                Yassine Alissaoui
              </div>
              <div>
                <span className="text-[#FFA920]">22 </span>
                <span className="text-gray-400 ">Property Listings</span>
              </div>
            </div>
            <div className="text-gray-400 items-center	ml-6 mt-9 ">
              <UserCheck className="size-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
