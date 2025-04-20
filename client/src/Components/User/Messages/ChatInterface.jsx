"use client"

import { useState } from "react"
import { useUserStore } from "../../../Store/UserStore";
import { useQuery } from "@tanstack/react-query";
import { getMessageOfCompanies } from "./MessageApi";
import { Link } from "react-router-dom";

const ChatInterface = () => {
    const { user} = useUserStore();
      //Api Calling for getting all the resumes 
      const { data, isLoading, error } = useQuery({
        queryKey: ["messages",user._id],
        queryFn: () => getMessageOfCompanies(user._id),
      });
      if(isLoading) {
        <h1>Loading....</h1>
      }
      if(error) {
        <h2>error</h2>
      }
    const messageData = data || []
    console.log(messageData)
   const [selectedCompany, setSelectedCompany] = useState(null)

  // Function to render company logo or initials
  const renderCompanyLogo = (logo, name) => {
    if (logo) {
      return (
        <img
          src={logo || "/placeholder.svg"}
          alt={`${name} logo`}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
      )
    }

    // If no logo, create initials avatar
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase()

    // Generate a deterministic color based on the company name
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
    ]

    const colorIndex = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
    const bgColor = colors[colorIndex]

    return (
      <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center flex-shrink-0`}>
        <span className="text-white text-sm font-medium">{initials}</span>
      </div>
    )
  }

  // Function to render unread badge
  const renderUnreadBadge = (count) => {
    if (count > 0) {
      return (
        <div className="flex-shrink-0 ml-1">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-xs font-medium text-white">
            {count}
          </span>
        </div>
      )
    }
    return null
  }

  return (
    <div className="h-full overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="divide-y divide-gray-200 border border-red-900">
        {messageData.map((message) => (
            <Link to={`/UserDashboard/userMessage/${message.companyId}`}>
                <div
            key={message.id}
            className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
              selectedCompany === message.id ? "bg-blue-50" : ""
            }`}
            onClick={() => setSelectedCompany(message.id)}
          >
            <div className="flex items-start space-x-3">
              {renderCompanyLogo(message.logo, message.companyName)}

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">{message.companyName}</h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">"10m ago"</span>
                </div>

                <p className="text-sm text-gray-600 truncate mt-1">"We would like to schedule an interview for the Senior Developer position."</p>
              </div>

              {renderUnreadBadge(3)}
            </div>
          </div>
        </Link>
          
        ))}
      </div>
    </div>
  )
}

export default ChatInterface
