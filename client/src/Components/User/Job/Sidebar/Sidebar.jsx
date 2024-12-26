import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronDown } from 'lucide-react';

export default function Sidebar() {
  const [jobType, setJobType] = useState({
    fullTime: false,
    partTime: false,
    temporary: false,
    freelance: false
  });

  const [experience, setExperience] = useState({
    fiveYear: false,
    fourYear: false,
    threeYear: false,
    fresher: false
  });

  const [salary, setSalary] = useState({
    under500: false,
    under10k: false,
    under15k: false
  });

  const locations = [
    "New York, USA",
    "London, UK",
    "Toronto, Canada",
    "Sydney, Australia"
  ];

  const categories = [
    "Technology",
    "Healthcare",
    "Education",
    "Finance"
  ];

  const datePostedOptions = [
    "Last 24 hours",
    "Last 7 days",
    "Last 30 days",
    "All time"
  ];

  return (
    <div className='w-full'>
     <aside className="text-start py-6 w-full rounded-md px-4  mt-4  min-h-screen bg-gradient-to-b from-[#FDF2EB] to-[#F1F1F1]">
      {/* Search By Job Title */}
      <div className="mb-6">
        <h2 className="text-lg font-normal mb-2">Search By Job Title</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Enter Type Of job"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
      </div>

      {/* Search Location */}
      <div className="mb-6">
        <h2 className="text-lg font-normal mb-2">Search Location</h2>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          <select className="w-full pl-10 pr-10 py-2 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
            <option value="">Search Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search By Job Category */}
      <div className="mb-6">
        <h2 className="text-lg font-normal mb-2">Search By Job Category</h2>
        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          <select className="w-full pl-10 pr-10 py-2 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
            <option value="">Choose a Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Date Posted */}
      <div className="mb-6">
        <h2 className="text-lg font-normal mb-2">Date Posted</h2>
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          <select className="w-full pl-10 pr-10 py-2 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
            <option value="">Date Posted</option>
            {datePostedOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Job Type */}
      <div className="mb-6">
        <h2 className="text-lg font-normal mb-2">Job Type</h2>
        <div className="space-y-3">
          {[
            { label: 'Full Time', count: 130 },
            { label: 'Part Time', count: 80 },
            { label: 'Temporary', count: 150 },
            { label: 'Freelance', count: 130 }
          ].map((type) => (
            <label key={type.label} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={jobType[type.label.toLowerCase().replace(' ', '')]}
                  onChange={() => setJobType(prev => ({
                    ...prev,
                    [type.label.toLowerCase().replace(' ', '')]: !prev[type.label.toLowerCase().replace(' ', '')]
                  }))}
                />
                <span className="ml-2 text-gray-700">{type.label}</span>
              </div>
              <span className="text-gray-500">({type.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Label */}
      <div className="mb-6">
        <h2 className="text-lg font-normal mb-2">Experience Level</h2>
        <div className="space-y-3">
          {[
            { label: '5 Year', count: 10 },
            { label: '4 Year', count: 15 },
            { label: '3 Year', count: 50 },
            { label: 'Fresher', count: 130 }
          ].map((exp) => (
            <label key={exp.label} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={experience[exp.label.toLowerCase().replace(' ', '').replace('year', 'Year')]}
                  onChange={() => setExperience(prev => ({
                    ...prev,
                    [exp.label.toLowerCase().replace(' ', '').replace('year', 'Year')]: !prev[exp.label.toLowerCase().replace(' ', '').replace('year', 'Year')]
                  }))}
                />
                <span className="ml-2 text-gray-700">{exp.label}</span>
              </div>
              <span className="text-gray-500">({exp.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Salary Offered */}
      <div className="mb-6">
        <h2 className="text-lg font-normal mb-2">Salary Offered</h2>
        <div className="space-y-3">
          {[
            { label: 'Under $500', count: 10 },
            { label: '$5,000 - $10,000', count: 44 },
            { label: '$10,000 - $15,000', count: 27 }
          ].map((salary) => (
            <label key={salary.label} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={salary[salary.label.toLowerCase().replace('$', '').replace(',', '').replace(' - ', 'to')]}
                  onChange={() => setSalary(prev => ({
                    ...prev,
                    [salary.label.toLowerCase().replace('$', '').replace(',', '').replace(' - ', 'to')]: !prev[salary.label.toLowerCase().replace('$', '').replace(',', '').replace(' - ', 'to')]
                  }))}
                />
                <span className="ml-2 text-gray-700">{salary.label}</span>
              </div>
              <span className="text-gray-500">({salary.count})</span>
            </label>
          ))}
        </div>
      </div>
      {/* Find job */}
      {/* <div className='mb-6 flex justify-center items-center'>
        <button type='button' className='border border-green-600 px-2 py-1'>Find Job</button>
      </div> */}
    </aside>
    </div>
  );
}

