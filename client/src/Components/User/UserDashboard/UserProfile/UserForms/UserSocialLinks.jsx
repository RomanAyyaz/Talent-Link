import React from "react";
import { Formik, Field, Form } from "formik";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "../../../../../Store/UserStore";
import { updateUserProfileApi } from "../../UserApi";
function UserSocialLinks() {
  const { user } = useUserStore();
  let id = user._id;
  //Formik structure
  let initialValues = {
    facebookLink: "",
    githubLink: "",
    linkedInLink: "",
    websiteLink: "",
  };
  //API CALLING FOR UPDATING THE DATA
  let addProfileMutation = useMutation({
    mutationFn: updateUserProfileApi,
    onSuccess: () => {
      console.log("User profile updated Successfully");
    },
    onError: () => {
      console.log("Some error in updating the user prifile");
    },
  });

  let onSubmit = (values, onSubmitProps) => {
    addProfileMutation.mutate({ values: values, id: id });
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
  };
  return (
    <div className="bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4">
      <h1 className="text-lg text-black font-medium">Social Links</h1>
      <div className="border-b-2 bg-gray-400 mt-4"></div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <Form className="flex flex-col py-3 md:flex-row md:flex-wrap">
            <div className="w-full md:w-1/2 mt-2">
              {/* Facebook Link */}
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="facebookLink"
              >
                Facebook
              </label>
              <div className="text-start w-full  mt-2 md:w-11/12">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="facebookLink"
                  type="text"
                  placeholder="www.facebook.com"
                />
              </div>
            </div>
            {/* Linkedin Link */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3 md:w-full"
                htmlFor="linkedInLink"
              >
                Linkedin
              </label>
              <div className="text-start w-full  mt-2 md:w-11/12">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="linkedInLink"
                  type="text"
                  placeholder="www.linkedin.com"
                />
              </div>
            </div>
            {/* Website Link */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="websiteLink"
              >
                Website
              </label>
              <div className="text-start w-full  mt-2 md:w-11/12">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="websiteLink"
                  type="text"
                  placeholder="www.yourPortfolio.com"
                />
              </div>
            </div>
            {/* Date of birth */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3 md:w-full"
                htmlFor="githubLink"
              >
                Github
              </label>
              <div className="text-start w-full  mt-2 md:w-11/12">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="githubLink"
                  type="text"
                  placeholder="www.githubLink.com"
                />
              </div>
            </div>

            {/* Save buuton */}
            <div className="mt-3 w-full md:w-1/2 md:mt-4">
              <button
                className="bg-green-500 hover:bg-green-600 duration-300 px-5 py-2 rounded-md text-white ml-2"
                type="submit"
              >
                Save Profile
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserSocialLinks;
