import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { FaGreaterThan } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { getAllJobsApi } from '../JobApis';
import MyJobList from './MyJobList';
import { useDarkModeStore } from '../../../Store/DarkModeStore';

function MyJob() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const { mode } = useDarkModeStore();

  const categories = [
    'All Category',
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Retail',
    'Manufacturing',
  ];

  const { data, isLoading, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: getAllJobsApi,
  });

  if (isLoading) return <div>Data Loading...</div>;
  if (error)    return <div>Error in loading jobs data</div>;

  const jobData = data ? data.jobData : [];

  /* ── Dark-mode helpers ─────────────────────────────────────────────── */
  const outerClass = `
    w-full px-3 md:px-7 border
    ${mode === 'light' ? 'bg-bgcompanyProfile' : 'bg-darkk'}
  `.trim();

  const headerCardClass = `
    ${mode === 'light' ? 'bg-bgwhite' : 'bg-dark'}
    w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3
    md:flex md:items-center justify-between
  `.trim();

  const searchInputClass = `
    w-full pl-10 pr-4 py-2 rounded-lg border
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
    ${mode === 'dark'
      ? 'bg-dark text-gray-300 border-gray-600 placeholder-gray-400'
      : 'border-gray-200'}
  `.trim();

  const dropdownBtnClass = `
    w-full sm:w-auto px-4 py-2 rounded-lg flex items-center justify-between gap-2
    hover:bg-gray-200 transition-colors
    ${mode === 'dark' ? 'bg-dark text-gray-300 hover:bg-gray-700' : 'bg-white'}
  `.trim();

  const dropdownMenuClass = `
    absolute right-0 mt-2 w-full sm:w-48 rounded-lg shadow-lg border py-1 z-10
    ${mode === 'dark'
      ? 'bg-dark border-gray-600'
      : 'bg-white border-gray-200'}
  `.trim();

  const dropdownItemClass = `
    w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors
    ${mode === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'}
  `.trim();
  /* ─────────────────────────────────────────────────────────────────── */

  return (
    <div className={outerClass}>
      {/* breadcrumb / title */}
      <div className={headerCardClass}>
        <h1 className="text-lg text-InstructorPrimary font-bold">All Job</h1>
        <div>
          <p className="inline-block text-sm text-neutral-500">Job</p>
          <p className="inline-block font-medium text-sm text-neutral-500 mx-1.5">
            <FaGreaterThan size={10} />
          </p>
          <p className="inline-block font-medium text-sm text-InstructorPrimary">
            My Jobs
          </p>
        </div>
      </div>

      {/* search bar */}
      <div className="w-full max-w-6xl mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Find Top Employer"
              className={searchInputClass}
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={dropdownBtnClass}
            >
              <span>{selectedCategory}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className={dropdownMenuClass}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsOpen(false);
                    }}
                    className={dropdownItemClass}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* job list */}
      <div>
        {jobData &&
          jobData.map((job, index) => <MyJobList job={job} key={index} />)}
      </div>
    </div>
  );
}

export default MyJob;
