"use client"

import { useState, useEffect } from "react"
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CubeIcon,
  KeyIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import { useDarkModeStore } from "../../Store/DarkModeStore"

export default function Sidebar() {
  const { mode } = useDarkModeStore()
  const [isExpanded, setIsExpanded] = useState(true)
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, to: "/dashboardCompany/dashboard" },
    { name: "Edit Profile", icon: UserIcon, to: "/dashboardCompany/profile" },
    {
      name: "Job",
      icon: BriefcaseIcon,
      subItems: [
        { name: "Post Job", to: "/dashboardCompany/postJob" },
        { name: "My Job", to: "/dashboardCompany/myJob" },
        { name: "About Job", to: "#" },
      ],
    },
    {
      name: "Courses",
      icon: AcademicCapIcon,
      subItems: [
        { name: "All Courses", to: "/dashboardCompany/all-courses" },
        { name: "Add Courses", to: "/dashboardCompany/add-course" },
        { name: "About Courses", to: "#" },
      ],
    },
    { name: "Candidate Shortlist", icon: UserGroupIcon, to: "/dashboardCompany/candidateShortlist" },
    { name: "Package", icon: CubeIcon, to: "/dashboardCompany/package" },
    { name: "Change Password", icon: KeyIcon, to: "/dashboardCompany/changePassword" },
    { name: "Delete Profile", icon: TrashIcon, to: "/dashboardCompany/deleteProfile" },
  ]

  const handleExpandClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Mobile menu button that appears at the top of the page
  const MobileMenuButton = () => (
    <button
      onClick={toggleMobileMenu}
      className="fixed top-2 left-4 z-50 md:hidden bg-white  dark:bg-gray-800 p-1.5 rounded-md shadow-md"
      aria-label="Toggle menu"
    >
      {isMobileMenuOpen ? (
        <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-white" />
      ) : (
        <Bars3Icon className="w-6 h-6 text-gray-600 dark:text-white " />
      )}
    </button>
  )

  // Render the sidebar content
  const SidebarContent = () => (
    <div className="pt-3">
      <p
        className={`${mode === "light" ? "text-gray-400" : "text-white"} text-sm mb-4 ${!isExpanded && !isMobile && "hidden"}`}
      >
        MAIN MENU
      </p>

      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.subItems ? (
              <div>
                <button
                  onClick={() => handleExpandClick(index)}
                  className={`flex items-center gap-4 w-full rounded-lg p-2 group
                    ${mode === "light" ? "text-gray-600 hover:bg-indigo-50" : "text-white hover:text-indigo-600"}`}
                  aria-expanded={expandedIndex === index}
                  aria-controls={`${item.name}-submenu`}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span className={`duration-300 flex-1 text-left ${!isExpanded && !isMobile && "hidden"}`}>
                    {item.name}
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 
                      ${expandedIndex === index ? "transform rotate-180" : ""} 
                      ${!isExpanded && !isMobile && "hidden"}`}
                  />
                  {!isExpanded && !isMobile && (
                    <div
                      className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm 
                      invisible opacity-20 -translate-x-3 transition-all 
                      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
                    >
                      {item.name}
                    </div>
                  )}
                </button>
                <ul
                  id={`${item.name}-submenu`}
                  className={`mt-2 ml-6 space-y-2 
                    ${!isExpanded && !isMobile && "hidden"} 
                    ${expandedIndex === index ? "" : "hidden"}`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.to}
                        className={`flex items-center text-sm
                          ${mode === "dark" ? "text-white" : "text-gray-600"} 
                          hover:text-indigo-600`}
                        onClick={isMobile ? toggleMobileMenu : undefined}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : item.to ? (
              <Link
                to={item.to}
                className={`flex items-center gap-4 rounded-lg p-2 group
                    ${mode === "light" ? "text-gray-600 hover:bg-indigo-50" : "text-white hover:text-indigo-600"}`}
                onClick={isMobile ? toggleMobileMenu : undefined}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className={`duration-300 ${!isExpanded && !isMobile && "hidden"}`}>{item.name}</span>
                {!isExpanded && !isMobile && (
                  <div
                    className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm 
                      invisible opacity-20 -translate-x-3 transition-all 
                      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    {item.name}
                  </div>
                )}
              </Link>
            ) : (
              <p
                className={`flex items-center gap-4 rounded-lg p-2 group
                    ${mode === "light" ? "text-gray-600 hover:bg-indigo-50" : "text-white hover:text-indigo-600"}`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className={`duration-300 ${!isExpanded && !isMobile && "hidden"}`}>{item.name}</span>
                {!isExpanded && !isMobile && (
                  <div
                    className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm 
                      invisible opacity-20 -translate-x-3 transition-all 
                      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    {item.name}
                  </div>
                )}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )

  // For mobile: render a full-screen overlay sidebar
  if (isMobile) {
    return (
      <>
        <MobileMenuButton />

        {/* Mobile sidebar overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden
            ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={toggleMobileMenu}
        />

        {/* Mobile sidebar */}
        <div
          className={`fixed top-0 left-0 h-full z-50 md:hidden overflow-y-auto
            ${mode === "light" ? "bg-white" : "bg-dark"} 
            w-[85%] max-w-[300px] shadow-xl transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <p className={`${mode === "light" ? "text-gray-700" : "text-white"} font-medium`}>Menu</p>
            <button onClick={toggleMobileMenu} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-white" />
            </button>
          </div>
          <div className="p-4">
            <SidebarContent />
          </div>
        </div>
      </>
    )
  }

  // For desktop/tablet: render the original sidebar with collapse functionality
  return (
    <div
      className={`${mode === "light" ? "bg-bgsidebar" : "bg-dark"} h-screen p-4 
        ${isExpanded ? "w-60" : "w-20"} duration-300 relative shadow-lg hidden md:block`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-12 bg-white rounded-full p-1.5 border shadow-md"
        aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isExpanded ? <ChevronLeftIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />}
      </button>

      <SidebarContent />
    </div>
  )
}
