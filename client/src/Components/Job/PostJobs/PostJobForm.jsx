import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Formik, Field, Form } from "formik";
import { useMutation } from "@tanstack/react-query";
import { postJobApi } from "../JobApis";
import { useCompanyIdStore } from "../../../Store/CompanyIdStore";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

function PostJobForm() {
  const { companyId } = useCompanyIdStore();
  const { mode } = useDarkModeStore();

  const initialValues = {
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    workingSchedule: "",
    workingDays: "",
    minSalary: "",
    maxSalary: "",
    experience: "",
    qualification: "",
    location: "",
    employmentType: "",
    postedBy: companyId,
  };

  // ── API call
  const addJobMutation = useMutation({
    mutationFn: postJobApi,
    onSuccess: () => console.log("Job posted Successfully"),
    onError: () => console.log("Some error in posting job"),
  });

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    addJobMutation.mutate(values);
    console.log(values);
  };

  /* ── Dark-mode helpers ─────────────────────────────────────────────── */
  const inputClass = `
    border p-2 w-full rounded-md text-sm px-2 border-1
    focus:border-InstructorPrimary focus:outline-none
    ${mode === "dark" ? "bg-dark text-gray-300 border-gray-600" : ""}
  `.trim();

  const labelClass = `
    text-start text-sm font-medium mt-3
    ${mode === "dark" ? "text-white" : ""}
  `.trim();

  const headerCardClass = `
    ${mode === "light" ? "bg-bgwhite" : "bg-dark"}
    w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3
    md:flex md:items-center justify-between
  `.trim();

  const formCardClass = `
    ${mode === "light" ? "bg-white" : "bg-dark"}
    w-full text-start px-3 md:px-8 rounded-md mt-6 py-4
  `.trim();
  /* ──────────────────────────────────────────────────────────────────── */

  return (
    <div
      className={`
        w-full px-3 md:px-7 border
        ${mode === "light" ? "bg-bgcompanyProfile" : "bg-darkk"}
      `}
    >
      {/* breadcrumb / title */}
      <div className={headerCardClass}>
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
      <div className={formCardClass}>
        <h1
          className={`text-lg font-medium ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Post Job
        </h1>
        <div className="border-b-2 bg-gray-400 mt-4"></div>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form className="flex flex-col py-3 md:flex-row md:flex-wrap">
              {/* Company Name */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="companyName">
                  Company Name
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              {/* Job Title */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="jobTitle">
                  Job Title
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="jobTitle"
                    type="text"
                    placeholder="Job Title"
                  />
                </div>
              </div>

              {/* Job Description */}
              <label className={labelClass} htmlFor="jobDescription">
                Job Description
              </label>
              <div className="text-start w-full mt-2">
                <Field
                  className={inputClass}
                  name="jobDescription"
                  as="textarea"
                  rows="3"
                  cols="40"
                  placeholder="Job Description"
                />
              </div>

              {/* Working Schedule */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="workingSchedule">
                  Working Schedule
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="workingSchedule"
                    as="select"
                  >
                    <option value="Day Shift">Day Shift</option>
                    <option value="Night Shift">Night Shift</option>
                  </Field>
                </div>
              </div>

              {/* Working Days */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="workingDays">
                  Working Days
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="workingDays"
                    as="select"
                  >
                    <option value="Mon to Fri">Mon to Fri</option>
                    <option value="Sun to thrus">Sun to thrus</option>
                    <option value="Tues to Sat">Tues to Sat</option>
                  </Field>
                </div>
              </div>

              {/* Location */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="location">
                  Location
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="location"
                    type="text"
                    placeholder="Location"
                  />
                </div>
              </div>

              {/* Employment Type */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="employmentType">
                  Employment Type
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="employmentType"
                    as="select"
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Internship">Internship</option>
                  </Field>
                </div>
              </div>

              {/* Minimum Salary */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="minSalary">
                  Minimum Salary
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="minSalary"
                    type="text"
                    placeholder="Minimum Salary"
                  />
                </div>
              </div>

              {/* Maximum Salary */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="maxSalary">
                  Maximum Salary
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="maxSalary"
                    type="text"
                    placeholder="Maximum Salary"
                  />
                </div>
              </div>

              {/* Experience */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="experience">
                  Experience
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="experience"
                    type="text"
                    placeholder="Experience"
                  />
                </div>
              </div>

              {/* Qualification */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="qualification">
                  Qualification
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="qualification"
                    type="text"
                    placeholder="Qualification"
                  />
                </div>
              </div>

              {/* Submit */}
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
