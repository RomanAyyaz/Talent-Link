"use client"

import { useState } from "react"
import { FaRegUser, FaRegEnvelope, FaRegArrowAltCircleLeft, FaBell } from "react-icons/fa"
import { useCompanyStore } from "../../Store/CompanyStore"
import { useCompanyIdStore } from "../../Store/CompanyIdStore"
import { useQuery } from "@tanstack/react-query"
import { getNotifications } from "./CompanyApi"

function Navbar() {
  const [showProfile, setShowProfile] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const { company, setCompany } = useCompanyStore()
  const {companyId} = useCompanyIdStore()
 //Api Calling for getting all the resumes 
 const { data, isLoading, error } = useQuery({
  queryKey: ["notifications", companyId],
  queryFn: () => getNotifications(companyId),
});
if(isLoading) {
  <h1>Loading....</h1>
}
if(error) {
  <h2>error</h2>
}
//console.log('Notification data is ',data.notifications)
const Notifications = data?.notifications
console.log(Notifications)
  // Sample notifications data - you can replace this with your actual data
  const notifications = [
    { id: 1, user: "Martin", action: "has added a custom...", time: "3:20 am", icon: "user" },
    { id: 2, user: "Jennifer", action: "purchased Light Da...", time: "3:20 am", icon: "cart" },
    { id: 3, user: "Robin", action: "marked a ticket as un...", time: "3:20 am", icon: "bookmark" },
    { id: 4, user: "David", action: "purchased Light Dash...", time: "3:20 am", icon: "heart" },
    { id: 5, user: "James", action: "has added a custom...", time: "3:20 am", icon: "image" },
  ]

  // Function to get the appropriate icon for each notification
  const getNotificationIcon = (iconType) => {
    switch (iconType) {
      case "user":
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <FaRegUser className="text-green-500" />
          </div>
        )
      case "cart":
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <div className="text-blue-500">🛒</div>
          </div>
        )
      case "bookmark":
        return (
          <div className="bg-red-100 p-2 rounded-full">
            <div className="text-red-500">🔖</div>
          </div>
        )
      case "heart":
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <div className="text-blue-500">❤️</div>
          </div>
        )
      case "image":
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <div className="text-green-500">🖼️</div>
          </div>
        )
      default:
        return (
          <div className="bg-gray-100 p-2 rounded-full">
            <FaRegUser className="text-gray-500" />
          </div>
        )
    }
  }

  return (
    <>
      <div className="bg-bgwhite w-full h-12 md:h-14 flex items-center justify-between px-3 lg:px-8 shadow-sm">
        <div>
          <h1 className="font-extrabold">{company.companyName}</h1>
        </div>
        <div className="flex items-center">
          {/* Bell Notification Icon */}
          <div
            className="relative mr-4"
            onClick={() => {
              setShowNotifications(!showNotifications)
              if (showProfile) setShowProfile(false)
            }}
          >
            <div className="bg-indigo-100 p-2 rounded-full cursor-pointer">
              <FaBell className="text-indigo-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </div>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2.5 bg-bgwhite w-80 rounded-lg py-2 text-neutral-500 text-sm shadow-lg z-10">
                {Notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center py-3 px-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                  >
                    <div className="mr-3">{getNotificationIcon(notifications[0].icon)}</div>
                    <div className="flex-1">
                      <p className="text-gray-700">
                        <span className="font-medium">{notification.user}</span> {notification.message}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500">{notification.time}</div>
                  </div>
                ))}
                <div className="text-center py-3 text-indigo-500 hover:underline cursor-pointer">
                  See all notifications →
                </div>
              </div>
            )}
          </div>

          {/* Profile Section (Existing Code) */}
          <div
            className="relative"
            onClick={() => {
              setShowProfile(!showProfile)
              if (showNotifications) setShowNotifications(false)
            }}
          >
            <img
              src={`http://localhost:8000${company.companyLogo}`}
              alt="No Logo uploaded"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            {showProfile && (
              <div className="absolute duration-1000  right-0 mt-2.5 bg-bgwhite h-28 w-40 rounded-lg py-2 text-neutral-500 text-sm shadow-lg">
                <div className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 hover:text-InstructorPrimary w-full px-5">
                  <FaRegUser />
                  <h1 className="mx-2.5">Profile</h1>
                </div>
                <div className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 hover:text-InstructorPrimary w-full px-5">
                  <FaRegEnvelope />
                  <h1 className="mx-2.5">Inbox</h1>
                </div>
                <div className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 hover:text-InstructorPrimary w-full px-5">
                  <FaRegArrowAltCircleLeft />
                  <h1 className="mx-2.5">Logout</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

