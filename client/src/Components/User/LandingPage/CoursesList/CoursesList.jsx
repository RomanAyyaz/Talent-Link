import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import ImageOne from '../../../../Assets/CourselistImages/personaldevelopment.jpg'
import ImageTwo from '../../../../Assets/CourselistImages/Business.jpg'
import ImageThree from '../../../../Assets/CourselistImages/entrepreneurship.jpg'
import CourseListImages from './CourseListImages';
function CoursesList() {
    let cousrseListData = [
        {
            Image:ImageOne,
            courselist:'DEVELOPMENT'
        },
        {
            Image:ImageTwo,
            courselist:'BUSINESS'
        },
        {
            Image:ImageThree,
            courselist:'ENTERPRENEURSHIP'
        }
    ]
  return (
    <div>
        <div className='mt-14 text-start px-5'>
            <h1 className='font-bold text-4xl hidden md:block'>Find Courses on almost any topic</h1>
            <h1 className='font-semibold text-4xl md:hidden'>Find Courses on </h1>
            <h1 className='font-semibold text-4xl md:hidden'> almost any topic</h1>
            <h1 className='my-6 text-2xl font-medium md:hidden mt-14'>Build your library for your career and personal growth</h1>
            <h1 className='hidden md:block text-2xl font-normal mt-14'>Build your library for your career</h1>
            <h1 className='hidden md:block text-2xl font-normal' >and personal growth</h1>
            <p className='text-sm mt-8'>VIEW COURSES <BsArrowRight size={15} className='inline-block'/></p>
            <div className='bg-gray-500 h-[1px] mt-1 w-[120px]'></div>
        </div>
        <div className='mt-14 px-5'>
            {cousrseListData.map((values,index)=>{
                return(
                    <CourseListImages data = {values} key = {index}/>
                )
            })}
        </div>
    </div>
  )
}

export default CoursesList