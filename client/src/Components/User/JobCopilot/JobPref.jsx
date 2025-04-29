import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useUserStore } from '../../../Store/UserStore'
import { useMutation } from '@tanstack/react-query'
import { addPrefApi } from './CopilotApi'
import Navbar from "../Navbar"
import { Navigate, useNavigate } from 'react-router-dom'

const JobPreferencesSchema = Yup.object().shape({
  isRemote: Yup.boolean(),
  locations: Yup.array().when('isRemote', {
    is: true,
    then: (schema) => schema.min(1, 'Please select at least one location'),
  }),
  jobTypes: Yup.array().min(1, 'Please select at least one job type'),
  jobTitles: Yup.string().required('Please enter at least one job title'),
})

export default function JobPref() {
  const [showLocationSelector, setShowLocationSelector] = useState(false)
  const { user } = useUserStore()
  let navigate = useNavigate();
  // const navigate = Navigate()
  const locationOptions = [
    'United States', 'Canada', 'United Kingdom',
    'Australia', 'Germany', 'France', 'Spain',
    'Italy', 'Japan', 'India', 'Brazil', 'Worldwide'
  ]

  const jobTypeOptions = [
    { id: 'fulltime', label: 'Fulltime' },
    { id: 'parttime', label: 'Part-Time' },
    { id: 'contract', label: 'Contractor / Temp' },
    { id: 'internship', label: 'Internship' }
  ]

  const initialValues = {
    isRemote: true,
    locations: [],
    jobTypes: [],
    jobTitles: ''
  }

  const AddPrefMutation = useMutation({
    mutationFn: addPrefApi,
    onSuccess: () => {
      navigate('/landingPage')
      console.log('Pref added successfully')
    } ,
    onError: () => console.log('Error adding pref'),
  })

  const handleSubmit = (values, { setSubmitting }) => {
    AddPrefMutation.mutate({ values, id: user._id  })
    setTimeout(() => setSubmitting(false), 500)
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden my-5">
      <div className='text-2xl font-medium mt-2'>
      Copilot Configuration
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={JobPreferencesSchema}
        onSubmit={handleSubmit}
      >
        {({
          values, errors, touched,
          setFieldValue, isSubmitting, isValid, dirty
        }) => (
          <Form className="space-y-8 p-8">
            
            {/* Work Location */}
            <section className="space-y-4">
              <header className="">
                <h2 className="text-xl text-start font-semibold text-gray-900">
                  Work Location
                </h2>
              </header>
              <p className="text-gray-600 text-start">
                Remote, on-site, or both? Choose what suits you.
              </p>
              <div className="flex items-center space-x-3">
                <Field
                  type="checkbox"
                  name="isRemote"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="isRemote" className="text-gray-900 font-medium">
                  Remote Jobs
                </label>
              </div>
              
              {values.isRemote && (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowLocationSelector(!showLocationSelector)}
                    className="w-full flex justify-between items-center px-4 py-3 border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <span className={values.locations.length ? 'text-gray-800' : 'text-gray-500'}>
                      {values.locations.length
                        ? `${values.locations.length} selected`
                        : 'Select locations'}
                    </span>
                    <svg
                      className="h-5 w-5 text-gray-400 transform"
                      viewBox="0 0 20 20" fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.22 3.96a.75.75 0 01-1.04 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {showLocationSelector && (
                    <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                      <div className="max-h-56 overflow-auto p-2">
                        {locationOptions.map(loc => (
                          <label
                            key={loc}
                            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={values.locations.includes(loc)}
                              onChange={() => {
                                const next = values.locations.includes(loc)
                                  ? values.locations.filter(x => x !== loc)
                                  : [...values.locations, loc]
                                setFieldValue('locations', next)
                              }}
                              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700">{loc}</span>
                          </label>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowLocationSelector(false)}
                        className="w-full py-2 text-center font-medium text-blue-600 hover:bg-blue-50 rounded-b-lg"
                      >
                        Done
                      </button>
                    </div>
                  )}

                  {errors.locations && touched.locations && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.locations}
                    </p>
                  )}
                </div>
              )}
            </section>

            {/* Job Types */}
            <section className="space-y-4">
              <header className="">
                <h2 className="text-xl text-start font-semibold text-gray-900">
                  Job Types
                </h2>
              </header>
              <p className="text-gray-600 text-start">
                Select one or more job types.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {jobTypeOptions.map(opt => {
                  const active = values.jobTypes.includes(opt.id)
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        const next = active
                          ? values.jobTypes.filter(x => x !== opt.id)
                          : [...values.jobTypes, opt.id]
                        setFieldValue('jobTypes', next)
                      }}
                      className={`
                        py-2 px-3 text-center rounded-lg border
                        ${active
                          ? 'bg-blue-100 border-blue-600 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'}
                      `}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>
              {errors.jobTypes && touched.jobTypes && (
                <p className="text-sm text-red-600">{errors.jobTypes}</p>
              )}
            </section>

            {/* Job Titles */}
            <section className="space-y-4">
              <header className="">
                <h2 className="text-xl text-start font-semibold text-gray-900">
                  Job Titles
                </h2>
              </header>
              <p className="text-gray-600 text-start">
                Enter up to 5 keywords or titles.
              </p>
              <Field
                type="text"
                name="jobTitles"
                placeholder="e.g. Frontend Engineer, React Developer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {errors.jobTitles && touched.jobTitles && (
                <p className="text-sm text-red-600">{errors.jobTitles}</p>
              )}
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <span className="mt-1">💡</span>
                <p>
                  Add synonyms or related titles to catch more opportunities.
                </p>
              </div>
            </section>

            {/* Submit */}
            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
                className={`
                  px-6 py-3 rounded-lg font-semibold transition
                  ${isSubmitting || !isValid || !dirty
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'}
                `}
              >
                {isSubmitting ? 'Saving...' : 'Save Preferences'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    </>
    
  )
}
