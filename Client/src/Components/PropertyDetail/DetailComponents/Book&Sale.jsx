import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AddnewBooking } from '../../../Api/BookingApi';

function BookAndSale({ Price, ID }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfDates, setNumberOfDates] = useState(1);
  const [totalPrice, setTotalPrice] = useState(Price);


  const calculateNumberOfDates = () => {
    const diffInMs = Math.abs(endDate - startDate);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    setNumberOfDates(diffInDays);
  };

  const calculateTotalPrice = () => {
    setTotalPrice(Price * numberOfDates);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`; 
  };

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await AddnewBooking({
        ID,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        totalPrice,
      });
      console.log(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    calculateNumberOfDates();
  }, [startDate, endDate]);

  useEffect(() => {
    calculateTotalPrice();
  }, [numberOfDates]);

  return (
    <div className="card max-w-md rounded overflow-hidden shadow-lg p-5 bg-white top-20 ml-4 shadow-r-xl mb-10">
      <div className="w-[95%] m-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-2xl font-semibold">The Bill</p>
          </div>
          <div className="flex">
            <p className="text-xl font-semibold pr-1">{Price} MAD</p>
            <p>/night</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          <div>
            <label htmlFor="Check In" className="">Check In</label>
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
            <label htmlFor="Check Out">Check Out</label>
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
        <button onClick={handleBooking} className="bg-[#ffa9202a] py-2 px-6 rounded-lg mt-5 w-full text-[#FFA920] font-semibold text-lg mb-6">
          Reserve
        </button>
        <div className="grid grid-cols-2 items-center mb-5">
          <p className="font-semibold">MAD {Price} X {numberOfDates}</p>
          <p className="text-end font-semibold">{totalPrice} MAD </p>
        </div>
        <div className="grid grid-cols-2 items-center pb-5 border-b-2">
          <p className="font-semibold">RYMZ Discount</p>
          <p className="text-end text-green-400 font-semibold">
            -MAD 125
          </p>
        </div>
        <div className="grid grid-cols-2 items-center mb-5 mt-5">
          <p className="font-semibold text-lg">Total Price</p>
          <p className="text-end font-semibold text-2xl text-[#FFA920]">{totalPrice - 125} MAD</p>
        </div>
      </div>
    </div>
  );
}

export default BookAndSale;
