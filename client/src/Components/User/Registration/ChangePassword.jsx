import React, { useState } from 'react'
import { Field, Form, ErrorMessage, Formik } from "formik";
import {OtpSentApi} from './ChangePasswordApi'
import {useMutation} from '@tanstack/react-query'
import { toast ,Bounce} from 'react-toastify';
import * as yup from 'yup'
function ChangePassword() {
    //Setting visibility on frontend
    let [visibility,Setvisibility] = useState('email')
    //Setting user Email
    let [userEmail,SetUserEmail] = useState()
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

    //formik Structure for Change Password
    let initialValues = {
        newpassword: '',
        confirmpassword: ''
      }
    let validationSchema = yup.object({
        newpassword: yup.string().required('Required'),
        confirmpassword: yup.string().required('Required').oneOf([yup.ref('newpassword'), null], 'Passwords must match'),
    })
    let onSubmit = (values, onSubmitProps) => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            console.log(values)
     }
  return (
    <>
    {visibility === 'email'?
    <div className='flex justify-center items-center w-full h-screen'>
    <div className='py-10 px-4 flex flex-col text-start lg:shadow-2xl'>
    <h1 className='font-bold text-2xl text-center mb-5'>Edulogy</h1>
    <p className='text-neutral-500 text-sm lg:hidden'>Enter the email address associated with your account and we will send you the otp to change your password</p>
    <p className='hidden lg:block text-sm text-neutral-500'>Enter the email address associated with your account</p>
    <p className='hidden lg:block text-sm text-neutral-500'>and we will send you the otp to change your password</p>
    <div className='w-full py-2'>
        <Formik initialValues={initialValuesEmail} validationSchema={validationSchemaEmail} onSubmit={onSubmitEmail}>
            {
                (formik)=>{
                    return(
                        <Form>
                            <label htmlFor="useremail" className=''>Email</label> <br />
                            <Field type = 'email' name = 'useremail' className='p-3 border w-full mt-1' />
                            <ErrorMessage name='useremail'/>
                            <button className='p-3 bg-HeroButtonOne mt-2 w-full text-white lg:w-52 lg:mx-autoc' type='submit' disabled = {
                                formik.isSubmitting || !formik.isValid
                            }>Continue</button>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
    </div>
    </div>
     : visibility === 'otp'?
     <div className='flex items-center justify-center w-full h-screen'>
     <div className='py-10 px-5 md:py-20 md:px-36 bg-bgwhite shadow-2xl'>
       <h1 className='text-2xl font-bold'>Verify</h1>
       <p className='mt-2 text-sm text-neutral-400'>Your Code was sent to you via email</p>
       <div className='my-4'>
         <input type="number" onChange={(e) => { setValue1(e.target.value) }} name="" id="" className='h-10 w-10 text-center rounded-md mx-2  border border-neutral-400' />
         <input type="number" onChange={(e) => { setValue2(e.target.value) }} name="" id="" className='h-10 w-10 text-center rounded-md mx-2  border border-neutral-400' />
         <input type="number" onChange={(e) => { setValue3(e.target.value) }} name="" id="" className='h-10 w-10 text-center rounded-md mx-2  border border-neutral-400' />
         <input type="number" onChange={(e) => { setValue4(e.target.value) }} name="" id="" className='h-10 w-10 text-center rounded-md mx-2  border border-neutral-400' />
       </div>
       <button className='bg-blue-600 text-white px-4 py-3 rounded-md' type="submit" onClick={()=>{
        Setvisibility('changepassword')
       }}>Verify</button>
     </div>
   </div>
      :
      <div className="max-w-full lg:w-[500px] lg:m-auto lg:mt-8 lg:shadow-4xl shadow-2xl m-3 pt-10">
      <h1 className="text-xl font-bold lg:text-3xl">Change Password</h1>
      <p className="my-5 text-neutral-500">Please set a new password</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {(formik) => {
          return (
            <Form className="flex justify-start flex-col px-3 py-6 lg:px-8 ">
              <label className="text-start font-medium" htmlFor="newpassword">
                New Password
              </label>
              <br />
              <div className="text-start w-full">
                <Field
                  className="border p-3.5 w-full"
                  name="newpassword"
                  type="password"
                  placeholder="New Password"
                />
                <ErrorMessage name="newpassword" component="div" className="text-red-500 text-sm text-start" />
              </div>
              <br />
              <label className="text-start font-medium" htmlFor="confirmpassword">
                Confirm Password
              </label>
              <br />
              <div className="text-start w-full">
                <Field
                  className="border p-3.5 w-full"
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm text-start" />
              </div>
              <br />
              <button
                className="text-white mt-5 bg-HeroButtonOne w-32 h-14"
                type="submit" disabled={!formik.isValid || formik.isSubmitting}
              >
                Change
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
       }
    </>
  )
}

export default ChangePassword