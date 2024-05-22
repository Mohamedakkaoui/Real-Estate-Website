import React from 'react'
import SidebarComp from '../../Components/Sidebar/Sidebar'
import MainDashboard from '../../Components/Dashboard/Main'
import './DashboardPage.css'
import Form from '../../Components/Form/Form'
import AddListing from '../../Components/ListingBoxes/AddNewListing'
import Bookings from '../../Components/Bookings/Bookings'
import Mylistings from '../../Components/Mylinstings/Mylistings'
import { TransactionsTable } from '../../Components/Reviews/Reviews'
import FavsCard from '../../Components/Favorites/FavCard'
import Favorites from '../../Components/Favorites/Favorites'
import { Myrevs } from '../../Components/Myrevs/Myrevs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyBookings from '../../Components/MyBookings/MyBookings'


function DashboardPage() {
    return (
        <Router>
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
                        <Route path="/favourites" element={<Favorites />} />
                        <Route path="/My-Reviews" element={<Myrevs />} />
                        <Route path="/" element={<Form />} /> {/* Default route */}
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default DashboardPage