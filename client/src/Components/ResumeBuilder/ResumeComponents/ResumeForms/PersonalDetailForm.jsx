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
                            <label htmlFor="firstName" className='font-medium'>First Name</label><br />
                            <Field name='firstName' className='border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='First Name' />
                            </div>
                            <div className='w-1/2'>
                            <label htmlFor="lastName" className='font-medium'>Last Name</label><br />
                            <Field name='lastName' className='border mt-0.5  w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='w-full mt-2'>
                        <label htmlFor="jobTitle" className='font-medium'>Job Title</label><br />
                        <Field name='jobTitle' className='border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Job Title' />  
                        </div>
                        <div className='w-full mt-2'>
                        <label htmlFor="address" className='font-medium'>Address</label><br />
                        <Field name='address' className='border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Enter Address' />  
                        </div>
                        <div className='flex gap-2 w-full mt-2'>
                            <div className='w-1/2'>
                            <label htmlFor="phone" className='font-medium'>Phone</label><br />
                            <Field name='phone' className='border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Enter Phone' />
                            </div>
                            <div className='w-1/2'>
                            <label htmlFor="email" className='font-medium'>Email</label><br />
                            <Field name='email' className='border mt-0.5  w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Enter Email' />
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