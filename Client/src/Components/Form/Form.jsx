import React from "react";
import { PersonalInfos, ProfilePic, AddBio } from "./FormComps";
import "./Form.css";

function Form() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-[50%] px-4 mr-3">
        <PersonalInfos />
        <button className="middle none center w-full rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Delete Account
        </button>
      </div>
      <div className="flex flex-col">
        <ProfilePic />
        <AddBio />
      </div>
    </div>
  );
}

export default Form;
