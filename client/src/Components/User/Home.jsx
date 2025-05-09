import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// If you're using react-icons or another icon library, import it here
// For simplicity, I'll use text symbols for the menu icons

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center">
            TalentLink
            {/* <span className="ml-1 w-4 h-4 bg-green-500"></span> */}
          </div>
        </div>


        <div className="hidden md:flex items-center space-x-4">
          <Link to={'/'} className="text-gray-800 hover:text-gray-600">
            Log In
          </Link>
          <a href="#" className="border border-gray-300 rounded px-4 py-2 text-gray-800 hover:bg-gray-50">
            Request Demo
          </a>
          <a href="#" className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800">
            Create a free account
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>


      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section - For Companies */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col items-center md:border-r border-gray-200">
          <div className="bg-black text-white px-4 py-2 rounded-full mb-4">BUSINESS</div>
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
            For <span className="italic">Companies</span>
          </h2>
          <p className="text-lg text-center md:text-left mb-12">
            Thousands of companies have embraced the new way to hire and upskill developers across roles and throughout
            their careers.
          </p>
          <Link to={'/companyLogin'} className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 mb-8">
            Login
          </Link>
          <div className="text-center">
            <p className="mb-2">Don't have an account?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <a href="#" className="text-green-500 hover:underline">
                Contact sales
              </a>
              <span className="hidden sm:inline">or</span>
              <a href="#" className="text-green-500 hover:underline">
                Get free trial
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - For Developers */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col items-center">
        <div className="bg-black text-white px-4 py-2 rounded-full mb-4">BUSINESS</div>
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
            For <span className="italic">Developers</span>
          </h2>
          <p className="text-lg text-center md:text-left mb-12">
            Join over million developers, practice coding skills, prepare for interviews, build resumes, automate your job serach with AI and get hired.
          </p>
          
          <Link to = {'/developerLogin'} className="border border-gray-300 text-black px-8 py-3 rounded hover:bg-gray-50 mb-8">
            Login
          </Link>
          <div className="text-center">
            <p className="mb-2">Don't have an account?</p>
            <a href="#" className="text-green-500 hover:underline">
              Sign up.
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default Home;