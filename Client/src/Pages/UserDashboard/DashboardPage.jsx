import React from 'react';
import SidebarComp from '../../Components/Sidebar/Sidebar';
import MainDashboard from '../../Components/Dashboard/Main';
import './DashboardPage.css';
import Form from '../../Components/Form/Form';
import AddListing from '../../Components/ListingBoxes/AddNewListing';
import Bookings from '../../Components/Bookings/Bookings';
import Mylistings from '../../Components/Mylinstings/Mylistings';
import { TransactionsTable } from '../../Components/Reviews/Reviews';
import Favorites from '../../Components/Favorites/Favorites';
import { Myrevs } from '../../Components/Myrevs/Myrevs';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import MyBookings from '../../Components/MyBookings/MyBookings';

function DashboardPage() {
    const { userId } = useParams(); // Retrieve userId from route parameters

    return (
        <div className='whole'>
            <div>
                <SidebarComp />
            </div>
            <div className='leftsection'>
            <Routes>
                <Route path="/Main" element={<MainDashboard />} />
                <Route path="/Profile" element={<Form />} />
                <Route path="/new-property" element={<AddListing />} />
                <Route path="/Bookings" element={<Bookings />} />
                <Route path="/my-listings" element={<Mylistings />} />
                <Route path="/Reviews" element={<TransactionsTable />} />
                <Route path="/My-bookings" element={<MyBookings />} />
                <Route path="/favourites" element={<Favorites userId={userId} />} />
                <Route path="/My-Reviews" element={<Myrevs />} />
                <Route path="/" element={<Form />} /> {/* Default route */}
            </Routes>
            </div>
        </div>
    );
}

export default DashboardPage;
