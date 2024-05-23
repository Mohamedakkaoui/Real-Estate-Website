import React from 'react'
import './Main.css'
import { UserCheck } from 'lucide-react'
import UserCards from '../UserCards'
function MainDashboard() {
    const username = "Ranya"
    return (
        <>
            <div className='firsttag'>
                <h3>Howdy, {username} !</h3>
                <p>We are glad to see you again!</p>
            </div>
            <UserCards />
        </>
    )
}

export default MainDashboard