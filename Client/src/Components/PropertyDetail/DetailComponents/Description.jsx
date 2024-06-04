import React from "react";

function Description({ description }) {
  return (
    <div className="bg-white shadow-lg shadow-t-xl rounded-lg overflow-hidden border p-4 mt-10">
      <div className="flex items-center border-b-2 pb-5 w-[95%] m-auto">
        <span className="text-black text-xl font-semibold">
          {" "}
          Property description
        </span>
      </div>
      <div className="w-[95%] m-auto mt-3 mb-4">
        {description}
      </div>
    </div>
  );
}

export default Description;
