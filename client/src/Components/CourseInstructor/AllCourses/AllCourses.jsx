import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa';
import { getAllCourses } from '../CourseApis';
import AllCoursesList from './AllCoursesList';

function AllCourses() {
   //Api Calling for getting all the resumes 
   const { data, isLoading, error } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getAllCourses(),
  });
  if(isLoading) {
    <h1>Loading....</h1>
  }
  if(error) {
    <h2>error</h2>
  }
  let coursesData = data?.coursesData || []
 
  return (
    <div className='w-full px-3 md:px-7 bg-bgcompanyProfile border'>
    <div className='bg-bgwhite w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3 md:flex md:items-center justify-between'>
      <h1 className='text-lg text-InstructorPrimary font-bold'>All Course</h1>
      <div>
        <p className='inline-block text-sm text-neutral-500'>Courses</p> 
        <p className='inline-block font-medium text-sm text-neutral-500 mx-1.5'><FaGreaterThan size={10}/></p>
        <p className='inline-block font-medium text-sm text-InstructorPrimary'>All Course</p>
      </div>
    </div>
    
      <div className='grid grid-cols-3 gap-4'>
        {
          coursesData ? 
          coursesData.map((courses,index)=>{
            return (
             
                <AllCoursesList courses = {courses} key={index}/>
             
              
            )
          })
           : null
        }
      </div>
      
    
  </div>
  )
}

export default AllCourses