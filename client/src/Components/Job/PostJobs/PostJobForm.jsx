import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Formik, Field, Form } from "formik";
import {useMutation} from "@tanstack/react-query"
import { postJobApi } from "../JobApis";
import { useCompanyIdStore } from "../../../Store/CompanyIdStore";
function PostJobForm() {
  const{companyId,setCompanyId} = useCompanyIdStore();
  const initialValues = {
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    workingSchedule: "",
    workingDays: "",
    minSalary:"",
    maxSalary:"",
    experience:"",
    qualification:"",
    location:"",
    employmentType:"",
    postedBy:companyId
  };
  //Api calling for posting jobs 
  let addJobMutation = useMutation({
    mutationFn: postJobApi,
    onSuccess:()=>{
      console.log('Job posted Successfully')
    },
    onError:()=>{
      console.log('Some error in posting job')
    }
  })
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    addJobMutation.mutate(values);
    console.log(values); 
  };

  return (
    <div className="w-full px-3 md:px-7 bg-bgcompanyProfile border">
      <div className="bg-bgwhite w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3 md:flex md:items-center justify-between">
        <h1 className="text-lg text-InstructorPrimary font-bold">Post Job</h1>
        <div>
          <p className="inline-block text-sm text-neutral-500">Jobs</p>
          <p className="inline-block font-medium text-sm text-neutral-500 mx-1.5">
            <FaGreaterThan size={10} />
          </p>
          <p className="inline-block font-medium text-sm text-InstructorPrimary">
            Post Job
          </p>
        </div>
      </div>
      {/* Post Job Form */}
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
  );
}

export default PostJobForm;
