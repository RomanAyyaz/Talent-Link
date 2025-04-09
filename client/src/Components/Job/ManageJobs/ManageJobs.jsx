"use client"

import { useState } from "react"
import Header from "./Header"
import JobDetails from "./JobDetails"
import { getJobData } from "../JobApis"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import CandidateList from "../CandidateList/CandidateList"
import TopQuizPerformer from "../../QuizTest/TopQuizPerformer"

function ManageJobs() {
  const { id } = useParams()
  const [activeView, setActiveView] = useState("candidates") // "candidates" or "performers"

  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs", id],
    queryFn: () => getJobData(id),
  })

  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h2>Error loading job data</h2>

  const jobData = data?.data || []

  const toggleView = () => {
    setActiveView(activeView === "candidates" ? "performers" : "candidates")
  }

  return (
    <div className="bg-bgcompanyProfile container mx-auto px-3 md:px-8 border">
      <Header />

      <div className="mt-8">
        <JobDetails jobData={jobData} />
      </div>

      <div className="flex justify-center mt-8 mb-6">
        {/* Simplified Toggle Switch */}
        <div className="relative w-64 h-12 rounded-full p-1 cursor-pointer bg-gray-200 shadow-md" onClick={toggleView}>
          {/* Sliding Background */}
          <div
            className={`absolute top-1 h-10 w-[49%] rounded-full bg-blue-500 transform transition-transform duration-300 ease-in-out ${
              activeView === "candidates" ? "left-1" : "left-[50%]"
            }`}
          ></div>

          {/* Text Options */}
          <div className="relative flex items-center justify-between w-full h-full px-2 z-10">
            <div
              className={`flex items-center justify-center w-1/2 transition-colors duration-300 ${
                activeView === "candidates" ? "text-white font-medium" : "text-gray-600"
              }`}
            >
              Candidates
            </div>
            <div
              className={`flex items-center justify-center w-1/2 transition-colors duration-300 ${
                activeView === "performers" ? "text-white font-medium" : "text-gray-600"
              }`}
            >
              Top Performers
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">{activeView === "candidates" ? <CandidateList /> : <TopQuizPerformer />}</div>
    </div>
  )
}

export default ManageJobs
