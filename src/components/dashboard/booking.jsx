import React from 'react'
import './booking.css'
import TabBar from '../tab-bar/tabBar'
import Atv from '../../images/atv.png'

const booking = () => {
  return (
    <div className='booking'>
        <div className='booking-content'>
            <div className='booking-header'>
                <h3>Bookings</h3>
            <div className='activity-update'>
    <img src={Atv} alt="Paper" />
    <h4>No Bookings yet</h4>
    <p>When they book a ride, you'll see them here.</p>
    </div>
        </div>
        <TabBar/>
        </div>
    </div>
  )
}

export default booking