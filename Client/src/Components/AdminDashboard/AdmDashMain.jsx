import React, { useEffect, useState } from "react";
import AdminCards from "./AdminCards";
import RatingDashCard from "./RatingCard";
import Table2 from "../Common/Table2/table";
import StatsDash from "./StatsDash";

function AdmDashMain({ users, bookings, listings, reviews }) {
  const [ReviewsState, SetReviews] = useState([]);
  const [UsersState, SetUsers] = useState([]);
  const [BookingsState, SetBookings] = useState([]);
  const [ListingsState, SetListings] = useState([]);
  useEffect(() => {
    SetReviews(reviews);
    SetUsers(users);
    SetBookings(bookings);
    SetListings(listings);
  }, [users, bookings, listings, reviews]);
  return (
    <>
      <div className="w-full mx-auto mt-3">
        <AdminCards
          Users={UsersState}
          Reviews={ReviewsState}
          Bookings={BookingsState}
          Listings={ListingsState}
        />
      </div>
      <div className="flex w-full mx-auto m-auto gap-6 mt-9">
        <div className=" w-[65%]">
          <StatsDash />
        </div>
        <div className="w-[35%]">
          <RatingDashCard Reviews={ReviewsState} />
        </div>
      </div>
      <div className="card w-full mx-auto mt-6 rounded overflow-hidden shadow-lg mb-8 bg-white top-20 shadow-r-xl">
        <Table2 Listings={ListingsState} />
      </div>
    </>
  );
}

export default AdmDashMain;
