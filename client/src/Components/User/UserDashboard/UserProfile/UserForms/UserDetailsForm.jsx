import React from 'react'
import { Formik, Field, Form } from 'formik';
function UserDetailsForm() {
  return (
    <div className='bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4'>
         <h1 className='text-lg text-black font-medium'>Your Details</h1>
         <div className='border-b-2 bg-gray-400 mt-4'></div>
         <Formik>
            {
            (formik) => (
                <Form className='flex flex-col py-3 md:flex-row md:flex-wrap'>
                    
                </Form>
            )
            }
         </Formik>
    </div>
  )
}

export default UserDetailsForm