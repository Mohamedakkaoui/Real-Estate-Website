import React, { useState } from 'react';
import { ListingsTable } from './AdmDashListings';
import { MembersTable } from './AdmDashUsers';
import { BookingsTable } from './AdmDashBookings';
import { ReviewsTable } from './AdmDashReviews';
import './AdminHeader.css'
function AdminHeader() {
    const [activeTab, setActiveTab] = useState('main');

    const [mainContent, setMainContent] = useState('Default Content');

    const handleTabClick = (content) => {
        setActiveTab(content);
        setMainContent(content);
    };

    return (
        <div>
            <div className='First Card flex justify-between items-center px-6 py-2' style={{ backgroundColor: '#E5E5E5', marginBottom: '10px' }}>
                <div><h2 className='text-xl'>Admin Dashboard</h2>
                    <p>All the details, stats and insights about the RYMZ site</p></div>
                <div className='browsingTab flex gap-4'>
                    <button onClick={() => handleTabClick('main')} className={activeTab === 'main' ? 'active' : ''}>Main</button>
                    <button onClick={() => handleTabClick('stats')} className={activeTab === 'stats' ? 'active' : ''}>Stats</button>
                    <button onClick={() => handleTabClick('users')} className={activeTab === 'users' ? 'active' : ''}>Users</button>
                    <button onClick={() => handleTabClick('listings')} className={activeTab === 'listings' ? 'active' : ''}>Listings</button>
                    <button onClick={() => handleTabClick('bookings')} className={activeTab === 'bookings' ? 'active' : ''}>Bookings</button>
                    <button onClick={() => handleTabClick('reviews')} className={activeTab === 'reviews' ? 'active' : ''}>Reviews</button>
                </div>
            </div>
            <div>
                <div className='Main'>
                    {mainContent === 'main' && <div>hello</div>}
                    {mainContent === 'stats' && <div>This is the second content.</div>}
                    {mainContent === 'users' && <MembersTable />}
                    {mainContent === 'listings' && <ListingsTable />}
                    {mainContent === 'bookings' && <BookingsTable />}
                    {mainContent === 'reviews' && <ReviewsTable />}
                    {mainContent === 'Default Content' && <div>This is the default content.</div>}
                </div>
            </div>
        </div>
    )
}

export default AdminHeader