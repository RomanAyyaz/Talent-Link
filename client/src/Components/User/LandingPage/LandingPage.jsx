import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import CoursesList from './CoursesList/CoursesList'
import PopularCourses from './PopularCourses/PopularCourses'

function LandingPage() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <CoursesList/>
        <PopularCourses/>
    </>
  )
}

export default LandingPage
