import React, { useEffect, useState } from "react";
import { ListingsTable } from "./AdmDashListings";
import { MembersTable } from "./AdmDashUsers";
import { BookingsTable } from "./AdmDashBookings";
import { ReviewsTable } from "./AdmDashReviews";
import AdmDashMain from "./AdmDashMain";
import { ContextAuth } from "../../Context/AuthContext";
import { getAllBookings, getAllUsers } from "../../Api/Authapi";
import { GetAllListings } from "../../Api/ListingsApi";
import { getAllSiteReviews } from "../../Api/AdminReviewsApi";
import {
  LogOut,
  Shapes,
  UsersRound,
  Building2,
  CalendarCheck2,
  MessageSquareCode,
  SquareUser, SquarePlus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import IconDropDown from "../Common/DropDown/IconDropDown";
import FormatDate from "../../Utils/FormatDate";
import AdminForm from "./Form/AdminForm";
import LogoImg from "../../assets/logo2.png";
import AddListing from "../ListingBoxes/AddNewListing";
function AdminHeader() {
  const [activeTab, setActiveTab] = useState("main");
  const [mainContent, setMainContent] = useState("main");
  const [TotalUsers, SetTotalUsers] = useState([]);
  const [TotalListings, SetTotalListings] = useState([]);
  const [TotalReviews, SetTotalReviews] = useState([]);
  const [TotalBookings, SetTotalBookings] = useState([]);
  const { UserProfile, handleLogout } = ContextAuth();
  const [currentDate, setCurrentDate] = useState(FormatDate(new Date()));

  const Navigate = useNavigate();

  useEffect(() => {
    const totalListings = async () => {
      try {
        const Usersresponse = await getAllUsers();
        SetTotalUsers(Usersresponse.data);
        const Listingsresponse = await GetAllListings();
        SetTotalListings(Listingsresponse.data.Listings);
        const Bookingsresponse = await getAllBookings();
        SetTotalBookings(Bookingsresponse.data);
        const Reviewsresponse = await getAllSiteReviews();
        SetTotalReviews(Reviewsresponse.data.Reviews);
      } catch (error) {
        console.log(error, error.message);
      }
    };
    totalListings();
  }, []);

  const handleTabClick = (content) => {
    setActiveTab(content);
    setMainContent(content);
  };

  const handlelogout = (e) => {
    e.preventDefault();
    handleLogout();
    Navigate("/Home");
  };

  return (
    <div className="h-screen">
      <div className="fixed top-0 left-0 shadow h-full w-[13%] bg-[#504945] text-white p-4 flex flex-col justify-between">
        <div>
          <div className="mb-4">
            <img
              src={LogoImg}
              alt="Logo"
              className="h-9 w-[90%] mx-auto mb-12"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleTabClick("main")}
              className={`p-2 flex gap-2 text-left mb-2 ${activeTab === "main"
                ? "font-semibold text-white bg-[#FFA920] rounded-md"
                : ""
                }`}
            >
              <Shapes /> Main
            </button>
            <button
              onClick={() => handleTabClick("newListing")}
              className={`p-2 flex gap-2 text-left ${activeTab === "newListing"
                ? "font-semibold text-white bg-[#FFA920] rounded-md"
                : ""
                }`}
            >
              <SquarePlus />
              New Listing
            </button>
            <button
              onClick={() => handleTabClick("Profile")}
              className={`p-2 flex gap-2 text-left ${activeTab === "Profile"
                ? "font-semibold text-white bg-[#FFA920] rounded-md"
                : ""
                }`}
            >
              <SquareUser /> Profile
            </button>
            <button
              onClick={() => handleTabClick("users")}
              className={`p-2 flex gap-2 text-left ${activeTab === "users"
                ? "font-semibold text-white bg-[#FFA920] rounded-md"
                : ""
                }`}
            >
              <UsersRound />
              Users
            </button>

            <button
              onClick={() => handleTabClick("listings")}
              className={`p-2 flex gap-2 text-left  ${activeTab === "listings"
                ? "font-semibold  text-white bg-[#FFA920] rounded-md"
                : ""
                }`}
            >
              <Building2 />
              Listings
            </button>
            <button
              onClick={() => handleTabClick("bookings")}
              className={`p-2 flex gap-2 text-left mb-3 ${activeTab === "bookings"
                ? "font-semibold  text-white bg-[#FFA920] rounded-md"
                : ""
                }`}
            >
              <CalendarCheck2 />
              Bookings
            </button>
            <button
              onClick={() => handleTabClick("reviews")}
              className={`p-2 flex gap-2 text-left mb-3 ${activeTab === "reviews"
                ? "font-semibold  text-white bg-[#FFA920] rounded-md"
                : ""
                }`}
            >
              <MessageSquareCode /> Reviews
            </button>
          </div>
        </div>

        <button
          onClick={handlelogout}
          className="p-2  bg-red-500 text-white flex gap-3 justify-center text-center rounded mt-4"
        >
          <LogOut /> Logout
        </button>
      </div>

      <div className="w-[87%] ml-auto flex-1 overflow-y-auto">
        <div className="flex justify-between items-center px-6 py-2  mb-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">
              Hey {UserProfile.Username} Good morning,
            </h2>
            <p className="text-lg font-semibold ">{currentDate}</p>
          </div>
          <div>
            <IconDropDown />
          </div>
        </div>
        <div className="p-4 bg-gray-100">
          {mainContent === "main" && (
            <AdmDashMain
              users={TotalUsers}
              bookings={TotalBookings}
              listings={TotalListings}
              reviews={TotalReviews}
            />
          )}
          {mainContent === "newListing" && <AddListing />}
          {mainContent === "users" && <MembersTable />}
          {mainContent === "listings" && <ListingsTable />}
          {mainContent === "bookings" && <BookingsTable />}
          {mainContent === "reviews" && <ReviewsTable reviews={TotalReviews} />}
          {mainContent === "Profile" && <AdminForm />}
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
