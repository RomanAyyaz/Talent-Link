import React, { useState } from "react";
import { Field, Form, ErrorMessage, Formik } from "formik";
import {SignupApi} from './LoginApis'
import {useMutation} from '@tanstack/react-query'
import * as yup from 'yup'
function Login() {
  let [Account, SetAccount] = useState("signin");
  //Formik Structure for Signin 
  let initialValuesSignin = {
    email:'',
    password:''
  }
  let validationSchemaSignin = yup.object({
    email: yup.string().email().required('Email Required'),
    password:yup.string().required('Password Required'),
  })
  let onSubmitSignin = (values,onSubmitProps)=>{
    onSubmitProps.resetForm(true)
    onSubmitProps.setSubmitting(false)
    console.log(values)
  }
  //Formik Structure for Signup
  let initialValuesSignup = {
    fullname:'',
    email:'',
    password:'',
    confirmpassword:''
  }
  let validationSchemaSignup = yup.object({
    fullname: yup.string().required('fullname Required'),
    email: yup.string().email().required('Email Required'),
    password:yup.string().required('Password Required'),
    confirmpassword: yup.string().required('Confirm Password Required'),
  })
  //Api Calling for Signup 
  let SignUpMutation = useMutation({
    mutationFn:SignupApi,
    onSuccess:()=>{
        console.log('User Signed up SuccessFully')
    },
    onError:()=>{
        console.log('Some error in User Signup')
    }
  })
  let onSubmitSignup = (values,onSubmitProps)=>{
    onSubmitProps.resetForm(true)
    onSubmitProps.setSubmitting(false)
    SignUpMutation.mutate(values)
  }
  return (
    <>
    {/* It will show the state of account */}
      {Account === "signin" ? (
        <div className="max-w-full shadow-2xl m-3 pt-10">
          <h1 className="text-xl font-bold">Login</h1>
          <p className="my-5">Enter Login details to get access</p>
          <Formik initialValues={initialValuesSignin} validationSchema={validationSchemaSignin} onSubmit={onSubmitSignin}>
            {(formik) => {
              return (
                <Form className="flex justify-start flex-col px-3  py-6 lg:px-8">
                  <label className="text-start font-medium" htmlFor="email">
                    Username Or Email
                  </label>{" "}
                  <br />
                  <Field
                    className="border p-3.5"
                    name="email"
                    type="email"
                    placeholder="Username / Email"
                  />{" "}
                  <br />
                  <ErrorMessage name="email" />
                  <label className="text-start font-medium" htmlFor="password">
                    Password
                  </label>{" "}
                  <br />
                  <Field
                    className="border p-3.5"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />{" "}
                  <br />
                  <ErrorMessage name="password" />
                  <p className="text-primary font-light text-start hover:cursor-pointer text-HeroButtonOne">
                    Forgot Password?
                  </p>
                  <p className="text-start mt-5">
                    Don't have an account?{" "}
                    <span
                      className=" hover:cursor-pointer text-primary font-light text-HeroButtonOne"
                      onClick={() => {
                        SetAccount("signup");
                      }}
                    >
                      Sign Up
                    </span>{" "}
                    here
                  </p>
                  <button
                    className="text-white mt-5 bg-HeroButtonOne w-32 h-14"
                    type="submit" disabled = {!formik.isValid  ||  formik.isSubmitting
                    }
                  >
                    login
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      ) : (
        <div className="max-w-full shadow-2xl m-3 pt-10">
          <h1 className="text-xl font-bold">Sign Up</h1>
          <p className="my-5">Create your account to get full access</p>
          <Formik initialValues={initialValuesSignup} validationSchema={validationSchemaSignup} onSubmit={onSubmitSignup}>
            {(formik) => {
              return (
                <Form className="flex justify-start flex-col px-3  py-6 lg:px-8">
                  <label className="text-start font-medium" htmlFor="fullname">
                    Full Name
                  </label>{" "}
                  <br />
                  <Field
                    className="border p-3.5"
                    name="fullname"
                    type="text"
                    placeholder="Enter Full Name"
                  />{" "}
                  <br />
                  <ErrorMessage name="fullname" />
                  <label className="text-start font-medium" htmlFor="email">
                    Email
                  </label>{" "}
                  <br />
                  <Field
                    className="border p-3.5"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />{" "}
                  <br />
                  <ErrorMessage name="email" />
                  <label className="text-start font-medium" htmlFor="password">
                    Password
                  </label>{" "}
                  <br />
                  <Field
                    className="border p-3.5"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />{" "}
                  <br />
                  <ErrorMessage name="password" />
                  <label
                    className="text-start font-medium"
                    htmlFor="confirmpassword"
                  >
                    Confirm Password
                  </label>{" "}
                  <br />
                  <Field
                    className="border p-3.5"
                    name="confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                  />{" "}
                  <br />
                  <ErrorMessage name="confirmpassword" />
                  <p className="text-start mt-5">
                    Already have an account?{" "}
                    <span
                      className=" hover:cursor-pointer text-primary font-light text-HeroButtonOne"
                      onClick={() => {
                        SetAccount("signin");
                      }}
                    >
                      Login
                    </span>{" "}
                    here
                  </p>
                  <button
                    className="text-white mt-5 bg-HeroButtonOne w-32 h-14"
                    type="submit" disabled= {  !formik.isValid   || formik.setSubmitting}
                  >
                    Signup
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </>
  );
}

export default Login;
