import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import CoursesList from './CoursesList/CoursesList'
import PopularCourses from './PopularCourses/PopularCourses'
import Fotter from '../Fotter/Fotter'
import OtherLinks from './OtherLinks/OtherLinks'
import LatestNews from './LatestNews/LatestNews'
import SkillLists from './SkillsList/SkillLists'
import WebsiteInfo from './WebsiteInfo/WebsiteInfo'
import SuccessStories from './SuccessStories/SuccessStories'
function LandingPage() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <CoursesList/>
        <PopularCourses/>
        <WebsiteInfo/>
        <SuccessStories/>
        <SkillLists/>
        <LatestNews/>
        <OtherLinks/>
        <Fotter/>

    </>
  )
}

export default LandingPage
