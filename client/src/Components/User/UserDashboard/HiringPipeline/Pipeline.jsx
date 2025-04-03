"use client";

import { useState } from "react";
import {
  User,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  FileText,
  Globe,
  Linkedin,
  Github,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../../../../Store/UserStore";
import { getJobCandidatesData } from "../../../Job/JobApis";

export function Pipeline() {
  const [activeTab, setActiveTab] = useState("pipeline");
  const [showFeedback, setShowFeedback] = useState(null)
   const { user} = useUserStore();
  // Destructure the params from the URL
  const { jobId } = useParams();
    //let candidateId = user._id
    const { data, isLoading, error } = useQuery({
      queryKey: ["jobApplication", jobId],
      queryFn: () => getJobCandidatesData({ candidateId : user._id, jobId }),
    })
    console.log('dd',data)
  const candidateJobData = data?.data || []
  const candidateData = candidateJobData[0]?.userId
  console.log('cc',candidateJobData)
  //Dummy data for candidate
  const candidate = {
    name: "Alexandra Morrison",
    profession: "Senior Backend Developer",
    location: "San Francisco, CA",
    email: "alex.morrison@example.com",
    phone: "(555) 123-4567",
    experience: "8+ years",
    availability: "2 weeks notice",
    bio: "Passionate frontend developer with expertise in React, Vue, and Angular. I specialize in creating responsive, accessible, and performant web applications with a focus on user experience.",
    photo:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS/SCSS",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Design",
      "Performance Optimization",
      "Accessibility",
    ],
    links: {
      resume: "#resume",
      portfolio: "#portfolio",
      linkedin: "#linkedin",
      github: "#github",
    },
  };
  if(isLoading) {
    <h1>Loading....</h1>
  }
  if(error) {
    <h2>error</h2>
  }
  const pipelineStages = candidateJobData[0]?.pipelineStages || [];
  console.log('pp',pipelineStages)


  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "upcoming":
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "upcoming":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return status;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-32 md:h-48"></div>
        <div className="px-4 sm:px-6 lg:px-8 pb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="-mt-16 md:-mt-24 flex-shrink-0">
              <img
                className="h-24 w-24 md:h-40 md:w-40 rounded-full border-4 border-white object-cover"
                src={candidate.photo || "/placeholder.svg"}
                alt={candidate.name}
              />
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {candidateData?.fullname}
                  </h1>
                  <p className="text-lg text-indigo-600">
                    {candidate.profession}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                  <a
                    href={candidate.links.resume}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Resume
                  </a>
                  <a
                    href={candidate.websiteLink}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Portfolio
                  </a>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1.5 text-gray-400" />
                  {candidate.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="h-4 w-4 mr-1.5 text-gray-400" />
                  {candidateData?.email}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="h-4 w-4 mr-1.5 text-gray-400" />
                  {candidate.phone}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Briefcase className="h-4 w-4 mr-1.5 text-gray-400" />
                  {candidateData?.experience}+ years Experience
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1.5 text-gray-400" />
                  Available in {candidate.availability}
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a href={candidateData?.linkedInLink} className="text-gray-400 hover:text-indigo-600">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={candidate.githubLink}
                  className="text-gray-400 hover:text-indigo-600"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`${
                activeTab === "pipeline"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Hiring Pipeline
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`${
                activeTab === "profile"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Profile Details
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {activeTab === "pipeline" && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Hiring Pipeline
            </h2>

            {/* Pipeline Visualization */}
            <div className="relative">
              {/* Pipeline Steps */}
              <div className="hidden sm:block absolute left-1/2 inset-y-0 -translate-x-1/2 w-0.5 bg-gray-200 z-0"></div>

              <div className="space-y-8">
                {pipelineStages.map((stage, index) => (
                  <div key={stage.id} className="relative z-10">
                    <div className="flex items-start sm:items-center">
                      <div className="hidden sm:flex flex-col items-center">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            stage.status === "completed"
                              ? "bg-green-100"
                              : stage.status === "in-progress"
                                ? "bg-blue-100"
                                : "bg-gray-100"
                          }`}
                        >
                          {getStatusIcon(stage.status)}
                        </div>
                        {index < pipelineStages.length - 1 && <div className="w-0.5 h-16 bg-gray-200"></div>}
                      </div>

                      <div className="sm:ml-6 flex-1">
                        <div className="bg-white border rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <div className="flex items-center">
                              <div className="sm:hidden mr-3">{getStatusIcon(stage.status)}</div>
                              <h3 className="text-lg font-medium text-gray-900">{stage.name}</h3>
                            </div>
                            <div className="mt-2 sm:mt-0 flex items-center">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(stage.status)}`}
                              >
                                {getStatusText(stage.status)}
                              </span>
                              <span className="ml-4 text-sm text-gray-500">  {new Date(stage.date).toISOString().split("T")[0]}</span>
                            </div>
                          </div>

                          <div className="mt-2 flex justify-between items-center">
                            <div className="text-sm text-gray-500">Interviewer: {stage.interviewer}</div>
                            <button
                              onClick={() => setShowFeedback(showFeedback === stage.id ? null : stage.id)}
                              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {showFeedback === stage.id ? "Hide Feedback" : "View Feedback"}
                              <MessageSquare className="ml-1 h-4 w-4" />
                            </button>
                          </div>

                          {showFeedback === stage.id && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-md">
                              <p className="text-sm text-gray-700">{stage.feedback}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Profile Details
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    About
                  </h3>
                  <p className="text-gray-700">{candidate.bio}</p>

                  <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Candidate Summary
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Current Stage
                      </h4>
                      <p className="mt-1 text-sm text-gray-900">
                        Team Interview
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Application Date
                      </h4>
                      <p className="mt-1 text-sm text-gray-900">May 10, 2023</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Source
                      </h4>
                      <p className="mt-1 text-sm text-gray-900">
                        Employee Referral
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Salary Expectation
                      </h4>
                      <p className="mt-1 text-sm text-gray-900">
                        $120,000 - $140,000
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Potential Start Date
                      </h4>
                      <p className="mt-1 text-sm text-gray-900">July 1, 2023</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Pipeline;
