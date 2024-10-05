import React, { useContext } from 'react'
import { ResumeInfoContext } from '../../../../Context/ResumeInfoContext'
import {Field , Form , Formik} from "formik"
import { useParams } from 'react-router-dom'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import { addPersonalDetailsApi, getDataOfResumeApi } from '../../ResumeApis/ResumeApi'
function PersonalDetailForm() {
   const {resumeInfo,SetResumeInfo} = useContext(ResumeInfoContext)

   const queryClient = useQueryClient()
   //Use param hook for extracting id from the url 
   let {id} = useParams()
    //Api calling for getting the data of that specific resume 
    const {data,isLoading,error} = useQuery({
        queryKey:['resumes',id],
        queryFn:()=> getDataOfResumeApi(id)
       })

       const resumeData = data?.data || {}
   //Formik Structure 
   const initialValues = {
        firstName: resumeData.firstName || '' , 
        lastName : resumeData.lastName || '' , 
        jobTitle: resumeData.jobTitle || '' , 
        address: resumeData.address || '' , 
        phone : resumeData.phone || '' , 
        email :resumeData.email || ''
   }

   //Api Calling for adding personal details
   const addPersonalDetailsMutation = useMutation({
    mutationFn:addPersonalDetailsApi,
    onSuccess:()=>{
        queryClient.invalidateQueries('resumes')
        console.log('Data Added Successfully')
    },
    onError:()=>{
        console.log('Some error in submitting data in personal details')
    }
   })

   const onSubmit = (values,onSubmitProps)=>{
    onSubmitProps.resetForm()
    console.log(values)
    addPersonalDetailsMutation.mutate({values,id})
   }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

   return (
    <div className='text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10'>
        <h2 className='font-bold text-lg'>Personal Details</h2>
        <p>Getting started with basic information</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                            <Field name='phone' type = 'number' className='border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Enter Phone' />
                            </div>
                            <div className='w-1/2'>
                            <label htmlFor="email" className='font-semibold text-sm'>Email</label><br />
                            <Field name='email' className='border mt-0.5  w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='Enter Email' />
                            </div>
                        </div>
                        <div className='flex justify-end w-full mt-3'>
                        <button className='text-white px-2.5 py-1 rounded-md bg-purple-600' type='submit'>Save</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    </div>
  )
}

export default PersonalDetailForm