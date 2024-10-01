import React, { useContext } from 'react'
import { ResumeInfoContext } from '../../../../Context/ResumeInfoContext'
import {Field , Form , Formik} from "formik"
function PersonalDetailForm() {
   const {resumeInfo,SetResumeInfo} = useContext(ResumeInfoContext)
   return (
    <div className='text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10'>
        <h2 className='font-bold text-lg'>Personal Details</h2>
        <p>Getting started with basic information</p>
        <Formik>
            {()=>{
                return (
                    <Form className='mt-2'>
                        <div className='flex gap-2 w-full'>
                            <div className='w-1/2'>
                            <label htmlFor="firstName" className='font-semibold text-sm'>First Name</label><br />
                            <Field name='firstName' className='border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='First Name' />
                            </div>
                            <div className='w-1/2'>
                            <label htmlFor="lastName" className='font-semibold text-sm'>Last Name</label><br />
                            <Field name='lastName' className='border mt-0.5 text-sm  w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='w-full mt-2'>
                        <label htmlFor="jobTitle" className='font-semibold text-sm'>Job Title</label><br />
                        <Field name='jobTitle' className='border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Job Title' />  
                        </div>
                        <div className='w-full mt-2'>
                        <label htmlFor="address" className='font-semibold text-sm'>Address</label><br />
                        <Field name='address' className='border text-sm mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Enter Address' />  
                        </div>
                        <div className='flex gap-2 w-full mt-2'>
                            <div className='w-1/2'>
                            <label htmlFor="phone" className='font-semibold text-sm'>Phone</label><br />
                            <Field name='phone' className='border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Enter Phone' />
                            </div>
                            <div className='w-1/2'>
                            <label htmlFor="email" className='font-semibold text-sm'>Email</label><br />
                            <Field name='email' className='border mt-0.5  w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Enter Email' />
                            </div>
                        </div>
                        <div className='flex justify-end w-full mt-3'>
                        <button className='text-white px-2.5 py-1 rounded-md bg-purple-600'>Save</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    </div>
  )
}

export default PersonalDetailForm