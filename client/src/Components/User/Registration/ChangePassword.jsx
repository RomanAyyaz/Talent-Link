import React, { useState } from 'react'
import { Field, Form, ErrorMessage, Formik } from "formik";
import {OtpSentApi , ChangepasswordApi} from './ChangePasswordApi'
import {OtpVerificationApi } from './LoginApis';
import {useMutation} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'
import { toast ,Bounce} from 'react-toastify';
import * as yup from 'yup'
function ChangePassword() {
    let navigate = useNavigate()
    //Setting visibility on frontend
    let [visibility,Setvisibility] = useState('email')
    //Setting user Email
    let [userEmail,SetUserEmail] = useState()
    //Setting the password
    let [Password,SetPassword] = useState()
    //Otp values
    let [value1, setValue1] = useState();
    let [value2, setValue2] = useState();
    let [value3, setValue3] = useState();
    let [value4, setValue4] = useState();
    //setting values in one variable 
    let UserOtp = Number(`${value1}${value2}${value3}${value4}`);
    //Formik Structure for UserEmail
    let initialValuesEmail = {
        useremail: '',
      }
    let validationSchemaEmail = yup.object({
        useremail: yup.string().email().required('Required')
    })
    //Api to send otp
    let OptsentMutation = useMutation({
        mutationFn:OtpSentApi,
        onSuccess:()=>{
            Setvisibility('otp')
        },
        onError:(error)=>{
        const errorMessage = error.message || 'An unknown error occurred';
        toast.error(errorMessage,{
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      })
      console.log('Some Error in sending otp', error.message);
        }
    })
    let onSubmitEmail = (values, onSubmitProps) => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            SetUserEmail(values.useremail)
            OptsentMutation.mutate(values)
     }
    //setting the User Data
    let UserData = {
        email:userEmail,
        otp:UserOtp
    }
    //Verify the otp  
    let OtpVerificationMutations = useMutation({
        mutationFn: OtpVerificationApi,
        onSuccess: () => {
          Setvisibility('password')
          console.log('otp Verificated');
        },
        onError: () => {
          console.log('Some error in otp verification');
        }
      });
    //formik Structure for Change Password
    let initialValues = {
        newpassword: '',
        confirmpassword: ''
      }
    let validationSchema = yup.object({
        newpassword: yup.string().required('Required'),
        confirmpassword: yup.string().required('Required').oneOf([yup.ref('newpassword'), null], 'Passwords must match'),
    })
    //Api calling for change password
    let ChangePasswordMutations = useMutation({
        mutationFn: ChangepasswordApi,
        onSuccess: () => {
          navigate('/login')
          console.log('password changed')
        },
        onError: () => {
          console.log('Some error in Password changing');
        }
      });

    let onSubmit = (values, onSubmitProps) => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            SetPassword(values.newpassword)
            //Setting the user data for password change 
            let userDataforpassword = {
            email:userEmail,
            password: Password
            }
            ChangePasswordMutations.mutate(userDataforpassword)
     }
  return (
    <>
    {visibility === 'email'?
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
    <div className="py-12 px-6 flex flex-col text-start bg-white rounded-lg shadow-lg lg:w-1/3 w-full">
      <h1 className="font-bold text-3xl text-center mb-6 text-gray-800 tracking-widest">Talent Link</h1>
      <p className="text-neutral-500 text-sm mb-6 text-center lg:text-left">
        Enter the email address associated with your account, and we will send you an OTP to change your password.
      </p>
      <Formik initialValues={initialValuesEmail} validationSchema={validationSchemaEmail} onSubmit={onSubmitEmail}>
        {(formik) => {
          return (
            <Form>
              <label htmlFor="useremail" className="block text-gray-600 text-sm font-medium mb-1">
                Email
              </label>
              <Field
                type="email"
                name="useremail"
                className="p-2 border rounded-lg w-full mt-1 mb-4 focus:outline-none focus:border-InstructorPrimary"
              />
              {/* <ErrorMessage name="useremail" component="div" className="text-red-500 text-sm mb-4" /> */}
              <button
                className="p-3 bg-InstructorPrimary mt-2 w-full text-white rounded-lg transition-colors duration-300 hover:bg-buttonHover  lg:w-52 lg:mx-auto"
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                Continue
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  </div>
  
     : visibility === 'otp'?
     <div className="flex items-center justify-center w-full h-screen bg-gray-100">
  <div className="py-10 px-5 md:py-20 md:px-36 bg-white shadow-2xl rounded-lg">
    <h1 className="text-3xl font-bold text-gray-800 text-center">Verify</h1>
    <p className="mt-2 text-sm text-neutral-500 text-center">Your code was sent to your email</p>
    <div className="my-6 flex justify-center">
      <input
        type="number"
        onChange={(e) => setValue1(e.target.value)}
        className="h-12 w-12 text-center text-xl rounded-md mx-2 border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={1}
      />
      <input
        type="number"
        onChange={(e) => setValue2(e.target.value)}
        className="h-12 w-12 text-center text-xl rounded-md mx-2 border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={1}
      />
      <input
        type="number"
        onChange={(e) => setValue3(e.target.value)}
        className="h-12 w-12 text-center text-xl rounded-md mx-2 border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={1}
      />
      <input
        type="number"
        onChange={(e) => setValue4(e.target.value)}
        className="h-12 w-12 text-center text-xl rounded-md mx-2 border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={1}
      />
    </div>
    <button
      className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-medium transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="submit"
      onClick={() => {
        OtpVerificationMutations.mutate(UserData);
      }}
    >
      Verify
    </button>
  </div>
</div>

      :
      <div className="min-h-screen flex justify-center items-center bg-bgSignin">
      <div className="w-[450px] lg:mt-8 lg:shadow-4xl shadow-2xl m-3 py-4 bg-bgwhite rounded-md">
      <h1 className="text-xl font-bold lg:text-3xl">Change Password</h1>
      <p className="mt-3 text-neutral-500">Please set a new password</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {(formik) => {
          return (
            <Form className="flex justify-start flex-col px-3 py-6 lg:px-8 ">
               <label
                      className="text-start font-medium text-sm"
                      htmlFor="newpassword"
                    >
                      New Password
                    </label>
              <div className="text-start w-full mt-2">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="newpassword"
                  type="password"
                  placeholder="New Password"
                />
                {/* <ErrorMessage name="newpassword" component="div" className="text-red-500 text-sm text-start" /> */}
              </div>
              <label
                      className="text-start font-medium text-sm mt-3"
                      htmlFor="confirmpassword"
                    >
                      Confirm Password
                    </label>
              <div className="text-start w-full mt-2">
                <Field
                  className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Password"
                />
                {/* <ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm text-start" /> */}
              </div>
              <button
                className="text-white rounded-md mt-5 bg-InstructorPrimary w-full p-2 hover:bg-buttonHover duration-300"
                type="submit" disabled={!formik.isValid || formik.isSubmitting}
              >
                Change
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
    </div>
       }
    </>
  )
}

export default ChangePassword