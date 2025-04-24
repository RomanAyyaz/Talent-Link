import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLectureApi } from "../CourseApis";
import { useParams } from "react-router-dom";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

const AddLectureForm = () => {
  const queryClient = useQueryClient();
  const { mode } = useDarkModeStore();

  // Course Id
  const { id } = useParams();

  // ── Formik structure ───────────────────────────────
  const initialValues = {
    title: "",
    description: "",
    video: null,
    quiz: [],
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    // video validation omitted
  });

  // ── mutation ───────────────────────────────────────
  const addLectureMutation = useMutation({
    mutationFn: addLectureApi,
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
      console.log("Lecture Added Successfully");
    },
    onError: () => console.log("Some error in adding the Lectures"),
  });

  const onSubmit = (values, helpers) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("video", values.video);
    formData.append("quiz", JSON.stringify(values.quiz));
    addLectureMutation.mutate({ values: formData, id });
    helpers.setSubmitting(false);
    helpers.resetForm();
  };

  /* ── dark-mode helpers ───────────────────────────── */
  const cardBg   = mode === "dark" ? "bg-dark"     : "bg-white";
  const textMain = mode === "dark" ? "text-white"  : "text-gray-700";
  const textHead = mode === "dark" ? "text-white"  : "text-gray-800";
  const borderIn = mode === "dark" ? "border-gray-600" : "border-1";
  const inputBg  = mode === "dark" ? "bg-dark text-gray-300 border-gray-600" : "";
  /* ──────────────────────────────────────────────── */

  return (
    <div className={`${cardBg} shadow-lg rounded-lg p-6`}>
      <h2 className={`text-2xl font-semibold mb-4 ${textHead}`}>Add New Lecture</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, errors, touched, values }) => (
          <Form className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="title" className={`block font-medium mb-2 ${textMain}`}>
                Lecture Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className={`border p-2 w-full rounded-md text-sm px-2 focus:border-InstructorPrimary focus:outline-none ${borderIn} ${inputBg}`}
              />
              <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className={`block font-medium mb-2 ${textMain}`}>
                Lecture Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows={4}
                className={`border p-2 w-full rounded-md text-sm px-2 focus:border-InstructorPrimary focus:outline-none ${borderIn} ${inputBg}`}
              />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Video upload */}
            <div>
              <label htmlFor="video" className={`block font-medium mb-2 ${textMain}`}>
                Upload Lecture Video
              </label>
              <input
                type="file"
                id="video"
                name="video"
                accept="video/*"
                onChange={(e) => setFieldValue("video", e.currentTarget.files[0])}
                className={`border p-2 w-full rounded-md text-sm px-2 focus:border-InstructorPrimary focus:outline-none ${borderIn} ${inputBg}`}
              />
              {errors.video && touched.video && (
                <div className="text-red-500 text-sm mt-1">{errors.video}</div>
              )}
            </div>

            {/* Quiz header */}
            <div>
              <h1 className={`font-bold text-lg ${textHead}`}>Add Quiz for this Lecture</h1>
            </div>

            {/* Quiz FieldArray */}
            <FieldArray name="quiz">
              {({ remove, push }) => (
                <div>
                  {values.quiz.length === 0 ? (
                    <button
                      type="button"
                      className="bg-green-500 px-2 py-1 rounded-md text-white mt-2"
                      onClick={() => push({ question: "", answer: ["", "", "", ""] })}
                    >
                      Add Question
                    </button>
                  ) : (
                    <>
                      {values.quiz.map((q, idx) => (
                        <div key={idx}>
                          <label
                            htmlFor={`quiz.${idx}.question`}
                            className={`block font-medium mb-2 ${textMain}`}
                          >
                            Question {idx + 1}
                          </label>
                          <Field
                            name={`quiz.${idx}.question`}
                            placeholder="Enter the question"
                            className={`border p-2 w-full rounded-md text-sm px-2 focus:border-InstructorPrimary focus:outline-none ${borderIn} ${inputBg}`}
                          />

                          {/* Answers */}
                          <FieldArray name={`quiz.${idx}.answer`}>
                            {({ remove: remAns, push: addAns }) => (
                              <div className="my-2">
                                {q.answer.map((_, aIdx) => (
                                  <div key={aIdx} className="my-1.5">
                                    <Field
                                      name={`quiz.${idx}.answer.${aIdx}`}
                                      placeholder={`Answer ${aIdx + 1}`}
                                      className={`border p-2 w-2/5 rounded-md text-sm px-2 focus:border-InstructorPrimary focus:outline-none ${borderIn} ${inputBg}`}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => remAns(aIdx)}
                                      disabled={q.answer.length <= 1}
                                      className="bg-red-500 ml-2 text-white px-2 py-1 rounded-md"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                ))}
                                <button
                                  type="button"
                                  onClick={() => addAns("")}
                                  className="bg-green-500 px-2 py-1 rounded-md text-white mt-1"
                                >
                                  Add Answer
                                </button>
                              </div>
                            )}
                          </FieldArray>

                          <label
                            htmlFor={`quiz.${idx}.correctAnswer`}
                            className={`block font-medium mb-2 ${textMain}`}
                          >
                            Correct Answer {idx + 1}
                          </label>
                          <Field
                            name={`quiz.${idx}.correctAnswer`}
                            placeholder="Enter the correct answer"
                            className={`border p-2 w-full rounded-md text-sm px-2 focus:border-InstructorPrimary focus:outline-none ${borderIn} ${inputBg}`}
                          />

                          <button
                            type="button"
                            className="mt-2 bg-red-500 ml-2 text-white px-2 py-1 rounded-md"
                            onClick={() => remove(idx)}
                          >
                            Remove Question
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="bg-green-500 px-2 py-1 rounded-md text-white mt-2"
                        onClick={() => push({ question: "", answer: ["", "", "", ""] })}
                      >
                        Add Question
                      </button>
                    </>
                  )}
                </div>
              )}
            </FieldArray>

            {/* Submit */}
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
