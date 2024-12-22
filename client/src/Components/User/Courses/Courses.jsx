import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar/Navbar";
import {useQuery} from "@tanstack/react-query"
import { FaCaretDown } from "react-icons/fa";
import { getAllCoursesData } from "./CoursesApi";
import Fotter from '../Fotter/Fotter'
import OtherLinks from '../LandingPage/OtherLinks/OtherLinks'
import CoursesList from "./CoursesList/CoursesList";
function Courses() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownValue,setDropDownValue] = useState('Newly Published')
  const toggleDropdown = () => setIsOpen(!isOpen);
  //Api calling for getting the data of courses 
  const {data,isLoading,Error} = useQuery({
    queryKey:['courses'],
    queryFn:getAllCoursesData,
  })
  if(isLoading){
    <div>Data is loading </div>
  }
  if(Error){
    <div>Some error in loading the data </div>
  }
  let coursesData = data?.coursesData? data.coursesData : []
  return (
    <div className="">
      <Navbar />
      <div className="w-full px-2.5 pt-8 text-start md:px-10">
        <h1 className="text-3xl text-start font-bold md:mt-8 md:text-5xl">
          Courses
        </h1>
        <div className="mt-3 md:flex md:gap-1 justify-between items-center">
          <div className="md:w-4/5 md:mt-2">
            <input
              type="text"
              className="border w-full px-2.5 py-3.5 rounded-md text-sm font-medium  border-1 focus:border-HeroButtonOne focus:outline-none"
              placeholder="Search Courses..."
            />
          </div>

          <div className="md:w-52 relative inline-block text-left border rounded-md mt-3">
            {/* Dropdown button */}
            <button
              onClick={toggleDropdown}
              className="inline-flex  items-center justify-center text-black  border border-1 w-full rounded-md bg-white pl-3 pr-10 md:px-2.5 md:py-3.5  py-2  text-sm font-medium  shadow-sm focus:border-HeroButtonOne focus:outline-none"
            >
             {dropDownValue}
              {/* <FaCaretDown size={15} className="ml-1"/>  */}
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute border px-3 md:px-0  z-10 mt-2 w-40 md:w-52 origin-top-right rounded-md bg-white shadow-lg">
                <ul className="py-1 text-base">
                  <li className=" my-0.5 md:my-1 cursor-pointer md:px-2 hover:bg-gray-200" onClick={()=>{
                    setDropDownValue('Price low to high');
                    setIsOpen(false)
                  }}>
                    Price low to high
                  </li>
                  <li className=" my-0.5 md:px-2 md:my-1 cursor-pointer hover:bg-gray-200" onClick={()=>{
                    setDropDownValue('Price high to low');
                    setIsOpen(false)}}  >
                    Price high to low
                  </li>
                  <li className=" my-0.5 md:my-1 md:px-2  cursor-pointer hover:bg-gray-200" onClick={()=>{
                    setDropDownValue('Popular');
                    setIsOpen(false)
                  }}>Popular</li>
                  <li className=" my-0.5 md:my-1 md:px-2 cursor-pointer hover:bg-gray-200" onClick={()=>{
                    setDropDownValue('Title z-a');
                    setIsOpen(false)
                  }}>Title z-a</li>
                  <li className=" my-0.5 md:my-1 md:px-2 cursor-pointer hover:bg-gray-200" onClick={()=>{
                    setDropDownValue('Title a-z');
                    setIsOpen(false)
                  }} >Tilte a-z</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
       
       {/* List of all the courses */}
       <div>
        {
          coursesData.map((courseData,i)=>{
            return(
              <div >
                <CoursesList key={i} courseData={courseData}/>
              </div>
              
            )
          })
        }
       </div>
       <div className="mt-3">
        <OtherLinks/>
       </div>
       <div className="">
        <Fotter/>
       </div>
    </div>
  );
}

export default Courses;
