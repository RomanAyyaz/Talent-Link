import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import CoursesList from './CoursesList/CoursesList'
import PopularCourses from './PopularCourses/PopularCourses'
import Fotter from '../Fotter/Fotter'
function LandingPage() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <CoursesList/>
        <PopularCourses/>
        <Fotter/>

    </>
  )
}

export default LandingPage
