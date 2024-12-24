import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import {Route, Routes } from 'react-router-dom'
import AddCourse from "../CourseInstructor/AddCourse/AddCourse";
import AllCourses from '../CourseInstructor/AllCourses/AllCourses'
import ManageLectures from "../CourseInstructor/ManageLectures/ManageLectures";
import PostJobForm from "../Job/PostJobs/PostJobForm";
function CompanyDashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <Sidebar />
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
        
        <Routes>
          <Route path='profile' element={ <CompanyProfile />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='manage-Lecture/:id' element={<ManageLectures />} />
          <Route path="all-courses" element = {<AllCourses/>} />
          <Route path="postJob" element = {<PostJobForm/>}/>
        </Routes>
     
         
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
