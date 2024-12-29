import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { X } from "lucide-react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../../../Store/UserStore";
import {useMutation} from '@tanstack/react-query'
import { addJobApplicationApi } from "../JobApis";
const JobApplicationModal = ({ isOpen, onClose }) => {
  let { user, setUser } = useUserStore();
  let userId = user._id;
  let { id } = useParams();
  let jobId = id;
  //Api calling for adding job applications
  let addApplicationMutation = useMutation({
    mutationFn:addJobApplicationApi,
    onSuccess:()=>{
        onClose();
        console.log('Application added successfully')
    },
    onError:()=>{
        console.log('Some error in adding the Job application')
    }
  })
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md m-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Apply for This Position</h2>
        <Formik
  initialValues={{ resume: null, coverLetter: "" }}
  validate={(values) => {
    const errors = {};
    if (!values.resume) {
      errors.resume = "Resume is required";
    }
    if (!values.coverLetter) {
      errors.coverLetter = "Cover letter is required";
    }
    return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
    const formData = {
      ...values,
      jobId,
      userId,
    };

    addApplicationMutation.mutate(formData, {
      onSuccess: () => {
        console.log("Application submitted successfully");
        onClose();
      },
      onError: (error) => {
        console.error("Error submitting application:", error.message);
      },
    });

    setSubmitting(false);
  }}
>

          {({ isSubmitting, setFieldValue }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Resume
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("resume", event.currentTarget.files[0]);
                  }}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                <ErrorMessage
                  name="resume"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cover Letter
                </label>
                <Field
                  as="textarea"
                  id="coverLetter"
                  name="coverLetter"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                <ErrorMessage
                  name="coverLetter"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
              >
                Submit Application
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default JobApplicationModal;
