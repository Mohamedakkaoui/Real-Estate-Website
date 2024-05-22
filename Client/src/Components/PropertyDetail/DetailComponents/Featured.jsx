import React from "react";

function Featured() {
  return (
    <div className="bg-white shadow-lg shadow-t-xl rounded-lg overflow-hidden border p-4 mt-10">
      <div className="flex items-center border-b-2 pb-5 w-[95%] m-auto">
        <span className="text-black text-xl font-semibold"> Featured</span>
      </div>
      <div className="grid grid-rows-3 w-[95%] m-auto mt-3 mb-4">
        <div className="grid grid-cols-3 my-3">
          <div>
            <input
              type="checkbox"
              className="mr-3 rounded-sm "
              
              style={{borderColor: "orange", backgroundColor: "orange"}}
            />
            <label htmlFor="rooms">Self check-in</label>
          </div>
          <div>
            <input type="checkbox" className="mr-3 rounded-sm" disabled />
            <label htmlFor="rooms">laundry facilities</label>
          </div>
          <div>
            <input type="checkbox" className="mr-3 rounded-sm " disabled />
            <label htmlFor="rooms" className="text-center">
              Entertainment provisions
            </label>
          </div>
        </div>

        <div className="grid grid-cols-3  my-3">
          <div>
            <input type="checkbox" className="mr-3 rounded-sm" disabled />
            <label htmlFor="rooms">Equipped kitchen</label>
          </div>
          <div>
            <input type="checkbox" className="mr-3 rounded-sm" disabled />
            <label htmlFor="rooms">Parking availability</label>
          </div>
          <div>
            <input type="checkbox" className="mr-3 rounded-sm" disabled />
            <label htmlFor="rooms">Heatin and cooling</label>
          </div>
        </div>

        <div className="grid grid-cols-3  my-3">
          <div>
            <input type="checkbox" className="mr-3 rounded-sm" disabled />
            <label htmlFor="rooms">Bathroom amenities</label>
          </div>
          <div>
            <input type="checkbox" className="mr-3 rounded-sm" disabled />
            <label htmlFor="rooms">Internet access (WIFI)</label>
          </div>
          <div>
            <input type="checkbox" className="mr-3 rounded-sm" disabled />
            <label htmlFor="rooms">Safety equipment</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
