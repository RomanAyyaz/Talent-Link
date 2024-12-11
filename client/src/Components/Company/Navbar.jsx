import React, { useState } from "react";
import {
  FaRegUser,
  FaRegEnvelope,
  FaRegArrowAltCircleLeft 
} from "react-icons/fa";
import Sidebar from "./Sidebar";
function Navbar() {
  let [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <div className="bg-bgwhite w-full h-12 md:h-14 flex items-center justify-between px-3 lg:px-8 shadow-sm">
        <div>
          <h1 className="font-extrabold">Company Name</h1>
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
    </>
  );
}

export default Navbar;
