import React, { useState } from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import { AddCourseApi } from '../CourseApis';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useCourseIdStore } from '../../../Store/CourseIdStore';
import { useDarkModeStore } from '../../../Store/DarkModeStore';

function AddCourse() {
  // ── stores & mode
  const { courseId, setCourseId } = useCourseIdStore();
  const { mode } = useDarkModeStore();

  // ── router
  const navigate = useNavigate();

  // ── learning outcomes state
  const [learningOutcomes, setLearningOutcomes] = useState([]);
  const [currentOutcome, setCurrentOutcome] = useState('');

  const addLearningOutcome = () => {
    if (currentOutcome.trim()) {
      setLearningOutcomes([...learningOutcomes, currentOutcome]);
      setCurrentOutcome('');
    }
  };

  // ── formik initial values
  const initialValues = {
    title: '',
    description: '',
    instructor: '',
    category: '',
    price: '',
    duration: '',
    learningOutcomes: '',
    imageUrl: null,
  };

  // ── mutation
  const addCourseMutation = useMutation({
    mutationFn: AddCourseApi,
    onSuccess: (data) => {
      console.log('Course Added');
      setCourseId(data.course._id);
      navigate(`/dashboardCompany/manage-Lecture/${data.course._id}`);
    },
    onError: () => console.log('Some error in adding course'),
  });

  // ── submit handler
  const onSubmit = (values, onSubmitProps) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('instructor', values.instructor);
    formData.append('category', values.category);
    formData.append('price', values.price);
    formData.append('duration', values.duration);
    formData.append('learningOutcomes', JSON.stringify(learningOutcomes));
    formData.append('imageUrl', values.imageUrl);

    addCourseMutation.mutate(formData);

    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    console.log(values);
  };

  /* ── Dark-mode helpers ──────────────────────────────────────────────── */
  const inputClass = `
    border p-2 w-full rounded-md text-sm px-2 border-1
    focus:border-InstructorPrimary focus:outline-none
    ${mode === 'dark' ? 'bg-dark text-gray-300 border-gray-600' : ''}
  `.trim();

  const labelClass = `
    text-start text-sm font-medium
    ${mode === 'dark' ? 'text-white' : ''}
  `.trim();

  const headerCardClass = `
    ${mode === 'light' ? 'bg-bgwhite' : 'bg-dark'}
    w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3
    md:flex md:items-center justify-between
  `.trim();

  const formCardClass = `
    ${mode === 'light' ? 'bg-white' : 'bg-dark'}
    w-full text-start px-3 md:px-8 rounded-md mt-6 py-4
  `.trim();
  /* ──────────────────────────────────────────────────────────────────── */

  return (
    <div
      className={`
        w-full px-3 md:px-7 border
        ${mode === 'light' ? 'bg-bgcompanyProfile' : 'bg-darkk'}
      `}
    >
      {/* breadcrumb / title */}
      <div className={headerCardClass}>
        <h1 className="text-lg text-InstructorPrimary font-bold">Add Course</h1>
        <div>
          <p className="inline-block text-sm text-neutral-500">Courses</p>
          <p className="inline-block font-medium text-sm text-neutral-500 mx-1.5">
            <FaGreaterThan size={10} />
          </p>
          <p className="inline-block font-medium text-sm text-InstructorPrimary">
            Add Course
          </p>
        </div>
      </div>

      {/* form card */}
      <div className={formCardClass}>
        <h1
          className={`text-lg font-medium ${
            mode === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Courses Details
        </h1>
        <div className="border-b-2 bg-gray-400 mt-4"></div>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form className="flex flex-col py-3 md:flex-row md:flex-wrap">
              {/* Course Name */}
              <label className={labelClass} htmlFor="title">
                Course Name
              </label>
              <div className="text-start w-full mt-2">
                <Field
                  className={inputClass}
                  name="title"
                  type="text"
                  placeholder="Course Name"
                />
              </div>

              {/* Course Details */}
              <label className={`${labelClass} mt-3`} htmlFor="description">
                Course Details
              </label>
              <div className="text-start w-full mt-2">
                <Field
                  className={inputClass}
                  name="description"
                  as="textarea"
                  rows="3"
                  cols="40"
                  placeholder="Course Details"
                />
              </div>

              {/* Instructor Name */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="instructor">
                  Instructor Name
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="instructor"
                    type="text"
                    placeholder="Instructor Name"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="category">
                  Category
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="category"
                    type="text"
                    placeholder="Category"
                  />
                </div>
              </div>

              {/* Duration */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="duration">
                  Course Duration
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="duration"
                    type="text"
                    placeholder="Course Duration"
                  />
                </div>
              </div>

              {/* Price */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="price">
                  Course Price
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="price"
                    type="text"
                    placeholder="Course Price"
                  />
                </div>
              </div>

              {/* Course Photo */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="imageUrl">
                  Course Photo
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <input
                    className={inputClass}
                    name="imageUrl"
                    type="file"
                    onChange={(event) =>
                      formik.setFieldValue('imageUrl', event.currentTarget.files[0])
                    }
                  />
                </div>
              </div>

              {/* Learning Outcome input */}
              <div className="w-full md:w-1/2 mt-2">
                <label className={labelClass} htmlFor="learningOutcome">
                  Learning Outcome
                </label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <input
                    className={`
                      border p-3 w-full rounded-md text-sm px-2 border-1
                      focus:border-InstructorPrimary focus:outline-none
                      ${mode === 'dark' ? 'bg-dark text-gray-300 border-gray-600' : ''}
                    `}
                    name="learningOutcome"
                    value={currentOutcome}
                    onChange={(e) => setCurrentOutcome(e.target.value)}
                    type="text"
                    placeholder="Learning Outcomes"
                  />
                </div>
              </div>

              {/* main buttons */}
              <div className="mt-3 flex w-full md:w-1/2 md:mt-4">
                <button
                  className="bg-InstructorPrimary px-5 py-2 rounded-md duration-300 text-white hover:bg-buttonHover"
                  disabled={!formik.values || formik.isSubmitting}
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="bg-red-200 px-5 py-2 rounded-md duration-300 text-red-600 ml-2 hover:bg-HeroButtonOne hover:text-white"
                  type="reset"
                >
                  Cancel
                </button>
              </div>

              {/* Add learning outcome */}
              <div className="mt-3 w-full md:w-1/2 md:mt-4">
                <button
                  className="bg-green-500 hover:bg-green-600 duration-300 px-5 py-2 rounded-md text-white ml-2"
                  type="button"
                  onClick={addLearningOutcome}
                >
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddCourse;
