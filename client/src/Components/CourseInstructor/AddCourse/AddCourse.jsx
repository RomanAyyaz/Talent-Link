import React from 'react'
import { FaGreaterThan } from 'react-icons/fa';
import {Formik , Field , Form} from 'formik'
function AddCourse() {
  return (
    <div className='w-full px-3 md:px-7'>
       <div className='bg-bgwhite w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3 md:flex md:items-center justify-between'>
        <h1 className='text-lg text-InstructorPrimary font-bold'>Add Course</h1>
        <div>
        <p className='inline-block text-sm text-neutral-500'>Courses</p> 
        <p className='inline-block font-medium text-sm text-neutral-500 mx-1.5'><FaGreaterThan size={10}/></p>
        <p className='inline-block font-medium text-sm text-InstructorPrimary'>Add Course</p>
        </div>
       </div>
       <div className='bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4'>
        <h1 className='text-lg text-black font-medium'>Courses Details</h1>
        <div className='border bottom-[2px] bg-gray-400 mt-4'></div>
        <Formik>
          {
            (formik)=>{
              return (
                <Form className='flex flex-col py-3 md:flex-row md:flex-wrap'>
                   <label
                      className="text-start text-sm font-medium"
                      htmlFor="title"
                    >
                      Course Name
                    </label>
                    <div className="text-start w-full mt-2">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="title"
                        type="text"
                        placeholder="Course Name"
                      />
                    </div>

                    <label
                      className="text-start text-sm font-medium mt-3"
                      htmlFor="description"
                    >
                      Course Details
                    </label>
                    <div className="text-start w-full mt-2">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="description"
                        as = 'textarea'
                        rows = "3"
                        cols = "40"
                        placeholder="Course Details"
                      />
                    </div>

                    <div className='w-full md:w-1/2 mt-2 '>
                    <label
                      className="text-start text-sm font-medium mt-3"
                      htmlFor="instructor"
                    >
                      Instructor Name
                    </label>
                    <div className="text-start w-full  mt-2 md:w-11/12">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="instructor"
                        type="text"
                        placeholder="Instructor Name"
                      />
                    </div>
                    </div>
                    
                    <div className='w-full md:w-1/2 mt-2'>
                    <label
                      className="text-start text-sm font-medium mt-3 md:w-full"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <div className="text-start w-full  mt-2 md:w-11/12">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="category"
                        type="text"
                        placeholder="Category"
                      />
                    </div>
                    </div>

                    <div className='w-full md:w-1/2 mt-2' >
                    <label
                      className="text-start text-sm font-medium mt-3 md:w-full"
                      htmlFor="duration"
                    >
                      Course Duration
                    </label>
                    <div className="text-start w-full mt-2 md:w-11/12">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="duration"
                        type="text"
                        placeholder="Course Duration"
                      />
                    </div>
                    </div>

                    <div className='w-full md:w-1/2 mt-2'>
                    <label
                      className="text-start text-sm font-medium mt-3"
                      htmlFor="price"
                    >
                      Course Price
                    </label>
                    <div className="text-start w-full mt-2 md:w-11/12">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="price"
                        type="text"
                        placeholder="Course Price"
                      />
                    </div>
                    </div>

                    <div className='w-full md:w-1/2 mt-2'>
                    <label
                      className="text-start text-sm font-medium mt-3"
                      htmlFor="imageUrl"
                    >
                      Course Photo
                    </label>
                    <div className="text-start w-full mt-2 md:w-11/12">
                      <input
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="imageUrl"
                        type="file"
                        placeholder="Course Photo"
                      />
                    </div>
                    </div>

                    <div className='mt-3 flex w-full md:mt-4' >
                      <button className='bg-InstructorPrimary px-5 py-2 rounded-md text-white hover:bg-buttonHover' type='submit'>Submit</button>
                      <button className='bg-red-200 px-5 py-2 rounded-md text-red-600 ml-2 hover:bg-HeroButtonOne hover:text-white ' type='cancel'>Cancel</button>
                    </div>

                </Form>
              )
            }
          }
        </Formik>
       </div>
    </div>
  )
}

export default AddCourse