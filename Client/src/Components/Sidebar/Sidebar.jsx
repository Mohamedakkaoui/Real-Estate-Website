
// import { Sidebar } from "flowbite-react";
// import './Sidebar.css'
// import { BiAddToQueue } from "react-icons/bi";
// import { RiBuilding2Line } from "react-icons/ri";
// import { FaRegHeart } from "react-icons/fa";
// import { BiLogOut } from "react-icons/bi";
// import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { MdOutlineModeComment } from "react-icons/md";
// import { FaRegCommentAlt } from "react-icons/fa";
// import { GiCalendar } from "react-icons/gi";
// import { RiMessage3Line } from "react-icons/ri";
// import { FaRegUser } from "react-icons/fa";
// import { BsCalendarRange } from "react-icons/bs";



// import React from 'react'

// function SidebarComp() {
//     return (
//         <div className="scrollable-component">
//             <Sidebar >

//                 <Sidebar.Items className="bg-white">
//                     <p>MAIN</p>
//                     <Sidebar.ItemGroup className="mb-10">
//                         <Sidebar.Item className="item" href="/main" icon={MdOutlineSpaceDashboard}>
//                             Dashboard
//                         </Sidebar.Item>

//                         <Sidebar.Item className="item" href="#" icon={RiMessage3Line} >
//                             Messages
//                         </Sidebar.Item>

//                     </Sidebar.ItemGroup>
//                     <p>MANAGE LISTINGS</p>

//                     <Sidebar.ItemGroup className="mb-10">
//                         <Sidebar.Item className="item" href="/new-property" icon={BiAddToQueue}>
//                             Add New Property
//                         </Sidebar.Item>

//                         <Sidebar.Item className="item" href="/my-listings" icon={RiBuilding2Line}>
//                             My Proprties
//                         </Sidebar.Item>
//                         <Sidebar.Item className="item" href="/Bookings" icon={GiCalendar}>
//                             Bookings
//                         </Sidebar.Item>
//                         <Sidebar.Item className="item" href="/Reviews" icon={FaRegCommentAlt}>
//                             Reviews
//                         </Sidebar.Item>
//                     </Sidebar.ItemGroup>
//                     <p>MANAGE ACCOUNT</p>
//                     <Sidebar.ItemGroup >
//                         <Sidebar.Item className="item" href="/Profile" icon={FaRegUser}>
//                             My Profie
//                         </Sidebar.Item>

//                         <Sidebar.Item className="item" href="/My-Bookings" icon={BsCalendarRange}>
//                             My Bookings
//                         </Sidebar.Item>
//                         <Sidebar.Item className="item" href="/favourites" icon={FaRegHeart}>
//                             My Favourites
//                         </Sidebar.Item>
//                         <Sidebar.Item className="item" href="/My-Reviews" icon={MdOutlineModeComment}>
//                             My Reviews
//                         </Sidebar.Item>
//                         <Sidebar.Item className="item" href="#" icon={BiLogOut}>
//                             Log out
//                         </Sidebar.Item>
//                     </Sidebar.ItemGroup>
//                 </Sidebar.Items>
//             </Sidebar>
//         </div>
//     )
// }

// export default SidebarComp


import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Sidebar } from 'your-sidebar-library'; // Replace with the actual import if needed

import { Sidebar } from "flowbite-react";
import './Sidebar.css'
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
                        <Sidebar.Item as={NavLink} to="/main" icon={MdOutlineSpaceDashboard}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item as={NavLink} to="/messages" icon={RiMessage3Line}>
                            Messages
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <p>MANAGE LISTINGS</p>
                    <Sidebar.ItemGroup className="mb-10">
                        <Sidebar.Item as={NavLink} to="/new-property" icon={BiAddToQueue}>
                            Add New Property
                        </Sidebar.Item>
                        <Sidebar.Item as={NavLink} to="/my-listings" icon={RiBuilding2Line}>
                            My Properties
                        </Sidebar.Item>
                        <Sidebar.Item as={NavLink} to="/bookings" icon={GiCalendar}>
                            Bookings
                        </Sidebar.Item>
                        <Sidebar.Item as={NavLink} to="/reviews" icon={FaRegCommentAlt}>
                            Reviews
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <p>MANAGE ACCOUNT</p>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item as={NavLink} to="/profile" icon={FaRegUser}>
                            My Profile
                        </Sidebar.Item>
                        <Sidebar.Item as={NavLink} to="/my-bookings" icon={BsCalendarRange}>
                            My Bookings
                        </Sidebar.Item>
                        <Sidebar.Item as={NavLink} to="/favourites" icon={FaRegHeart}>
                            My Favourites
                        </Sidebar.Item>
                        <Sidebar.Item as={NavLink} to="/my-reviews" icon={MdOutlineModeComment}>
                            My Reviews
                        </Sidebar.Item>
                        <Sidebar.Item as={NavLink} to="/logout" icon={BiLogOut}>
                            Log out
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default SidebarComp;
