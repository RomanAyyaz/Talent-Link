import React, { useState } from "react";
import {
  FaBars,
  FaArrowRight,
  FaHome,
  FaCaretRight,
  FaCaretDown,
  FaRegUser,
  FaRegEnvelope,
  FaRegArrowAltCircleLeft 
} from "react-icons/fa";
import { Link} from "react-router-dom";
import AddCourse from "./AddCourse/AddCourse";
function Navbar() {
  let [showProfile, setShowProfile] = useState(false);
  let [showSidebar, setShowSidebar] = useState(false);
  let [Courses,setCourses] = useState(false)
  let [Students,setStudents] = useState(false)
  return (
    <>
      <div className="bg-bgwhite w-full h-12 md:h-14 flex items-center justify-between px-3 lg:px-8 shadow-sm">
        {/* Arrow to show on md screens */}
        <div className="md:flex items-center justify-between hidden">
          {showSidebar ? (
            <FaBars
              className="text-neutral-500 ml-3 duration-1000"
              size={25}
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            />
          ) :  (
            <FaArrowRight
              className="text-InstructorPrimary ml-3 duration-1000"
              size={25}
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            />
          )}
        </div>
        <div className="flex items-center justify-between md:hidden">
          {showSidebar ? (
            <FaArrowRight
              className="text-InstructorPrimary ml-3 duration-1000"
              size={25}
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            />
          ) : (
            <FaBars
              className="text-neutral-500 ml-3 duration-1000"
              size={25}
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            />
          )}
        </div>
        <div className="relative" onClick={() => setShowProfile(!showProfile)}>
          <img
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          {showProfile && (
            <div className="absolute duration-1000  right-0 mt-2.5 bg-bgwhite h-28 w-40 rounded-lg py-2 text-neutral-500 text-sm shadow-lg">
              <div className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 hover:text-InstructorPrimary w-full px-5">
                <FaRegUser/>
                <h1 className="mx-2.5">Profile</h1>
              </div>
              <div className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 hover:text-InstructorPrimary w-full px-5">
                <FaRegEnvelope />
                <h1 className="mx-2.5">Inbox</h1>
              </div>
              <div className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 hover:text-InstructorPrimary w-full px-5">
                <FaRegArrowAltCircleLeft/>
                <h1 className="mx-2.5">Logout</h1>
              </div>
            </div>
          )}
        </div>
      </div>
      {showSidebar && (
        <div className="md:hidden absolute z-10 duration 1000 w-56 bg-bgInstSidebar h-screen text-start text-gray-500 py-6 px-5">
          <h1 className="text-sm text-gray-500">Main Menu</h1>
          <div className="px-2 flex mt-5 items-center">
            <FaHome className="text-black" />
            <p className="ml-4 text-sm font-medium">Dashboard</p>
          </div>
          <div className={`${Courses && 'text-InstructorPrimary bg-gray-300'} py-2 rounded px-2 flex mt-4 items-center justify-between`} onClick={()=>{
            setCourses(!Courses)
          }}>
            <div className="flex items-center justify-between">
            <FaHome className={` ${Courses ? 'text-InstructorPrimary':'text-black'}`} />
            <p className="ml-4 text-sm font-medium">Courses</p>
            </div>
            <div className="my-auto">
                {
                    Courses? <FaCaretDown/> : <FaCaretRight/> 
                }
            </div>
          </div>
          {
            Courses &&  <ul className="text-sm font-normal px-10 py-2">
            <li className="my-2">All Courses</li>
            <li className="my-2">Add Courses</li>
            <li className="my-2">Edit Courses</li>
            <li className="my-2">About Courses</li>
            </ul> 
          }
          <div className={`${Students && 'text-InstructorPrimary bg-gray-300'} rounded  py-2 px-2 flex mt-2 items-center justify-between`} onClick={()=>{
            setStudents(!Students)
          }}>
            <div className="flex items-center justify-between">
            <FaHome className={`${Students ? 'text-InstructorPrimary':'text-black'}`} />
            <p className="ml-4 text-sm font-medium">Students</p>
            </div>
            <div className="my-auto">
            {
                    Students? <FaCaretDown/> : <FaCaretRight/> 
            }
            </div>
          </div>
          {
            Students &&  <ul className="text-sm font-normal px-10 py-2">
            <li className="my-2">All Students </li>
            <li className="my-2">Add Students </li>
            <li className="my-2">Edit Students </li>
            <li className="my-2">About Students </li>
            </ul> 
          }
        </div>
      )}
      {/* Side bar on md and larger devices */}
      {
      <div className="flex">
      <div
        className={`bg-bgwhite shadow-md hidden w-20 h-screen md:flex flex-col ${!showSidebar && 'items-center'} py-8
          ${
              showSidebar && "w-52 text-start items-start text-neutral-500"
            }`}
      >
        <h1 className={` text-sm text-neutral-500 px-8 ${!showSidebar && "hidden"}`}>Main Menu</h1>
        <div
          className={`p-3 group hover:bg-gray-300 rounded cursor-pointer ${
            showSidebar && "flex justify-between items-center py-2 px-3 w-full  mt-4"
          }`}
        >
          <div className={`${showSidebar && 'flex items-center justify-between px-2'}`}>
          <FaHome className={`text-black group-hover:text-InstructorPrimary`} />
          <h1 className={`text-sm ml-4 font-medium group-hover:text-InstructorPrimary ${!showSidebar && "hidden"}`}>Dashboard</h1>
          </div>
        </div>
        <div
          className={`p-3 mt-4 hover:bg-gray-300 rounded cursor-pointer group ${
            showSidebar && "flex justify-between items-center py-2 px-3 w-full"
          } ${Courses && 'text-InstructorPrimary bg-gray-300'}`}
        >
          <div className={`${showSidebar && 'flex items-center justify-between px-2 w-full'}`} 
          onClick={()=>{
              setCourses(!Courses)
          }}>
              <div className="flex items-center justify-between">
              <FaHome className={` group-hover:text-InstructorPrimary ${Courses && 'text-InstructorPrimary'}`} />
              <h1 className={`text-sm ml-4 font-medium group-hover:text-InstructorPrimary ${!showSidebar && "hidden"}`}>Courses</h1>
              </div>
          <div className="my-auto">
          {
                  showSidebar && <div className="my-auto">
                  {
                      Courses? <FaCaretDown/> : <FaCaretRight/> 
                  }
              </div>
              }
          </div>
          </div>
        </div>
        {
          Courses &&  <ul className="text-sm font-normal px-10 py-2 duration-300">
          <li className="my-2 cursor-pointer hover:text-InstructorPrimary">All Courses</li>
          <Link to='/addCourse'>
          <li className="my-2 cursor-pointer hover:text-InstructorPrimary">Add Courses</li>
          </Link>
          <li className="my-2 cursor-pointer hover:text-InstructorPrimary">Edit Courses</li>
          <li className="my-2 cursor-pointer hover:text-InstructorPrimary">About Courses</li>
          </ul> 
        }
        <div
          className={`p-3 mt-4 hover:bg-gray-300 rounded cursor-pointer group ${
            showSidebar && "flex justify-between items-center py-2 px-3 w-full"
          }  ${Students && 'text-InstructorPrimary bg-gray-300'}`}
        >
          
          <div className={`${showSidebar && 'flex items-center justify-between px-2 w-full cursor-pointer'}`} onClick={()=>
              {
                  setStudents(!Students)
              }
          }>
              <div className="flex items-center justify-between">
              <FaHome className={` group-hover:text-InstructorPrimary ${Students && 'text-InstructorPrimary'}`} />
              <h1 className={`text-sm ml-4 font-medium group-hover:text-InstructorPrimary ${!showSidebar && "hidden"}`}>Students</h1>
              </div>
              {
                  showSidebar && <div className="my-auto">
                  {
                      Students? <FaCaretDown/> : <FaCaretRight/> 
                  }
              </div>
              }
          </div>
        </div>
        {
          Students &&  <ul className="text-sm font-normal px-10 py-2 duration-300300">
          <li className="my-2 cursor-pointer hover:text-InstructorPrimary">All Students </li>
          <li className="my-2 cursor-pointer hover:text-InstructorPrimary">Add Students </li>
          <li className="my-2 cursor-pointer hover:text-InstructorPrimary">Edit Students </li>
          <li className="my-2 cursor-pointer hover:text-InstructorPrimary">About Students </li>
          </ul> 
        }
      </div>
      <div className="w-full pb-5 bg-bgInstSidebar">
        <AddCourse/>
      </div>
        </div> 
      }
    </>
  );
}

export default Navbar;
