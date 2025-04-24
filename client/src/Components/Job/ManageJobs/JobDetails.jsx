import React from 'react';
import { useDarkModeStore } from '../../../Store/DarkModeStore';

const JobDetails = ({ jobData }) => {
    const { mode } = useDarkModeStore();
  return (
    <div className={` shadow-lg rounded-lg p-6 ${mode === 'light'?'bg-white' :'bg-dark text-white'}`}>
      <h2 className="text-2xl font-semibold mb-4">Job Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className={`${mode === 'light' ?'text-gray-600':'text-white'}`}> Name</p>
          <p className="font-medium">{jobData.jobTitle}</p>
        </div>
        <div>
          <p className={`${mode === 'light' ?'text-gray-600':'text-white'}`}>Type</p>
          <p className="font-medium">{jobData.employmentType
          }</p>
        </div>
        <div>
          <p className={`${mode === 'light' ?'text-gray-600':'text-white'}`}>Location</p>
          <p className="font-medium">{jobData.location}</p>
        </div>
        <div>
          <p className={`${mode === 'light' ?'text-gray-600':'text-white'}`}>Posted</p>
          <p className="font-medium">{}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

