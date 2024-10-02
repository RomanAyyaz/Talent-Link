import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { AddExperienceApi } from '../../ResumeApis/ResumeApi';

function ExperienceForm() {
  //Extracting id from utl 
  let {id} = useParams()

  //Formik Structure 
  const initialValues = {
    experience: [{ positionTitle: '', companyName: '', state: '', city: '', startDate: '', endDate: '', workSummery:'' }]
  };

  //Api calling 
  const addExperienceApi = useMutation({
    mutationFn:AddExperienceApi,
    onSuccess:()=>{
      console.log("Experience Added Successfully")
    },
    onError:()=>{
      console.log("Some error in adding the experience")
    }
  })
  const onSubmit = (values , onSubmitProps) => {
    onSubmitProps.resetForm()
    onSubmitProps.setSubmitting(false);
    addExperienceApi.mutate({values,id})
    console.log(values);
  };

  return (
    <div>
      <div className='text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your previous job Experience</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({values }) => (
            <Form className='border border-gray-400 rounded-md mt-3 p-1.5'>
              <FieldArray name="experience">
                {({ push, remove }) => (
                  <div className=''>
                    {values.experience.map((experience, index) => (
                      <div key={index} className='mt-2'>
                        <h4 className='font-bold'>Experience {index + 1}</h4>
                        <div className='flex gap-2 w-full mt-1'>
                          <div className='w-1/2'>
                            <label htmlFor="positionTitle" className='font-semibold text-sm'>Position Title</label><br />
                            <Field name={`experience[${index}].positionTitle`} className='text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='' />
                          </div>
                          <div className='w-1/2'>
                            <label htmlFor="companyName" className='font-semibold text-sm'>Company Name</label><br />
                            <Field name={`experience[${index}].companyName`} className='text-sm border mt-0.5  w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='' />
                          </div>
                        </div>
                        <div className='flex gap-2 w-full mt-1'>
                          <div className='w-1/2'>
                            <label htmlFor="city" className='font-semibold text-sm'>City</label><br />
                            <Field name={`experience[${index}].city`} className=' text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='' />
                          </div>
                          <div className='w-1/2'>
                            <label htmlFor="state" className='font-semibold text-sm'>State</label><br />
                            <Field name={`experience[${index}].state`} className=' text-sm border mt-0.5  w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='' />
                          </div>
                        </div>
                        <div className='flex gap-2 w-full mt-1'>
                          <div className='w-1/2'>
                            <label htmlFor="startDate" className='font-semibold text-sm'>Start Date</label><br />
                            <Field name={`experience[${index}].startDate`} type= 'date' className='text-sm  border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='' />
                          </div>
                          <div className='w-1/2'>
                            <label htmlFor="endDate" className='font-semibold text-sm'>End Date</label><br />
                            <Field name={`experience[${index}].endDate`} type= 'date' className=' text-sm border mt-0.5  w-full rounded-md p-1 focus:border-purple-500 focus:outline-none' placeholder='' />
                          </div>
                        </div>
                        <h2 className='mt-2 font-semibold'>Summery</h2>
                        <Field as="textarea"
                               id=""
                               name ={`experience[${index}].workSummery`}
                               rows="5" 
                               className = " p-1 w-full text-sm border rounded-md mt-1 focus:border-purple-500 focus:outline-none" />
                        <div>
                        </div>
                        {/* container for buttons */}
                        <div className='flex gap-3 items-center my-4'>
                        <button type="button" className='border border-purple-600 px-2 py-1 bg-white rounded-md text-purple-600 
                        hover:bg-gray-100 hover:text-black' onClick={() => push({ positionTitle: '', companyName: '', state: '', city: '', startDate: '', endDate: '' , workSummery:'' })}>
                            Add More Experience
                          </button>
                          <button type="button" className='border border-purple-600 px-2 py-1 bg-white rounded-md
                          hover:bg-gray-100 hover:text-black text-purple-600' onClick={() => remove(index)}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </FieldArray>
              <div className='flex justify-end w-full mt-3 px-4'>
            <button type='submit' className='text-white px-2.5 py-1 rounded-md bg-purple-600'>Save</button>
        </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ExperienceForm;
