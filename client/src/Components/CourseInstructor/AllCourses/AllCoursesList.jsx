import { Heart, GraduationCap } from 'lucide-react';
import {Link} from 'react-router-dom'
export default function AllCoursesList({ courses }) {
  return (
    <div className=" bg-white rounded-lg overflow-hidden shadow-md text-start">
      {/* Card Image */}
      <div className="relative h-56">
        <img
          src={`http://localhost:8000${courses.imageUrl}`}
          alt={courses.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">
          {courses.title}
        </h2>

        {/* Date and Likes */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <p className="text-gray-600">April 23</p>
          <div className="flex items-center gap-1 text-gray-400">
            <Heart className="w-5 h-5" />
            <span>450</span>
          </div>
        </div>

        {/* Course Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="text-gray-600">Duration :</span>
            <span className="font-medium text-gray-800">{courses.duration} Months</span>
          </div>
          
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="text-gray-600">Professor :</span>
            <span className="font-medium text-gray-800">{courses.instructor}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600">Student</span>
            </div>
            <span className="font-medium text-blue-500">+120</span>
          </div>
        </div>

        {/* Read More Button */}
        <div className='flex gap-2'>
            <Link to = {`/dashboardCompany/manage-Lecture/${courses._id}`}>
            <button className="py-2 px-6 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-2">
          Edit
        </button>
            </Link>
        <button className="py-2 px-6 text-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors mt-2">
          Delete
        </button>
        </div>
      </div>
    </div>
  );
}

