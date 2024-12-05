import React from 'react'
import Navbar from './Navbar/Navbar'
import CoursesList from './CoursesList/CoursesList'
import PopularCourses from './PopularCourses/PopularCourses'
import Fotter from '../Fotter/Fotter'
import OtherLinks from './OtherLinks/OtherLinks'
import LatestNews from './LatestNews/LatestNews'
import WebsiteInfo from './WebsiteInfo/WebsiteInfo'
import SuccessStories from './SuccessStories/SuccessStories'
import HeroSection from './HeroSection/HeroSection'
import EnhancedFeatureSection from './EnhancedFeatures/EnhancedFeatureSection'
function LandingPage() {
  return (
    <div>
        {/* <Navbar/> */}
        <HeroSection/>
        <CoursesList/>
        <PopularCourses/>
        <WebsiteInfo/>
        <SuccessStories/>
        <EnhancedFeatureSection/>
        <LatestNews/>
        <OtherLinks/>
        <Fotter/>

    </div>
  )
}

export default LandingPage
