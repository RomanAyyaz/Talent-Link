import React from 'react'
import { Formik, Field, Form } from "formik";
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getJobData, updateJobData } from '../JobApis';
function EditJob() {
  //Query clinet for showing values  real time
  let queryClient = useQueryClient();
  //for navigation
  let navigate = useNavigate();
  //Getting the job from the parameter
  let {id} = useParams();
  //Api calling for getting the data of this specific job
  let {data,isLaoding,error} = useQuery({
    queryKey:['jobs',id],
    queryFn: () => getJobData(id),
  })
  if(isLaoding){
    <div>Data loading...</div>
  }
  if(error){
    <div>Some error in loading data...</div>
  }
  //Job data 
  let jobData = data?data.data:[]
  //Formik structure
    const initialValues = {
        companyName: jobData ? jobData.companyName: "",
        jobTitle: jobData ? jobData.jobTitle: "",
        jobDescription:jobData ? jobData.jobDescription: "",
        workingSchedule:jobData ? jobData.workingSchedule: "",
        workingDays: jobData ? jobData.workingDays: "",
        minSalary:jobData ? jobData.minSalary: "",
        maxSalary:jobData ? jobData.maxSalary: "",
        experience:jobData ? jobData.experience: "",
        qualification:jobData ? jobData.qualification: "",
        location:jobData ? jobData.location: "",
        employmentType:jobData ? jobData.employmentType: ""
      };
      //api calling for updating the values of the job form 
      let updateJobMutation = useMutation({
        mutationFn:updateJobData,
        onSuccess:()=>{
          navigate('/dashboardCompany/myJob')
          queryClient.invalidateQueries('jobs')
          console.log('job data updated Successfully')
        },
        onError:()=>{
          console.log('There is some error in updating the job data')
        }
      })
      const onSubmit = (values, onSubmitProps) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm(true);
        updateJobMutation.mutate({values,id})
        console.log(values); 
      };
  return (
    <div className='w-full px-3 md:px-7 bg-bgcompanyProfile border'>
         <div className='bg-bgwhite w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3 md:flex md:items-center justify-between'>
              <h1 className='text-lg text-InstructorPrimary font-bold'>Edit Job</h1>
              <div>
                <p className='inline-block text-sm text-neutral-500'>Job</p> 
                <p className='inline-block font-medium text-sm text-neutral-500 mx-1.5'><FaGreaterThan size={10}/></p>
                <p className='inline-block font-medium text-sm text-InstructorPrimary'>Edit Job</p>
              </div>
            </div>
            {/* Job Form */}
             <div className="bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4">
                    <h1 className="text-lg text-black font-medium">Post Job</h1>
                    <div className="border-b-2 bg-gray-400 mt-4"></div>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                      {(formik) => (
                        <Form className="flex flex-col py-3 md:flex-row md:flex-wrap">
                          {/* Company Name */}
                          <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3"
                              htmlFor="companyName"
                            >
                              Company Name
                            </label>
                            <div className="text-start w-full mt-2 md:w-11/12">
                              <Field
                                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="companyName"
                                type="text"
                                placeholder="Company Name"
                              />
                            </div>
                          </div>
                          {/* Job title */}
                          <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3 md:w-full"
                              htmlFor="jobTitle"
                            >
                              Job Title
                            </label>
                            <div className="text-start w-full mt-2 md:w-11/12">
                              <Field
                                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="jobTitle"
                                type="text"
                                placeholder="Job Title"
                              />
                            </div>
                          </div>
                          {/* Job description */}
                          <label
                            className="text-start text-sm font-medium mt-3"
                            htmlFor="jobDescription"
                          >
                            Job Description
                          </label>
                          <div className="text-start w-full mt-2">
                            <Field
                              className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                              name="jobDescription"
                              as="textarea"
                              rows="3"
                              cols="40"
                              placeholder="Job Description"
                            />
                          </div>
                          {/* Working schedule */}
                          <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3"
                              htmlFor="workingSchedule"
                            >
                              Working Schedule
                            </label>
                            <div className="text-start w-full mt-2">
                              <Field
                                className="border p-2 w-full md:w-11/12 rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="workingSchedule"
                                as="select"
                                placeholder="workingSchedule"
                              >
                                <option value="Day Shift" label="Day Shift" />
                                <option value="Night Shift" label="Night Shift" />
                              </Field>
                            </div>
                          </div>
            
                          {/* Working days */}
                          <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3"
                              htmlFor="workingDays"
                            >
                              Working Days
                            </label>
                            <div className="text-start w-full mt-2">
                              <Field
                                className="border p-2 w-full md:w-11/12 rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="workingDays"
                                as="select"
                                placeholder="Working Days"
                              >
                                <option value="Mon to Fri" label="Mon to Fri" />
                                <option value="Sun to thrus" label=" Sun to thrus" />
                                <option value="Tues to Sat" label=" Tues to Sat" />
                              </Field>
                            </div>
                          </div>
                          {/*Location*/}
                          <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3"
                              htmlFor="Location"
                            >
                              Location
                            </label>
                            <div className="text-start w-full mt-2 md:w-11/12">
                              <Field
                                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="location"
                                type="text"
                                placeholder="Location"
                              />
                            </div>
                          </div>
                          {/* Employment type */}
                          <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3"
                              htmlFor="employmentTyye"
                            >
                              Employment Type
                            </label>
                            <div className="text-start w-full mt-2">
                              <Field
                                className="border p-2 w-full md:w-11/12 rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="employmentType"
                                as="select"
                                placeholder="Employment Type"
                              >
                                <option value="Full Time" label="Full Time" />
                                <option value="Part Time" label=" Part Time" />
                                <option value="Internship" label=" Internship" />
                              </Field>
                            </div>
                          </div>
                          {/* Salary Min */}
                          <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3"
                              htmlFor="minSalary"
                            >
                              Minimum Salary
                            </label>
                            <div className="text-start w-full mt-2 md:w-11/12">
                              <Field
                                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="minSalary"
                                type="text"
                                placeholder="Minimum Salary"
                              />
                            </div>
                          </div>
                          {/* Salary Max*/}
                          <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3 md:w-full"
                              htmlFor="maxSalary"
                            >
                              Maximum Salary
                            </label>
                            <div className="text-start w-full mt-2 md:w-11/12">
                              <Field
                                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="maxSalary"
                                type="text"
                                placeholder="Maximum Salary"
                              />
                            </div>
                          </div>
            
                           {/* Experience */}
                           <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3"
                              htmlFor="experience"
                            >
                              Experience 
                            </label>
                            <div className="text-start w-full mt-2 md:w-11/12">
                              <Field
                                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="experience"
                                type="text"
                                placeholder="Experience"
                              />
                            </div>
                          </div>
            
                           {/* Qualifications */}
                           <div className="w-full md:w-1/2 mt-2">
                            <label
                              className="text-start text-sm font-medium mt-3"
                              htmlFor="qualification"
                            >
                              Qualification
                            </label>
                            <div className="text-start w-full mt-2 md:w-11/12">
                              <Field
                                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                name="qualification"
                                type="text"
                                placeholder="Qualification"
                              />
                            </div>
                          </div>
            
                          {/* Submit button */}
                          <div className="mt-3 flex w-full md:w-1/2 md:mt-4">
                            <button
                              className="bg-InstructorPrimary px-5 py-2 rounded-md duration-300 text-white hover:bg-buttonHover"
                              disabled={!formik.values || formik.isSubmitting}
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
    </div>
  )
}

export default EditJob