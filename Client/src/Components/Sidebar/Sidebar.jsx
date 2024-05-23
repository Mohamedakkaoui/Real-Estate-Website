import React from "react";
import { NavLink } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import "./Sidebar.css";
import { BiAddToQueue } from "react-icons/bi";
import { RiBuilding2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineModeComment } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { GiCalendar } from "react-icons/gi";
import { RiMessage3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { BsCalendarRange } from "react-icons/bs";

function SidebarComp() {
  return (
    <div className="scrollable-component">
     <Sidebar>
  <Sidebar.Items className="bg-white">
    <p>MAIN</p>
    <Sidebar.ItemGroup className="mb-10">
      <Sidebar.Item
        as={NavLink}
        to="/User-Dashboard/main"
        className="px-0"
      >
        <div className="flex gap-4">
          <MdOutlineSpaceDashboard size={25} />
          <h2>Dashboard</h2>
        </div>
        
      </Sidebar.Item>
      <Sidebar.Item as={NavLink} to="/User-Dashboard/messages" className="px-0">
        <div className="flex gap-4">
          <RiMessage3Line size={25} />
          <h2>Messages</h2>
        </div>
      </Sidebar.Item>
    </Sidebar.ItemGroup>
    <p>MANAGE LISTINGS</p>
    <Sidebar.ItemGroup className="mb-10">
      <Sidebar.Item as={NavLink} to="/User-Dashboard/new-property" className="px-0">
      <div className="flex gap-4">
          <BiAddToQueue size={25} />
          <h2>        Add New Property</h2>
        </div>
      </Sidebar.Item>
      <Sidebar.Item as={NavLink} to="/User-Dashboard/my-listings" className="px-0">
      <div className="flex gap-4">
          < RiBuilding2Line size={25} />
          <h2>        My Properties</h2>
        </div>
      </Sidebar.Item>
      <Sidebar.Item as={NavLink} to="/User-Dashboard/bookings" className="px-0">
      <div className="flex gap-4">
          <GiCalendar size={25} />
          <h2>Bookings</h2>
        </div>
        
      </Sidebar.Item>
      <Sidebar.Item as={NavLink} to="/User-Dashboard/reviews" className="px-0">
      <div className="flex gap-4">
          <FaRegCommentAlt size={25} />
          <h2>Reviews</h2>
        </div>
        
      </Sidebar.Item>
    </Sidebar.ItemGroup>
    <p>MANAGE ACCOUNT</p>
    <Sidebar.ItemGroup>
      <Sidebar.Item as={NavLink} to="/User-Dashboard/profile" className="px-0">
      <div className="flex gap-4">
          <FaRegUser size={25} />
          <h2> My Profile</h2>
        </div>
       
      </Sidebar.Item>
      <Sidebar.Item as={NavLink} to="/User-Dashboard/my-bookings" className="px-0">
      <div className="flex gap-4">
          <BsCalendarRange size={25} />
          <h2>  My Bookings</h2>
        </div>
      
      </Sidebar.Item>
      <Sidebar.Item as={NavLink} to="/User-Dashboard/favourites" className="px-0">
      <div className="flex gap-4">
          <FaRegHeart size={25} />
          <h2>My Favourites</h2>
        </div>
        
      </Sidebar.Item>
      <Sidebar.Item
        as={NavLink}
        to="/User-Dashboard/my-reviews"
        className="px-0"
      >
        <div className="flex gap-4">
          <MdOutlineModeComment size={25} />
          <h2>My Reviews</h2>
        </div>
        
      </Sidebar.Item>
      <Sidebar.Item as={NavLink} to="/logout" className="px-0">
      <div className="flex gap-4">
          <BiLogOut size={25} />
          <h2>Log out</h2>
        </div>
        
      </Sidebar.Item>
    </Sidebar.ItemGroup>
  </Sidebar.Items>
</Sidebar>

    </div>
  );
}

export default SidebarComp;
