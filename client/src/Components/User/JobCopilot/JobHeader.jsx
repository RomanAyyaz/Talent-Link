import React from 'react';
import { Link } from 'react-router-dom';

export default function JobHeader() {
  return (
    <div className=" bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center max-w-3xl  mb-4">
      <div className="flex-1">
        <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-2 text-start">
          Meet JobCopilot: Your Personal AI Job Hunter
        </h2>
        <p className="text-gray-700 font-medium text-start">
          Automatically Apply to Remote{' '}
          <span className="font-semibold">Full-Stack Programming</span> Jobs
        </p>
        <p className="text-gray-600 mt-1 text-start">
          Just set your preferences and JobCopilot will do the rest—finding,
          filtering, and applying while you focus on what matters.
        </p>
      </div>
      <Link to = {'/jobCopilot'}>
      <button
        className="mt-4 md:mt-0 md:ml-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors"
      >
        Activate JobCopilot
      </button>
      </Link>
      
    </div>
  );
}
