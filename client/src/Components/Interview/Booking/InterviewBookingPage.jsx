"use client"
import { useState } from "react"
import { CalendarIcon, UserIcon, LightBulbIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import WhyChooseUs from "./WhyChooseUs"
import HowItWorks from "./HowItWorks"
import Testimonials from "./Testimonials"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { useUserStore } from "../../../Store/UserStore";
import { useMutation } from "@tanstack/react-query"
import { addInterviewApi } from "../InterviewApi"
// Define available time slots
const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"]

const InterviewBookingPage = () => {
  const [isBooked, setIsBooked] = useState(false)

  const { user, setUser } = useUserStore();
  // Initial values for Formik
  const initialValues = {
    interviewType: "",
    interviewDate: "",
    interviewTime: "",
    interviewExpectations: ""
  }

  // Yup validation schema
  const validationSchema = Yup.object({
    interviewType: Yup.string().required("Please select an interview type."),
    interviewDate: Yup.string().required("Please select a date."),
    interviewTime: Yup.string().required("Please select a time slot."),
    interviewExpectations: Yup.string()
  })

  //Api calling 
  const addInterviewMutation = useMutation({
    mutationFn: addInterviewApi,
    onSuccess:()=>{
      setIsBooked(true)
    },
    onError:()=>{
      console.log('Some error in adding the course')
    }
  })

  // onSubmit handler
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form values:", values)
    setSubmitting(false)
    addInterviewMutation.mutate({values:values , id:user._id})
    resetForm()
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Book Your Interview with Talent Link
          </h1>

          {!isBooked ? (
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {({ values, errors, touched, setFieldValue, isSubmitting }) => (
                <Form className="space-y-8 bg-white shadow-lg rounded-lg p-6">
                  {/* Interview Type Selection */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Select Interview Type</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Technical Interview", "HR Interview"].map((type) => (
                        <div
                          key={type}
                          onClick={() => setFieldValue("interviewType", type)}
                          className={`border rounded-lg p-4 cursor-pointer transition duration-300 ease-in-out ${
                            values.interviewType === type
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            {type === "Technical Interview" ? (
                              <LightBulbIcon className="h-6 w-6 text-blue-500" />
                            ) : (
                              <UserIcon className="h-6 w-6 text-blue-500" />
                            )}
                            <h3 className="font-medium">{type}</h3>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            {type === "Technical Interview"
                              ? "Assess your technical skills and problem-solving abilities."
                              : "Discuss your background, experience, and cultural fit."}
                          </p>
                        </div>
                      ))}
                    </div>
                    {errors.interviewType && touched.interviewType && (
                      <div className="text-red-500 text-sm mt-1">{errors.interviewType}</div>
                    )}
                  </div>

                  {/* Date and Time Selection */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Select Date and Time</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="interviewDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Date
                        </label>
                        <Field
                          type="date"
                          name="interviewDate"
                          className="mt-1 block w-full px-3 py-2 border text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        />
                        {errors.interviewDate && touched.interviewDate && (
                          <div className="text-red-500 text-sm mt-1">{errors.interviewDate}</div>
                        )}
                      </div>
                      <div>
                        <label htmlFor="interviewTime" className="block text-sm font-medium text-gray-700 mb-1">
                          Time
                        </label>
                        <Field as="select" name="interviewTime" className="mt-1 block w-full px-3 py-2 border text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                          <option value="">Select a time slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </Field>
                        {errors.interviewTime && touched.interviewTime && (
                          <div className="text-red-500 text-sm mt-1">{errors.interviewTime}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Interview Expectations */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Interview Expectations</h2>
                    <Field
                      as="textarea"
                      name="interviewExpectations"
                      rows="4"
                      placeholder="Describe your expectations for the interview."
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Booking Confirmation */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    >
                      Book Interview
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Interview Booked Successfully!</h2>
              <p className="text-gray-600">We've sent a confirmation email with all the details.</p>
            </div>
          )}
        </div>
      </div>
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </div>
  )
}

export default InterviewBookingPage
