import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLectureApi } from "../CourseApis";
import { useCourseIdStore } from "../../../Store/CourseIdStore";

const AddLectureForm = () => {
  const queryClient = useQueryClient();
  //Course Id
  const { courseId} = useCourseIdStore();
  //Formik Structure
  const initialValues = {
    title: "",
    description: "",
    video: null,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    video: Yup.mixed()
      .required("Video is required")
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) =>
          value && ["video/mp4", "video/webm", "video/ogg"].includes(value.type)
      ),
  })
  //Api calling 
  const addLectureMutation = useMutation({
    mutationFn: addLectureApi,
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
      console.log("Lecture Added Successfully");
    },
    onError: () => {
      console.log("Some error in adding the Lectures");
    },
  });
  const onSubmit = (values, onSubmitProps) => {
    const { title, description, video } = values;

    // Create a FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", video);
    addLectureMutation.mutate({ values:formData, id:courseId });
    // Reset the form
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    console.log(values);
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Lecture</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Lecture Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-2"
              >
                Lecture Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows={4}
                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="video"
                className="block text-gray-700 font-medium mb-2"
              >
                Upload Lecture Video
              </label>
              <input
                type="file"
                id="video"
                name="video"
                accept="video/*"
                onChange={(event) => {
                  setFieldValue("video", event.currentTarget.files[0]);
                }}
                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
              />
              {errors.video && touched.video && (
                <div className="text-red-500 text-sm mt-1">{errors.video}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Save Lecture
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddLectureForm;
