import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLectureApi } from "../CourseApis";
import { useParams } from "react-router-dom";

const AddLectureForm = () => {
  const queryClient = useQueryClient();
  //Course Id
  const { id } = useParams();
  //Formik Structure
  const initialValues = {
    title: "",
    description: "",
    video: null,
    quiz: [],
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    // video: Yup.mixed()
    //   .required("Video is required")
    //   .test(
    //     "fileFormat",
    //     "Unsupported Format",
    //     (value) =>
    //       value && ["video/mp4", "video/webm", "video/ogg"].includes(value.type)
    //   ),
  });

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
    const { title, description, video, quiz } = values;
    console.log("quiz values are", values);
    // Create a FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", video);
    formData.append("quiz", JSON.stringify(values.quiz));
    addLectureMutation.mutate({ values: formData, id: id });
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
        {({ setFieldValue, errors, touched, values }) => (
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
            <div>
              <h1 className="font-bold text-lg">Add Quiz for this Lecture</h1>
            </div>

            <FieldArray name="quiz">
              {({ remove, push }) => (
                <div>
                  {values.quiz.length === 0 ? (
                    <>
                      <button
                        type="button"
                        className=" bg-green-500 px-2 py-1 rounded-md text-white mt-2"
                        onClick={() =>
                          push({ question: "", answer: ["", "", "", ""] })
                        }
                      >
                        Add Question
                      </button>
                    </>
                  ) : (
                    <>
                      {values.quiz.map((q, index) => (
                        <div key={index}>
                          <label
                            htmlFor={`quiz.${index}.question`}
                            className="block text-gray-700 font-medium mb-2"
                          >
                            Question {index + 1}
                          </label>
                          <Field
                            name={`quiz.${index}.question`}
                            placeholder="Enter the question"
                            className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                          />

                          {/* Answer array */}
                          <FieldArray name={`quiz.${index}.answer`}>
                            {({ remove: removeAnswer, push: pushAnswer }) => (
                              <div className=" my-2">
                                {q.answer.map((_, answerIndex) => (
                                  <div key={answerIndex} className="my-1.5">
                                    <Field
                                      name={`quiz.${index}.answer.${answerIndex}`}
                                      placeholder={`Answer ${answerIndex + 1}`}
                                      className="border p-2 w-2/5 rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => removeAnswer(answerIndex)}
                                      disabled={q.answer.length <= 1}
                                      className=" bg-red-500 ml-2 text-white px-2 py-1 rounded-md"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                ))}
                                <button
                                  type="button"
                                  onClick={() => pushAnswer("")}
                                  className="bg-green-500 px-2 py-1 rounded-md text-white mt-1"
                                >
                                  Add Answer
                                </button>
                              </div>
                            )}
                          </FieldArray>

                          <label
                            htmlFor={`quiz.${index}.correctAnswer`}
                            className="block text-gray-700 font-medium mb-2"
                          >
                            Correct Answer {index + 1}
                          </label>
                          <Field
                            name={`quiz.${index}.correctAnswer`}
                            placeholder="Enter the correct answer"
                            className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                          />

                          <button
                            type="button"
                            className=" mt-2 bg-red-500 ml-2 text-white px-2 py-1 rounded-md"
                            onClick={() => remove(index)}
                          >
                            Remove Question
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className=" bg-green-500 px-2 py-1 rounded-md text-white mt-2"
                        onClick={() =>
                          push({ question: "", answer: ["", "", "", ""] })
                        }
                      >
                        Add Question
                      </button>
                    </>
                  )}
                </div>
              )}
            </FieldArray>

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
