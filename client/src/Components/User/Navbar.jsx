import React, { useState } from 'react'
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Youtube, Search } from 'lucide-react'
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaInstagram,
//   FaTwitter,
// } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserStore } from '../../Store/UserStore';


const UserDropdown = ({ isOpen, setIsOpen , user }) => (
  
  <div className="relative">
    
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center focus:outline-none"
    >
      <img
       src={`http://localhost:8000${user.imageUrl}`}
        alt="User"
        className="h-10 w-10 rounded-full"
      />
    </button>
    {isOpen && (
      <div className="absolute z-50 text-start right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
         <Link to="/UserDashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
        <Link to="/UserProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
        <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
      </div>
    )}
  </div>
);

export default function TextNavbar() { 
   const { user} = useUserStore();
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navigation = [
    { name: 'HOME',to: '/landingpage'  },
    { name: 'NEWS',to: '/landingpage'  },
    { name: 'INTERVIEW', to: '/interviewPreparation', },
    { name: 'COURSES', to:'/courses' },
    { name: 'JOBS', to: '/jobs' },
    { name: 'RESUME', to: '/ResumeBuilder' },
    { name: 'CONTACT', to: '/contact' }
  ]

  const socialLinks = [
    { Icon: Facebook, href:'#'},
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Youtube, href: '#' }
  ]

  return (
    <nav className="bg-white shadow-sm border border-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <p  className="text-2xl font-bold">
              Talent-Link
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="hover:text-HeroButtonOne px-3 py-2 text-sm font-bold flex items-center"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="ml-1 h-4 w-4 text-HeroButtonOne" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            
            <UserDropdown isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen} user = {user}/>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-between px-5">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">
                PURCHASE
              </button>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
                <button className="text-gray-600 hover:text-gray-900">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

