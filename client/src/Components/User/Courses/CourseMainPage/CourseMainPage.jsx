import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getDataOfCourseApi } from '../CoursesApi';
import { useParams } from 'react-router-dom';
import Navbar from '../../LandingPage/Navbar/Navbar';

const CourseMainPage = () => {
    let {id} = useParams();
    let {data,isLoading,Error} = useQuery({
        queryKey:['course'],
        queryFn:() => getDataOfCourseApi(id),
    })
    if(isLoading){
        <div>Data Loading...</div>
    }
    if(Error){
        <div>
            Some error loading data
        </div>
    }
    let courseData = data?.data? data.data : []
  return (
      <>
      <Navbar/>

      <div className="bg-bgNavbar min-h-[450px] text-white pt-16 px-4 md:mt-3 text-start">
      {/* Instructor Section */}
      <div className="flex items-center justify-between mt-6 mb-6">
        <div className="flex items-center gap-4">
          <img 
            src="
https://secure.gravatar.com/avatar/ff7411aa595f41253c93a296342c5d9d?s=250&d=mm&r=g" 
            alt="Instructor avatar" 
            className="rounded-full w-[50px] h-[50px]"
          />
          <div>
            <p className="text-gray-400 text-sm">Instructor</p>
            <h3 className="text-lg font-semibold ">{courseData.instructor}</h3>
          </div>
        </div>
      </div>

      {/* Course Title */}
      <h1 className="text-3xl font-bold mb-12">
      Build a Shopify Dropshipping Business from Scratch
      </h1>

      {/* Course Stats */}
      <div className="flex">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>10 Weeks</span>
        </div>

        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20v-6M6 20V10M18 20V4"/>
          </svg>
          <span>All Levels</span>
        </div>

        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>
          <span>6 Lessons</span>
        </div>

        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
          <span>0 Quizzes</span>
        </div>

        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span>78 Students</span>
        </div>
      </div>

      
    </div>

   {/* Navigation */}
     <div className='mt-10'>
        {/* Navigation Tabs */}
      <div className="flex gap-8 mt-12 border-b border-gray-700">
        <button className="px-4 py-2 text-gray-400 hover:text-white">
          Overview
        </button>
        <button className="px-4 py-2 text-gray-400 hover:text-white">
          Curriculum
        </button>
        <button className="px-4 py-2 text-white border-b-2 border-red-500">
          Instructor
        </button>
      </div>
     </div>
    
      </>
    
  );
};

export default CourseMainPage;

