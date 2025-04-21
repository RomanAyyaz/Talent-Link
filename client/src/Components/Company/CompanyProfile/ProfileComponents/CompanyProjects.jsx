import React from "react";
import { Formik, Field, Form } from "formik";
import { useCompanyIdStore } from "../../../../Store/CompanyIdStore";
import { useMutation } from "@tanstack/react-query";
import { addCompanyProjectsApi } from "../CompanyProfileApis/CompanyProfileApis";
import { useDarkModeStore } from "../../../../Store/DarkModeStore";

function CompanyProjects() {
  const { companyId } = useCompanyIdStore();
  const { mode } = useDarkModeStore();

  const initialValues = {
    projectName: "",
    projectUrl: "",
    projectDescription: "",
    projectStartDate: "",
    projectEndDate: "",
    projectImages: [],
  };

  const projectMutation = useMutation({
    mutationFn: addCompanyProjectsApi,
    onSuccess: () => {
      console.log("Company projects added successfully");
    },
    onError: (error) => {
      console.error("Error adding Company projects:", error);
    },
  });

  const onSubmit = (values, onSubmitProps) => {
    const formData = new FormData();
    formData.append("projectName", values.projectName);
    formData.append("projectUrl", values.projectUrl);
    formData.append("projectDescription", values.projectDescription);
    formData.append("projectStartDate", values.projectStartDate);
    formData.append("projectEndDate", values.projectEndDate);
    
    for (let i = 0; i < values.projectImages.length; i++) {
      formData.append("projectImages", values.projectImages[i]);
    }

    projectMutation.mutate({ formData, id: companyId });

    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const inputClass = `border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none ${mode === 'dark' ? 'bg-dark text-gray-300 border-gray-600' : ''}`;
  const labelClass = `text-start text-sm font-medium mt-3 ${mode === 'dark' ? 'text-white' : ''}`;
  const formClass = `${mode === 'light' ? 'bg-white' : 'bg-dark'} w-full text-start px-3 md:px-8 rounded-md mt-6 py-4`;

  return (
    <div className="w-full px-3 md:px-7">
      <div className={formClass}>
        <h1 className={`text-lg font-medium ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Company Projects</h1>
        <div className="border-b-2 bg-gray-400 mt-4"></div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form className="flex flex-col py-3 md:flex-row md:flex-wrap">
              {/* Project Name */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="projectName">Project Name</label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field className={inputClass} name="projectName" type="text" placeholder="Project Name" />
                </div>
              </div>

              {/* Project URL */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="projectUrl">Project URL</label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field className={inputClass} name="projectUrl" type="text" placeholder="Project URL" />
                </div>
              </div>

              {/* Start Date */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="projectStartDate">Start Date</label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field className={inputClass} name="projectStartDate" type="date" />
                </div>
              </div>

              {/* End Date */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="projectEndDate">End Date</label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field className={inputClass} name="projectEndDate" type="date" />
                </div>
              </div>

              {/* Project Description */}
              <div className="w-full md:mr-10 mt-2">
                <label className={labelClass} htmlFor="projectDescription">Project Description</label>
                <div className="text-start w-full mt-2">
                  <Field
                    className={inputClass}
                    name="projectDescription"
                    as="textarea"
                    rows="3"
                    placeholder="Project Description"
                  />
                </div>
              </div>

              {/* Project Images */}
              <div className="w-full md:mr-10 mt-2">
                <label className={labelClass} htmlFor="projectImages">Project Images</label>
                <div className="text-start w-full">
                  <input
                    className={`${inputClass} focus:outline-none`}
                    name="projectImages"
                    type="file"
                    multiple
                    onChange={(event) => {
                      formik.setFieldValue("projectImages", event.currentTarget.files);
                    }}
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-3 flex w-full md:mr-10 md:mt-4 justify-end">
                <button
                  className="bg-InstructorPrimary px-5 py-2 rounded-md duration-300 text-white hover:bg-buttonHover"
                  disabled={formik.isSubmitting}
                  type="submit"
                >
                  Save
                </button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CompanyProjects;
