import React from "react";
import { Formik, Field, Form } from "formik";
import { useMutation } from "@tanstack/react-query";
import { addUserProjectsApi } from "../../UserApi";
import { useUserStore } from "../../../../../Store/UserStore";
import { useNavigate } from "react-router-dom";

function UserPortfolioForm() {
  const { user } = useUserStore();
  let id = user._id;
  let navigate = useNavigate();
  // Formik Initial Values
  const initialValues = {
    projectName: "",
    projectUrl: "",
    projectDescription: "",
    projectStartDate: "",
    projectEndDate: "",
    projectImages: [],
  };

  //api calling
  const projectMutation = useMutation({
    mutationFn: addUserProjectsApi,
    onSuccess: () => {
        navigate('/UserDashboard/user-profile')
      console.log("User projects added successfully");
    },
    onError: (error) => {
      console.error("Error adding User projects:", error);
    },
  });
  // Onsubmit handler
  const onSubmit = (values, onSubmitProps) => {
    const formData = new FormData();
    formData.append("projectName", values.projectName);
    formData.append("projectUrl", values.projectUrl);
    formData.append("projectDescription", values.projectDescription);
    formData.append("projectStartDate", values.projectStartDate);
    formData.append("projectEndDate", values.projectEndDate);

    // Append all images
    for (let i = 0; i < values.projectImages.length; i++) {
      formData.append("projectImages", values.projectImages[i]);
    }
    projectMutation.mutate({ formData, id: id });
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <div className="w-full px-3 md:px-7  bg-bgcompanyProfile border">
      <div className="bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4">
        <h1 className="text-lg text-black font-medium">Add Projects</h1>
        <div className="border-b-2 bg-gray-400 mt-4"></div>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form className="flex flex-col py-3 md:flex-row md:flex-wrap">
              {/* Project Name */}
              <div className="w-full md:w-1/2 mt-2">
                <label
                  className="text-start text-sm font-medium mt-3"
                  htmlFor="projectName"
                >
                  Project Name
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                    name="projectName"
                    type="text"
                    placeholder="Project Name"
                  />
                </div>
              </div>

              {/* Project URL */}
              <div className="w-full md:w-1/2 mt-2">
                <label
                  className="text-start text-sm font-medium mt-3 md:w-full"
                  htmlFor="projectUrl"
                >
                  Project URL
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                    name="projectUrl"
                    type="text"
                    placeholder="Project URL"
                  />
                </div>
              </div>

              {/* Start Date */}
              <div className="w-full md:w-1/2 mt-2">
                <label
                  className="text-start text-sm font-medium mt-3"
                  htmlFor="projectStartDate"
                >
                  Start Date
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                    name="projectStartDate"
                    type="date"
                  />
                </div>
              </div>

              {/* End Date */}
              <div className="w-full md:w-1/2 mt-2">
                <label
                  className="text-start text-sm font-medium mt-3"
                  htmlFor="projectEndDate"
                >
                  End Date
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                    name="projectEndDate"
                    type="date"
                  />
                </div>
              </div>

              {/* Project Description */}
              <div className="w-full md:mr-10 mt-2">
                <label
                  className="text-start text-sm font-medium mt-3"
                  htmlFor="projectDescription"
                >
                  Project Description
                </label>
                <div className="text-start w-full mt-2">
                  <Field
                    className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                    name="projectDescription"
                    as="textarea"
                    rows="3"
                    cols="40"
                    placeholder="Project Description"
                  />
                </div>
              </div>

              {/* Project images  */}
              <div className="w-full md:mr-10 mt-2">
                <label
                  className="text-start text-sm font-medium mt-3"
                  htmlFor="projectImages"
                >
                  Project Images
                </label>
                <div className="text-start w-full">
                  <input
                    className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                    name="projectImages"
                    type="file"
                    multiple
                    onChange={(event) => {
                      formik.setFieldValue(
                        "projectImages",
                        event.currentTarget.files
                      );
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

export default UserPortfolioForm;
