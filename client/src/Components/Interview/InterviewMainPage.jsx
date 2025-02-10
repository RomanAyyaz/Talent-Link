import React from 'react'
import Navbar from '../User/Navbar';
import InterviewBookingPage from './Booking/InterviewBookingPage';
import OtherLinks from '../User/LandingPage/OtherLinks/OtherLinks';
import Fotter from '../User/Fotter/Fotter';

function InterviewMainPage() {
  return (
    <div>
        <Navbar/>
        <div>
            <InterviewBookingPage/>
        </div>
        <div className="mt-3">
        <OtherLinks />
      </div>
      <div className="">
        <Fotter />
      </div>
    </div>
  )
}

export default InterviewMainPage