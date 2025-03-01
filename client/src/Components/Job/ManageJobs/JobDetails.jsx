import React from 'react';

const JobDetails = ({ jobData }) => {
  console.log('jj',jobData)
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Job Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600"> Name</p>
          <p className="font-medium">{jobData.jobTitle}</p>
        </div>
        <div>
          <p className="text-gray-600">Type</p>
          <p className="font-medium">{jobData.employmentType
          }</p>
        </div>
        <div>
          <p className="text-gray-600">Location</p>
          <p className="font-medium">{jobData.location}</p>
        </div>
        <div>
          <p className="text-gray-600">Posted</p>
          <p className="font-medium">{}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

