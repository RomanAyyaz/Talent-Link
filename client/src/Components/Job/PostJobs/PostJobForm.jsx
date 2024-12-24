import React from "react";
import { FaGreaterThan } from "react-icons/fa";

function PostJobForm() {
  return (
    <div className="w-full px-3 md:px-7 bg-bgcompanyProfile border">
      <div className="bg-bgwhite w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3 md:flex md:items-center justify-between">
        <h1 className="text-lg text-InstructorPrimary font-bold">Post Job</h1>
        <div>
          <p className="inline-block text-sm text-neutral-500">Jobs</p>
          <p className="inline-block font-medium text-sm text-neutral-500 mx-1.5">
            <FaGreaterThan size={10} />
          </p>
          <p className="inline-block font-medium text-sm text-InstructorPrimary">
            Post Job
          </p>
        </div>
      </div>
      {/* Post Job Form */}
      <div className='bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4'>
      </div>
    </div>
  );
}

export default PostJobForm;
