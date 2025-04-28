import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useUserStore } from '../../../Store/UserStore'
import { useMutation } from '@tanstack/react-query'
import { addPrefApi } from './CopilotApi'

const JobPreferencesSchema = Yup.object().shape({
  isRemote: Yup.boolean(),
  locations: Yup.array().when('isRemote', {
    is: true,
    then: (schema) => schema.min(1, 'Please select at least one location'),
  }),
  jobTypes: Yup.array().min(1, 'Please select at least one job type'),
  jobTitles: Yup.string().required('Please enter at least one job title'),
})

function JobPref() {
  const [showLocationSelector, setShowLocationSelector] = useState(false)
  const { user} = useUserStore();

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

  //Api for adding pref 
    const AddPrefMutation = useMutation({
      mutationFn: addPrefApi,
      onSuccess: (data) => {
        console.log('Pref add successfully');
      },
      onError: () => {
        console.log('Some error in adding pref');
      },
    });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values) 
    AddPrefMutation.mutate({values , id: '6756ce45c30e72456e36456a'})
    setTimeout(() => {
      setSubmitting(false)
    }, 500)
  }
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
      <Formik
        initialValues={initialValues}
        validationSchema={JobPreferencesSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue, isSubmitting, isValid, dirty }) => (
          <Form className="space-y-8">
            {/* Work Location Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Work Location</h2>
              <p className="text-gray-600">
                Are you looking for jobs that are remote, have a physical location, or both?
              </p>
              
              <div className="flex items-center space-x-2">
                <Field 
                  type="checkbox" 
                  name="isRemote"
                  className="h-5 w-5 rounded border-2 border-blue-600 text-blue-600"
                />
                <span className="text-gray-900 font-medium">Remote Jobs</span>
              </div>

              {values.isRemote && (
                <div className="mt-4">
                  <p className="text-red-500 text-sm mb-2">
                    Please select at least one country or worldwide.
                  </p>
                  
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowLocationSelector(!showLocationSelector)}
                      className="flex items-center justify-between w-full px-4 py-2.5 border border-gray-300 rounded-lg text-left hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <span className={values.locations.length === 0 ? 'text-gray-500' : 'text-gray-900'}>
                        {values.locations.length === 0 
                          ? 'Select locations' 
                          : `${values.locations.length} location${values.locations.length > 1 ? 's' : ''} selected`}
                      </span>
                    </button>
                    
                    {showLocationSelector && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <div className="p-2 max-h-60 overflow-y-auto">
                          {locationOptions.map((location) => (
                            <label key={location} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600"
                                checked={values.locations.includes(location)}
                                onChange={() => {
                                  const newLocations = values.locations.includes(location)
                                    ? values.locations.filter(loc => loc !== location)
                                    : [...values.locations, location]
                                  setFieldValue('locations', newLocations)
                                }}
                              />
                              <span className="text-gray-700">{location}</span>
                            </label>
                          ))}
                        </div>
                        <div className="border-t border-gray-200 p-2">
                          <button
                            type="button"
                            onClick={() => setShowLocationSelector(false)}
                            className="w-full py-2 text-center text-blue-600 font-medium hover:text-blue-700"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {errors.locations && touched.locations && (
                    <p className="mt-2 text-sm text-red-600">{errors.locations}</p>
                  )}
                </div>
              )}
            </div>

            {/* Job Types Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Job Types</h2>
              <p className="text-gray-600">
                What job types are you looking for? Select at least one.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {jobTypeOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      const newTypes = values.jobTypes.includes(option.id)
                        ? values.jobTypes.filter(type => type !== option.id)
                        : [...values.jobTypes, option.id]
                      setFieldValue('jobTypes', newTypes)
                    }}
                    className={`px-4 py-2 rounded-full border ${
                      values.jobTypes.includes(option.id)
                        ? 'bg-blue-50 border-blue-600 text-blue-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              
              {errors.jobTypes && touched.jobTypes && (
                <p className="text-sm text-red-600">{errors.jobTypes}</p>
              )}
            </div>

            {/* Job Titles Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Job Titles</h2>
              <p className="text-gray-600">
                What job titles are you looking for? Type in and select up to 5
              </p>
              
              <Field
                type="text"
                name="jobTitles"
                placeholder="Job titles / keywords"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              {errors.jobTitles && touched.jobTitles && (
                <p className="text-sm text-red-600">{errors.jobTitles}</p>
              )}
              
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <span className="text-yellow-400 text-lg">💡</span>
                <p>
                  To ensure you don't miss out on jobs, we recommend adding more job titles. 
                  Consider adding synonyms or related job titles.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
                className={`w-full sm:w-auto float-right px-6 py-2.5 rounded-lg font-medium ${
                  isSubmitting || !isValid || !dirty
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }`}
              >
                {isSubmitting ? 'Saving...' : 'Save Preferences'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default JobPref