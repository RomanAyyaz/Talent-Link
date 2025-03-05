import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import {Route, Routes } from 'react-router-dom'
import AddCourse from "../CourseInstructor/AddCourse/AddCourse";
import AllCourses from '../CourseInstructor/AllCourses/AllCourses'
import ManageLectures from "../CourseInstructor/ManageLectures/ManageLectures";
import PostJobForm from "../Job/PostJobs/PostJobForm";
import MyJob from "../Job/MyJob/MyJob";
import EditJob from "../Job/EditJob/EditJob";
import ManageJobs from "../Job/ManageJobs/ManageJobs";
import { CandidateProfile } from "../Job/HiringPipeLine/CandidateProfile";
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
          {/* Company profile */}
          <Route path='profile' element={ <CompanyProfile />} />
          {/* Company courses */}
          <Route path='add-course' element={<AddCourse />} />
          <Route path='manage-Lecture/:id' element={<ManageLectures />} />
          <Route path="all-courses" element = {<AllCourses/>} />
          {/* Company Jobs */}
          <Route path="postJob" element = {<PostJobForm/>}/>
          <Route path="myJob" element = {<MyJob/>} />
          <Route path="editJob/:id" element= {<EditJob/>}/>
          <Route path="manageJob/:id" element= {<ManageJobs/>} />
          {/* Candiate profile  */}
          <Route path="candidateProfile/:candidateId/:jobId" element = { < CandidateProfile/> }/>
        </Routes>
     
         
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
