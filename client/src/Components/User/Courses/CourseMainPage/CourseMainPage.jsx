import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getDataOfCourseApi } from "../CoursesApi";
import { useParams } from "react-router-dom";
import Navbar from "../../LandingPage/Navbar/Navbar";
import Fotter from '../../Fotter/Fotter'
import OtherLinks from "../../LandingPage/OtherLinks/OtherLinks";
const CourseMainPage = () => {
  let { id } = useParams();
  //Data showing
  let [view, setView] = useState("overview");
  let { data, isLoading, Error } = useQuery({
    queryKey: ["course"],
    queryFn: () => getDataOfCourseApi(id),
  });
  if (isLoading) {
    <div>Data Loading...</div>;
  }
  if (Error) {
    <div>Some error loading data</div>;
  }
  let courseData = data?.data ? data.data : [];
  return (
    <>
      <Navbar />

      <div className="bg-bgNavbar md:min-h-[340px]  min-h-[500px] text-white pt-16 md:pt-12 lg:pt-16 px-4 md:mt-1 text-start">
        {/* Instructor Section */}
        <div className="flex items-center justify-between lg:mt-6 mb-6">
          <div className="flex items-center gap-4">
            <img
              src="
https://secure.gravatar.com/avatar/ff7411aa595f41253c93a296342c5d9d?s=250&d=mm&r=g"
              alt="Instructor avatar"
              className="rounded-full w-[50px] h-[50px]"
            />
            <div>
              <p className="text-gray-400 text-sm">Instructor</p>
              <h3 className="text-lg font-semibold ">
                {courseData.instructor}
              </h3>
            </div>
          </div>
        </div>

        {/* Course Title */}
        <h1 className="text-4xl font-bold mb-12 md:mb-6 leading-normal ">
          Build a Shopify Dropshipping Business from Scratch
        </h1>
        <div className="h-[0.2px] bg-gray-50"></div>
        {/* Course Stats */}
        <div className="flex mt-8 gap-x-4 gap-y-6 flex-wrap md:gap-x-10 md:mt-8">
          <div className="flex items-center gap-2 texts-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-500"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className=""> {courseData.duration} Weeks</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-500"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20v-6M6 20V10M18 20V4" />
            </svg>
            <span>All Levels</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-500"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <span>6 Lessons</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-500"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
            <span>0 Quizzes</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-500"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>78 Students</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 px-3 md:mt-0">
        {/* Navigation Tabs */}
        <div className="flex gap-8 font-medium mt-12 md:text-lg  md:mt-6">
          <button
            className="px-4 py-2  text-black hover:text-HeroButtonOne"
            onClick={() => {
              setView("overview");
            }}
          >
            Overview
          </button>
          <button
            className="px-4 py-2 text-black hover:text-HeroButtonOne"
            onClick={() => {
              setView("curriculum");
            }}
          >
            Curriculum
          </button>
          <button
            className="px-4 py-2 text-black hover:text-HeroButtonOne "
            onClick={() => {
              setView("instructor");
            }}
          >
            Instructor
          </button>
        </div>
        <div className="h-[0.5px] bg-gray-200 my-2"></div>
      </div>
      {view === "overview" ? (
        <div className="mt-4 px-4 text-start">
          <h1 className="text-3xl font-bold">What you will learn</h1>
          {
            courseData.learningOutcomes? <div className="p-4 text-pretty">
              { 
                courseData.learningOutcomes.map((outcome,i)=>{
                  return(
                    <ul className="list-disc list-inside text-gray-800 space-y-2">
                   <li key={i} className="text-lg leading-relaxed">  {outcome}</li>
                  </ul>
                  )
                  
                })
              }
              
            </div> :"No Outcomes yet" 
          }
        </div>
      ) : view === "curriculum" ? (
        <div className="mt-4 px-4 text-start">
          <h1 className="text-2xl font-semibold">Curriculum</h1>
        </div>
      ) : (
        <div className="mt-4 mb-10 px-4 text-start md:flex">
            <div className="flex mt-3 items-center justify-center gap-4 ">
              <img
                src="
https://secure.gravatar.com/avatar/ff7411aa595f41253c93a296342c5d9d?s=250&d=mm&r=g"
                alt="Instructor avatar"
                className="rounded-full w-[80px] h-[80px] md:w-[90px] md:h-[90px]"
              />
              <div>
              </div>
            </div>
            <div className="flex justify-center mt-3 md:items-center">
                <h3 className="text-2xl font-semibold md:font-bold ">
                  {courseData.instructor}
                </h3>
            </div>
        </div>
      )}

   <div className="mt-3">
        <OtherLinks/>
       </div>
       <div className="">
        <Fotter/>
       </div>

      
    </>
  );
};

export default CourseMainPage;
