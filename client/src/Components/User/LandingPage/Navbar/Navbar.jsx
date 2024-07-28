import React, { useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaBars,
  FaCaretDown,
  FaTimes
} from "react-icons/fa";
function Navbar() {
    const [showNavbar,setNavbar] = useState(false)
  return (
    <>
      <nav className="w-screen bg-bgNavbar h-14 text-white flex items-center justify-between px-8 lg:px-14">
        <h1 className="font-bold text-2xl">EDULOGY</h1>
        <ul className="hidden lg:flex w-[650px] items-center justify-between font-medium cursor-pointer">
          <li>Home</li>
          <li>News</li>
          <li className="relative group flex items-center">
            Features
            <FaCaretDown size={11} className="text-red-600 mt-1 ml-1"/> 
            <ul className="absolute w-60  top-8 hidden group-hover:block bg-white text-black px-4 py-3 rounded shadow-lg">
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                About
              </li>
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                Contact
              </li>
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                Our Team
              </li>
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                Courses
              </li>
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                Errors
              </li>
            </ul>
          </li>
          <li className="relative group flex items-center">
            Courses
            <FaCaretDown size={11} className="text-red-600 mt-1 ml-1"/> 
            <ul className="absolute w-60  top-8 hidden group-hover:block bg-white text-black px-4  py-3 rounded shadow-lg">
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                About
              </li>
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                Contact
              </li>
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                Our Team
              </li>
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                Courses
              </li>
              <li className="py-1 px-2 hover:bg-gray-200 text-start my-2 font-normal">
                Errors
              </li>
            </ul>
          </li>
          <li>About</li>
          <li>Our Team</li>
          <li>Contact</li>
        </ul>
        <div className="hidden lg:flex w-36 h-6 items-center text-base justify-between cursor-pointer">
          <div className="hover:bg-blue-500 relative text-base p-1 group flex items-center justify-center">
            <FaFacebookF />
            <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
              Facebook
            </div>
          </div>
          <div className="hover:bg-blue-500 relative text-base p-1 group flex items-center justify-center">
            <FaTwitter />
            <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
              Twitter
            </div>
          </div>
          <div className="hover:bg-red-500 relative text-base p-1 group flex items-center justify-center">
            <FaInstagram />
            <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
              Instagram
            </div>
          </div>
          <div className="hover:bg-red-500 relative text-base p-1 group flex items-center justify-center">
            <FaYoutube />
            <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
              Youtube
            </div>
          </div>
          <FaSearch />
        </div>
      </nav>
      <div className="lg:hidden bg-bgMenu w-screen h-10 text-white px-8 flex items-center" onClick={()=>{
        setNavbar(!showNavbar)
      }}>
        {
            showNavbar?
            <FaTimes className="text-sm"/>:<FaBars className="text-sm" />
        }
        <h1 className="text-start mx-2">Main Menu</h1>
      </div>
      {
        showNavbar ? 
        <div className="bg-MobilePhoneNavbg w-screen text-start px-8 py-2 text-white">
        <ul>
            <li className="my-2.5" >Home</li>
            <li className="my-2.5" >News</li>
            <li className="my-2.5 relative flex group justify-between" >
            Features
            <FaCaretDown size={11} className="text-red-600"/>
            </li>
            <li className="my-2.5" >Courses</li>
            <li className="my-2.5" >About</li>
            <li className="my-2.5" >Our Team</li>
            <li className="my-2.5" >Contact</li>
        </ul>
      </div> 
      :'' 
      }
    </>
  );
}

export default Navbar;