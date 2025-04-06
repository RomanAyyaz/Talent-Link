import React, { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../Navbar";
import { getAllJobsApi, jobAlertApi } from "./JobApis";
import { useMutation, useQuery } from "@tanstack/react-query";
import AllJobslist from "./AllJobs/AllJobslist";
import { ChevronDown } from 'lucide-react';
import Fotter from "../Fotter/Fotter";
import { useUserStore } from "../../../Store/UserStore";

export default function Jobs() {
    const { user} = useUserStore();
    const [frequency, setFrequency] = useState('Daily');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [type , setType] = useState('')
    const frequencies = ['Daily', 'Weekly', 'Bi-Weekly', 'Monthly'];

    const jobAlertData = {
      jobType : type ,
      frequency : frequency,
      email : user.email
    }
    const jobAlertMutation = useMutation({
      mutationFn: jobAlertApi,
      onSuccess:()=>{
        console.log('Job Alert has been added successfully')
        setType('')
        setFrequency('dialy')
      },
      onError:()=>{
        console.log('There is some error in adding job alert ')
      }
    })
    const handleSave = () => {
     
      jobAlertMutation.mutate(jobAlertData)
    };
  const [jobType, setJobType] = useState({
    fulltime: false,
    parttime: false,
    temporary: false,
    freelance: false,
  });

  const [salary, setSalary] = useState({
    under500: false,
    under10k: false,
    under15k: false,
  });

  // New state for search queries
  const [searchTitle, setSearchTitle] = useState("");
  const [searchExperience, setSearchExperience] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  // Fetch jobs using react-query
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: getAllJobsApi,
  });

  if (isLoading) {
    return <div>Data Loading...</div>;
  }
  if (error) {
    return <div>Error in loading jobs data</div>;
  }

  const jobData = data ? data.jobData : [];

  // Mapping for job types to match the employmentType field in the database
  const jobTypeMapping = {
    fulltime: "Full Time",
    parttime: "Part Time",
    temporary: "Temporary",
    freelance: "Freelance",
  };

  // Get an array of selected job types
  const selectedJobTypes = Object.keys(jobType).filter((key) => jobType[key]);

  // Filter jobs based on job title, experience, and job type
  const filteredJobs = jobData.filter((job) => {
    const matchesTitle = job.jobTitle
      .toLowerCase()
      .includes(searchTitle.toLowerCase());
    const matchesExperience = job.experience
      .toLowerCase()
      .includes(searchExperience.toLowerCase());
    const matchesLocation = job.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase());
    const matchesJobType =
      selectedJobTypes.length === 0 ||
      selectedJobTypes.some(
        (key) => job.employmentType === jobTypeMapping[key]
      );
    return (
      matchesTitle && matchesExperience && matchesJobType && matchesLocation
    );
  });

  return (
    <div>
      <Navbar />
      <div className="flex w-full flex-col md:flex-row my-14">
        {/* Sidebar */}
        <div className="px-6 md:px-10 w-full md:w-2/6">
          <aside className="text-start py-6 w-full rounded-md px-4 mt-4 min-h-screen bg-gradient-to-b from-[#FDF2EB] to-[#F1F1F1]">
            {/* Search By Job Title */}
            <div className="mb-6">
              <h2 className="text-lg font-normal mb-2">Search By Job Title</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter Type Of job"
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>

            {/* Search By Experience */}
            <div className="mb-6">
              <h2 className="text-lg font-normal mb-2">Search By Experience</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter Experience"
                  value={searchExperience}
                  onChange={(e) => setSearchExperience(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>

            {/* Search By Location */}
            <div className="mb-6">
              <h2 className="text-lg font-normal mb-2">Search By Location</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter Location"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>

            {/* Job Type */}
            <div className="mb-6">
              <h2 className="text-lg font-normal mb-2">Job Type</h2>
              <div className="space-y-3">
                {[
                  { label: "Full Time", count: 130 },
                  { label: "Part Time", count: 80 },
                  { label: "Temporary", count: 150 },
                  { label: "Freelance", count: 130 },
                ].map((type) => {
                  const key = type.label.toLowerCase().replace(" ", "");
                  return (
                    <label
                      key={type.label}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={jobType[key]}
                          onChange={() =>
                            setJobType((prev) => ({
                              ...prev,
                              [key]: !prev[key],
                            }))
                          }
                        />
                        <span className="ml-2 text-gray-700">{type.label}</span>
                      </div>
                      <span className="text-gray-500">({type.count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Salary Offered */}
            <div className="mb-6">
              <h2 className="text-lg font-normal mb-2">Salary Offered</h2>
              <div className="space-y-3">
                {[
                  { label: "Under $500", count: 10 },
                  { label: "$5,000 - $10,000", count: 44 },
                  { label: "$10,000 - $15,000", count: 27 },
                ].map((sal) => {
                  const key = sal.label
                    .toLowerCase()
                    .replace("$", "")
                    .replace(",", "")
                    .replace(" - ", "to");
                  return (
                    <label
                      key={sal.label}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={salary[key]}
                          onChange={() =>
                            setSalary((prev) => ({
                              ...prev,
                              [key]: !prev[key],
                            }))
                          }
                        />
                        <span className="ml-2 text-gray-700">{sal.label}</span>
                      </div>
                      <span className="text-gray-500">({sal.count})</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="max-w-md mt-4 mx-auto bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-md shadow-sm">
      <h2 className=" text-start text-xl font-bold mb-6">Job Alert</h2>
      
      {/* Job Type Input */}
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Enter Type Of job"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full py-4 pl-10 pr-4 bg-white border-0 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-600"
          />
        </div>
      </div>
      
      {/* Email Frequency */}
      <div className="mb-8">
        <label className="block text-start text-xl font-bold mb-4">
          Email Frequency
        </label>
        <div className="relative">
          <button
            type="button"
            className="w-full flex items-center justify-between py-4 px-4 bg-white border-0 rounded-xl text-gray-600"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{frequency}</span>
            <ChevronDown size={20} className="text-gray-400" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg">
              {frequencies.map((option) => (
                <div
                  key={option}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setFrequency(option);
                    setIsDropdownOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors"
      >
        Save Job Alert
      </button>
    </div>
        </div>


   

        {/* Jobs List */}
        <div className="flex gap-4 flex-wrap px-6 mt-4 w-full md:w-3/5 ">
          {filteredJobs && filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="w-full md:w-1/2">
                <AllJobslist job={job} />
              </div>
            ))
          ) : (
            <div>No Jobs Found</div>
          )}
        </div>

      </div>
      {/* <div className="mt-3">
        <OtherLinks />
      </div> */}

      <div className="">
        <Fotter />
      </div>
    </div>
  );
}
