import React from 'react'
import MapLocation from '../../MapComp/PropertyLocation'

function DetailMap({ coords }) {
  return (
    <div className="bg-white shadow-lg shadow-t-xl rounded-lg overflow-hidden border p-4 mt-10 mb-10">
      <div className="flex items-center border-b-2 pb-5 w-[95%] m-auto">
        <span className="text-black text-xl font-semibold">Map Location</span>
      </div>
      <div>
        {coords && <MapLocation coords={coords} />}
      </div>
    </div>
  )
}

export default DetailMap