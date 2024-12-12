import React from 'react';

const CourseDetails = ({ courseData }) => {
    console.log('data',courseData)
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Course Name</p>
          <p className="font-medium">{courseData.title}</p>
        </div>
        <div>
          <p className="text-gray-600">Instructor</p>
          <p className="font-medium">{courseData.instructor}</p>
        </div>
        <div>
          <p className="text-gray-600">Total Lectures</p>
          <p className="font-medium">{courseData.duration}</p>
        </div>
        <div>
          <p className="text-gray-600">Duration</p>
          <p className="font-medium">{courseData.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

