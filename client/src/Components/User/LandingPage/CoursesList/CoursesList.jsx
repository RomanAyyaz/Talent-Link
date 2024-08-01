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
            courselist:'DEVELOPMENT',
        },
        {
            Image:ImageTwo,
            courselist:'BUSINESS',
        },
        {
            Image:ImageThree,
            courselist:'ENTERPRENEURSHIP',
        }
    ]
  return (
    <div className='lg:flex lg:mt-6'>
        <div className='mt-14 text-start px-5 lg:px-8 lg:w-2/5 lg:py-28'>
            <h1 className='font-bold text-4xl hidden md:block lg:w-[400px] lg:leading-[65px] lg:text-6xl'>Find Courses on almost any topic</h1>
            <h1 className='font-semibold text-4xl md:hidden'>Find Courses on </h1>
            <h1 className='font-semibold text-4xl md:hidden'> almost any topic</h1>
            <h1 className='my-6 text-2xl font-medium md:hidden mt-14'>Build your library for your career and personal growth</h1>
            <h1 className='hidden md:block text-2xl font-normal mt-14'>Build your library for your career</h1>
            <h1 className='hidden md:block text-2xl font-normal' >and personal growth</h1>
            <p className='text-sm mt-8 cursor-pointer hover:text-HeroButtonOne'>VIEW COURSES <BsArrowRight size={15} className='inline-block'/></p>
            <div className='bg-gray-500 h-[1px] mt-1 w-[120px]'></div>
        </div>
        <div className='mt-14 px-5 lg:flex lg:gap-3 lg:flex-wrap lg:justify-center lg:w-3/5'>
            {cousrseListData.map((values,index)=>{
                return(
                    <CourseListImages data = {values} key = {index}/>
                )
            })}
            <div className='m-auto lg:m-0 relative w-52 h-64 bg-HeroButtonOne cursor-pointer'>
                <p className='text-white p-4 w-32 absolute bottom-6 left-12 text-center text-2xl font-semibold'>BROWSE OTHER COURSES</p>
            </div>
        </div>
    </div>
  )
}

export default CoursesList