import React, { useState } from 'react';
import AdminHeader from '../../Components/AdminDashboard/AdminHeader';
import { Users } from 'lucide-react';
import { MembersTable } from '../../Components/AdminDashboard/AdmDashUsers';
import { ListingsTable } from '../../Components/AdminDashboard/AdmDashListings';
import { ReviewsTable } from '../../Components/AdminDashboard/AdmDashReviews';
import { BookingsTable } from '../../Components/AdminDashboard/AdmDashBookings';



function AdminDashboard() {

    return (
        <div className='mx-auto'>
            <AdminHeader />
            <MembersTable />
            <ListingsTable />
            <ReviewsTable />
            <BookingsTable />
        </div >
    )
}

export default AdminDashboard