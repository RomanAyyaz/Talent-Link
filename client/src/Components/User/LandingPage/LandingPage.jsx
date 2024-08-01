import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import CoursesList from './CoursesList/CoursesList'
import PopularCourses from './PopularCourses/PopularCourses'
import Fotter from '../Fotter/Fotter'
import OtherLinks from './OtherLinks/OtherLinks'
import LatestNews from './LatestNews/LatestNews'
function LandingPage() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <CoursesList/>
        <PopularCourses/>
        <LatestNews/>
        <OtherLinks/>
        <Fotter/>

    </>
  )
}

export default LandingPage
