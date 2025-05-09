import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseList({courseData}) {
  return (
    <>
    <article className="my-3 w-full px-8 py-10 md:px-12  mx-auto bg-white rounded-lg  overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/4">
        <img
          src={`http://localhost:8000/public${courseData.imageUrl}`}
          alt="White Nike sneaker on asphalt"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="md:w-4/6 py-6 md:ml-10 flex flex-col justify-between text-start">
        <div className="space-y-4">
          <Link to={`/courses/${courseData._id}`}>
          <h2 className="text-3xl font-serif font-medium text-gray-900 cursor-pointer hover:text-HeroButtonOne transitions-colors">
           {courseData.title}
          </h2>
          </Link>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">by in</span>
            <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded">
            {courseData.category}
            </span>
          </div>
          <p className="text-gray-600">
            Growth extents in order to separate an association's show.
          </p>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="bg-red-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-sm font-normal">
           ${courseData.price}
          </div>
          <Link to={`/courses/${courseData._id}`}>
          <button className="px-5 py-2 border border-1 text-gray-900 font-medium  hover:bg-HeroButtonOne hover:text-white transition-colors">
            Read more
          </button>
          </Link>
        </div>
      </div>
    </article>
    <div className=' hidden md:flex w-11/12 h-[1px] ml-10 bg-gray-200  '>

    </div>
    </>
    
  )
}

