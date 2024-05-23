import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookAndSale() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfDates, setNumberOfDates] = useState(1);

  const calculateNumberOfDates = () => {
    const diffInMs = Math.abs(endDate - startDate);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    setNumberOfDates(diffInDays);
  };

  useEffect(() => {
    calculateNumberOfDates();
  }, [startDate, endDate]);

  return (
    <div className="card max-w-md rounded overflow-hidden shadow-lg p-5 bg-white  top-20 ml-4 shadow-r-xl mb-10">
      <div className="w-[95%] m-auto">
        {/* first section  */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-2xl font-semibold">The Bill</p>
          </div>
          <div className="flex">
            <p className="text-xl font-semibold pr-1">MAD 661</p>
            <p>/night</p>
          </div>
        </div>
        {/* second section  */}
        <div className="flex gap-2 justify-center justify-items-center">
          <div>
            <label htmlFor="Check In" className="">Check IN</label>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="input mt-1 w-full rounded-lg text-center"
                placeholderText="Check In Date"
              />
            </div>
          </div>
          <div>
            <label htmlFor="CHeck Out">Check Out</label>
            <div>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="input mt-1 w-full rounded-lg text-center"
                placeholderText="Check Out Date"
              />
            </div>
          </div>
        </div>
        {/* third section  */}

        <button className="bg-[#ffa9202a] py-2 px-6 rounded-lg mt-5 w-full text-[#FFA920] font-semibold text-lg mb-6">
          Reserve
        </button>

        {/* fourth section  */}
        <div className="grid grid-cols-2 items-center mb-5">
          <p className="font-semibold">MAD 850 X {numberOfDates}</p>
          <p className="grid-column-end-2 text-end font-semibold">MAD 5,200</p>
        </div>
        <div className="grid grid-cols-2 items-center pb-5 border-b-2">
          <p className="font-semibold">Discount</p>
          <p className="grid-column-end-2 text-end text-green-400 font-semibold">
            -MAD 125
          </p>
        </div>
        <div className="grid grid-cols-2 items-center mb-5 mt-5">
          <p className="font-semibold text-lg">Total before Taxes</p>
          <p className="grid-column-end-2 text-end font-semibold">MAD 5,200</p>
        </div>
      </div>
    </div>
  );
}

export default BookAndSale;
