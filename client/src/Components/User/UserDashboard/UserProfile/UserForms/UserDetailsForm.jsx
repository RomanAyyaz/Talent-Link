import React from "react";
import { Formik, Field, Form } from "formik";
import {useMutation} from "@tanstack/react-query"
import { useUserStore } from "../../../../../Store/UserStore";
import { updateUserProfileApi } from "../../UserApi";
function UserDetailsForm() {
  const {user} = useUserStore();
  let id = user._id;
  // Formik Structure 
  const initialValues = {
    fullname:"", email:"" , phoneNumber:"" , dateOfBirth:"" , gender:"" , age:"" ,
    qualification:"" , language:"" , experience:"" , showProfile:"", userDescription:"",
    imageUrl:null
  }
  //API CALLING FOR UPDATING THE DATA
  let addProfileMutation = useMutation({
    mutationFn:updateUserProfileApi,
    onSuccess:()=>{
      console.log('User profile updated Successfully')
    },
    onError:()=>{
      console.log('Some error in updating the user prifile')
    }
  })

  const onSubmit = (values,onSubmitProps)=>{
    addProfileMutation.mutate({values:values , id:id})
    console.log(values)
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
  }
  return (
    <div className="bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4">
      <h1 className="text-lg text-black font-medium">Your Details</h1>
      <div className="border-b-2 bg-gray-400 mt-4"></div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <Form className="flex flex-col py-3 md:flex-row md:flex-wrap">
            <div className="w-full md:w-1/2 mt-2">
              {/* Name */}
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <div className="text-start w-full  mt-2 md:w-11/12">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
            </div>
            {/* Email */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3 md:w-full"
                htmlFor="email"
              >
                Email
              </label>
              <div className="text-start w-full  mt-2 md:w-11/12">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            {/* Phone */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <div className="text-start w-full  mt-2 md:w-11/12">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            {/* Date of birth */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3 md:w-full"
                htmlFor="dateOfBirth"
              >
                Date of Birth
              </label>
              <div className="text-start w-full  mt-2 md:w-11/12">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="dateOfBirth"
                  type="date"
                  placeholder="Date of birth"
                />
              </div>
            </div>
            {/* Gender  */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="text-start w-full mt-2">
                <Field
                  className="border p-2 w-full md:w-11/12 rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="gender"
                  as="select"
                  placeholder="Gender"
                >
                  <option value="Male" label="Male" />
                  <option value="Female" label="Female" />
                  <option value="Other" label="Other" />
                </Field>
              </div>
            </div>
            {/* Age */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="age"
              >
                Age
              </label>
              <div className="text-start w-full  mt-2 md:w-11/12">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="age"
                  type="text"
                  placeholder="Enter Age"
                />
              </div>
            </div>
            {/* Qualification */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="qualification"
              >
                Qualification
              </label>
              <div className="text-start w-full mt-2">
                <Field
                  className="border p-2 w-full md:w-11/12 rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="qualification"
                  as="select"
                  placeholder="Select Qualification"
                >
                  <option value="HSC" label="HSC" />
                  <option value="SSC" label="SSC" />
                  <option value="Diploma" label="Diploma" />
                  <option value="Graduation" label="Diploma" />
                  <option value="Post Graduation" label="Post Graduation" />
                </Field>
              </div>
            </div>
            {/* Language */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="qualification"
              >
                Language
              </label>
              <div className="text-start w-full mt-2">
                <Field
                  className="border p-2 w-full md:w-11/12 rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="language"
                  as="select"
                  placeholder="Select Language"
                >
                  <option value="Hindi" label="Hindi" />
                  <option value="English" label="English" />
                  <option value="Urdu" label="Urdu" />
                </Field>
              </div>
            </div>
            {/* Experience */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="experience"
              >
                Experience
              </label>
              <div className="text-start w-full mt-2">
                <Field
                  className="border p-2 w-full md:w-11/12 rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="experience"
                  as="select"
                  placeholder="Select Experience"
                >
                  <option value="1 year" label="1 year" />
                  <option value="2 year" label="2 year" />
                  <option value="3 year" label="3 year" />
                  <option value="4 year" label="4 year" />
                  <option value="5 year" label="5 year" />
                </Field>
              </div>
            </div>
            {/* Show profile */}
            <div className="w-full md:w-1/2 mt-2">
              <label
                className="text-start text-sm font-medium mt-3"
                htmlFor="showProfile"
              >
                Show Profile
              </label>
              <div className="text-start w-full mt-2">
                <Field
                  className="border p-2 w-full md:w-11/12 rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="showProfile"
                  as="select"
                  placeholder="Show Profile"
                >
                  <option value="Yes" label="Yes" />
                  <option value="No" label="No" />
                </Field>
              </div>
            </div>
            {/* Image url */}
            <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3"
                    htmlFor="imageUrl"
                  >
                    Profile Picture
                  </label>
                  <div className="text-start w-full mt-2 md:w-11/12">
                    <input
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="imageUrl"
                      type="file"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0]
                        formik.setFieldValue("imageUrl",file);
                    }}
                      
                      placeholder="Course Photo"
                    />
                  </div>
                  
            </div>
            {/* User description */}
            <div className='w-full md:w-1/2 mt-2'>       
            </div>
            <label
              className="text-start text-sm font-medium mt-3"
              htmlFor="userDescription"
            >
              User Description
            </label>
            <div className="text-start w-full mt-2">
              <Field
                className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                name="userDescription"
                as="textarea"
                rows="5"
                cols="40"
                placeholder="Enter Description"
              />
            </div>
            {/* Save buuton */}
            <div className='mt-3 w-full md:w-1/2 md:mt-4'>
                  <button className='bg-green-500 hover:bg-green-600 duration-300 px-5 py-2 rounded-md text-white ml-2' type='submit' >Save Profile</button>
                </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserDetailsForm;
