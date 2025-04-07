import React, { useState } from "react";
import JobMain from "./JobMain";
import JobDetails from "./JobDetails";
import {
  Calendar,
  Users,
  Clock,
  Wallet,
  CalendarClock,
  GraduationCap,
  MapPin,
} from "lucide-react";
import Fotter from "../../Fotter/Fotter";
import JobApplicationModal from "../JobApplication/JobApplication";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDataOfJobApi, hasUserAppliedApi } from "../JobApis";
import { useUserStore } from "../../../../Store/UserStore";
function Main() {
  let { user } = useUserStore();
  let { id } = useParams();

  //Data of a specific job 
   const { data : jobData, Loading, error } = useQuery({
      queryKey: ["jobs", id],
      queryFn: () => getDataOfJobApi(id),
    });

  //Has user applied to that job 
  let { data, isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => hasUserAppliedApi({ userId: user._id, jobId: id }),
  });
  const tabs = [
    { id: "description", label: "Job Description", isActive: false },
    { id: "responsibilities", label: "Responsibilities", isActive: false },
    { id: "requirements", label: "Requirements", isActive: false },
    { id: "responsibilities", label: "Responsibilities", isActive: false },
    { id: "requirements", label: "Requirements", isActive: false },
  ];
  const jobDetails = [
    {
      icon: <Calendar className="w-5 h-5 text-green-500" />,
      label: "Date Posted",
      value: "10, July, 2023",
    },
    {
      icon: <Users className="w-5 h-5 text-green-500" />,
      label: "Vacancy",
      value: "5",
    },
    {
      icon: <Clock className="w-5 h-5 text-green-500" />,
      label: "Experience",
      value: "5 Years",
    },
    {
      icon: <Wallet className="w-5 h-5 text-green-500" />,
      label: "Offered Salary",
      value: "$2000-$3000",
    },
    {
      icon: <CalendarClock className="w-5 h-5 text-green-500" />,
      label: "Job Deadline",
      value: "01 July 2024",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-green-500" />,
      label: "Qualification",
      value: "Bachelor Degree",
    },
    {
      icon: <MapPin className="w-5 h-5 text-green-500" />,
      label: "Location",
      value: "New York, USA",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (isLoading) {
    <div>Data loading</div>;
  }
  const companyId = jobData.data.postedBy
  return (
    <div>
      <JobMain />
      <div className="border md:px-10 md:flex">
        {/* Left Section */}
        <div className="py-5 md:py-14 md:w-3/5">
          <JobDetails />
          {/* Job description */}
          <div className="text-start px-4 md:px-0">
            <h1 className="text-xl font-bold ">Job Description</h1>
            <p className="my-3 text-lg text-neutral-500 text-pretty">
              We are seeking a skilled Part-Time Software Engineer to join our
              team, specializing in social media content creation for lead
              generation purposes. The ideal candidate will have a creative
              flair, technical proficiency, and a strong understanding of social
              media trends and algorithms. Must be able to work Monday-Friday
              during EST business hours. This role will be under the ScaledOn
              brand, but will be working directly with one of our partners as
              their dedicated Software Engineer.
            </p>
          </div>
          {/* Job responsibity*/}
          <div className="text-start px-4 md:px-0 ">
            <h1 className="text-xl font-bold ">Responsibility</h1>
            <p className="my-3 text-lg text-neutral-500 text-pretty">
              We are seeking a skilled Part-Time Software Engineer to join our
              team, specializing in social media content creation for lead
              generation purposes. The ideal candidate will have a creative
              flair, technical proficiency, and a strong understanding of social
              media trends and algorithms. Must be able to work Monday-Friday
              during EST business hours. This role will be under the ScaledOn
              brand, but will be working directly with one of our partners as
              their dedicated Software Engineer.
            </p>
          </div>
          {/* Job requirements */}
          <div className="text-start px-4 md:px-0">
            <h1 className="text-xl font-bold ">Requirements</h1>
            <p className="my-3 text-lg text-neutral-500 text-pretty">
              We are seeking a skilled Part-Time Software Engineer to join our
              team, specializing in social media content creation for lead
              generation purposes. The ideal candidate will have a creative
              flair, technical proficiency, and a strong understanding of social
              media trends and algorithms. Must be able to work Monday-Friday
              during EST business hours. This role will be under the ScaledOn
              brand, but will be working directly with one of our partners as
              their dedicated Software Engineer.
            </p>
          </div>
          {/* Skills and experience */}
          <div className="text-start px-4 my-2 md:my-4 md:px-0 ">
            <h1 className="text-xl font-bold ">Skills and Experience</h1>
            <div className="flex flex-wrap gap-2 py-2 md:py-4 ">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-2 py-2 rounded-md transition-colors duration-200 ${
                    tab.isActive
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {/*Salary and benefits*/}
          <div className="text-start px-4 md:px-0">
            <h1 className="text-xl font-bold ">Salary and Benefits</h1>
            <p className="my-3 text-lg text-neutral-500 text-pretty">
              We are seeking a skilled Part-Time Software Engineer to join our
              team, specializing in social media content creation for lead
              generation purposes. The ideal candidate will have a creative
              flair, technical proficiency, and a strong understanding of social
              media trends and algorithms. Must be able to work Monday-Friday
              during EST business hours. This role will be under the ScaledOn
              brand, but will be working directly with one of our partners as
              their dedicated Software Engineer.
            </p>
          </div>
          {/* Apply to this job */}
          <div className="text-start px-4 md:px-0">
            {data.applied == true ? (
              <button
                disabled
                className="px-5 py-3 rounded-md cursor-pointer text-center text-white font-medium transition-colors bg-green-400 duration-300"
              >
                Already Applied
              </button>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-3 rounded-md text-center text-white font-medium transition-colors bg-green-500 hover:bg-green-600 duration-300"
              >
                Apply for This Position
              </button>
            )}
          </div>
        </div>
        {/* Right section */}
        <div className="py-5 md:py-14  md:w-2/6 md:ml-10">
          {/* Website link */}
          <div className="md:px-4">
            <div className="max-w-sm mx-auto p-8  rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="flex flex-col items-center space-y-6">
                {/* Logo */}
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="grid grid-cols-2 gap-1 w-12 h-12">
                    <div className="bg-red-500 rounded-sm"></div>
                    <div className="bg-green-500 rounded-sm"></div>
                    <div className="bg-blue-500 rounded-sm"></div>
                    <div className="bg-yellow-500 rounded-sm"></div>
                  </div>
                </div>

                {/* Company Name */}
                <h2 className="text-2xl font-semibold text-gray-900">
                  Google.com
                </h2>

                {/* Visit Website Link */}
                <a
                  href="#"
                  className="text-gray-900 hover:underline font-medium"
                >
                  Visit Website
                </a>

                {/* Apply Button */}
                {data.applied === true ? (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    disabled
                    className="w-full cursor-pointer bg-green-400 text-white py-4 px-6 rounded-xl transition-colors duration-200"
                  >
                    Already Applied
                  </button>
                ) : (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl transition-colors duration-200"
                  >
                    Apply for This Position
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Job overView */}
          <div className="px-4 py-3">
            <div className="bg-gray-50 rounded-xl p-6 max-w-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Job Overview
              </h2>

              <div className="space-y-6">
                {jobDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 pb-4 border-b border-gray-200 last:border-0"
                  >
                    <div className="flex-shrink-0 mt-1">{detail.icon}</div>
                    <div className="text-start flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">
                        {detail.label}
                      </h3>
                      <p className="text-gray-500">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Links */}
      {/* <OtherLinks /> */}
      {/* Footer */}
      <Fotter />
      <JobApplicationModal
        isOpen={isModalOpen}
        companyId = {companyId}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Main;
