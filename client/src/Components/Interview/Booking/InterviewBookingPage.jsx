"use client"

import { useState } from "react"
import { CalendarIcon, UserIcon, LightBulbIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import WhyChooseUs from "./WhyChooseUs"
import HowItWorks from "./HowItWorks"
import Testimonials from "./Testimonials"

const InterviewBookingPage = () => {
  const [interviewType, setInterviewType] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [customPrompt, setCustomPrompt] = useState("")
  const [isBooked, setIsBooked] = useState(false)

  const handleBooking = (e) => {
    e.preventDefault()
   
    setIsBooked(true)
  }

  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Book Your Interview with Talent Link</h1>

          {!isBooked ? (
            <form onSubmit={handleBooking} className="space-y-8 bg-white shadow-lg rounded-lg p-6">
              {/* Interview Type Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Select Interview Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Technical Interview", "HR Interview"].map((type) => (
                    <div
                      key={type}
                      className={`border rounded-lg p-4 cursor-pointer transition duration-300 ease-in-out ${
                        interviewType === type
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                      onClick={() => setInterviewType(type)}
                    >
                      <div className="flex items-center space-x-3">
                        {type === "Technical Interview" ? (
                          <LightBulbIcon className="h-6 w-6  text-HeroButtonOne " />
                        ) : (
                          <UserIcon className="h-6 w-6  text-HeroButtonOne" />
                        )}
                        <h3 className="font-medium">{type}</h3>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        {type === "Technical Interview"
                          ? "Assess your technical skills and problem-solving abilities."
                          : "Discuss your background, experience, and cultural fit."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date and Time Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Select Date and Time</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        required
                      />
                      <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-3 top-3" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      required
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Custom Prompt Input */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Interview Expectations</h2>
                <textarea
                  id="customPrompt"
                  name="customPrompt"
                  rows="4"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Describe your expectations for the interview (e.g., specific skills to be tested, topics to cover)"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              {/* Booking Confirmation */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  Book Interview
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Interview Booked Successfully!</h2>
              <p className="text-gray-600">
                We've sent a confirmation email with all the details. Looking forward to meeting you!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* New sections */}
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </div>
  )
}

export default InterviewBookingPage

